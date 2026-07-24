#!/usr/bin/env node

import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { parseArgs } from "node:util";

import { MobsCore } from "./core/mobs-core.js";
import type {
  FactualDiagnostic,
  VerticalFlowInput,
} from "./types.js";

const HELP = `Usage:
  mobs resolve-contexts --project <project.json> --brand <brand.json>
  mobs --help
`;

interface FlowRunner {
  run(input: VerticalFlowInput): Promise<FactualDiagnostic>;
}

export interface CliDependencies {
  createCore(): Promise<FlowRunner>;
  write(output: string): void;
}

const defaultDependencies: CliDependencies = {
  createCore: () => MobsCore.create(),
  write: (output) => process.stdout.write(output),
};

function interfaceFailure(message: string): FactualDiagnostic {
  return {
    status: "failed",
    steps: [
      {
        component: "interface",
        action: "parse-arguments",
        status: "failed",
      },
    ],
    filesRead: [],
    contexts: {},
    failure: {
      component: "interface",
      stage: "parse-arguments",
      message,
    },
  };
}

function coreFailure(
  stage: "initialize" | "execute",
  message: string,
): FactualDiagnostic {
  return {
    status: "failed",
    steps: [
      {
        component: "core",
        action: `${stage}-flow`,
        status: "failed",
      },
    ],
    filesRead: [],
    contexts: {},
    failure: {
      component: "core",
      stage,
      message,
    },
  };
}

function writeDiagnostic(
  diagnostic: FactualDiagnostic,
  write: CliDependencies["write"],
): void {
  write(`${JSON.stringify(diagnostic, null, 2)}\n`);
}

function toInternalError(error: unknown): Error {
  const internalError =
    error instanceof Error ? error : new Error("Unknown internal failure");

  // Materialize the stack while keeping it internal to this process.
  void internalError.stack;
  return internalError;
}

function parseCliArguments(argv: string[]) {
  return parseArgs({
    args: argv,
    allowPositionals: true,
    strict: true,
    options: {
      project: {
        type: "string",
      },
      brand: {
        type: "string",
      },
      help: {
        type: "boolean",
        short: "h",
      },
    },
  });
}

export async function main(
  argv: string[] = process.argv.slice(2),
  dependencies: CliDependencies = defaultDependencies,
): Promise<number> {
  let parsedArguments: ReturnType<typeof parseCliArguments>;

  try {
    parsedArguments = parseCliArguments(argv);
  } catch (error) {
    const internalError = toInternalError(error);
    writeDiagnostic(
      interfaceFailure(`Invalid arguments: ${internalError.message}`),
      dependencies.write,
    );
    return 2;
  }

  const { values, positionals } = parsedArguments;

  if (values.help) {
    dependencies.write(HELP);
    return 0;
  }

  if (
    positionals.length !== 1 ||
    positionals[0] !== "resolve-contexts"
  ) {
    writeDiagnostic(
      interfaceFailure('Expected the command "resolve-contexts"'),
      dependencies.write,
    );
    return 2;
  }

  if (!values.project || !values.brand) {
    writeDiagnostic(
      interfaceFailure(
        'Both "--project" and "--brand" declaration paths are required',
      ),
      dependencies.write,
    );
    return 2;
  }

  let core: FlowRunner;

  try {
    core = await dependencies.createCore();
  } catch (error) {
    const internalError = toInternalError(error);
    writeDiagnostic(
      coreFailure(
        "initialize",
        `Could not initialize MOBS v1 flow: ${internalError.message}`,
      ),
      dependencies.write,
    );
    return 1;
  }

  try {
    const diagnostic = await core.run({
      projectPath: values.project,
      brandPath: values.brand,
    });

    writeDiagnostic(diagnostic, dependencies.write);
    return diagnostic.status === "ok" ? 0 : 1;
  } catch (error) {
    const internalError = toInternalError(error);
    writeDiagnostic(
      coreFailure(
        "execute",
        `Could not execute MOBS v1 flow: ${internalError.message}`,
      ),
      dependencies.write,
    );
    return 1;
  }
}

const invokedPath = process.argv[1];

if (
  invokedPath &&
  pathToFileURL(resolve(invokedPath)).href === import.meta.url
) {
  process.exitCode = await main();
}
