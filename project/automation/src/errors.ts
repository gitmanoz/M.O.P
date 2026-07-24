import type { DiagnosticComponent, FactualFailure } from "./types.js";

export class MobsFlowError extends Error {
  readonly component: DiagnosticComponent;
  readonly stage: string;

  constructor(
    component: DiagnosticComponent,
    stage: string,
    message: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = "MobsFlowError";
    this.component = component;
    this.stage = stage;
  }

  toFactualFailure(): FactualFailure {
    return {
      component: this.component,
      stage: this.stage,
      message: this.message,
    };
  }
}

export function toMobsFlowError(
  error: unknown,
  component: DiagnosticComponent,
  stage: string,
  message: string,
): MobsFlowError {
  if (error instanceof MobsFlowError) {
    return error;
  }

  const cause =
    error instanceof Error ? error : new Error("Unknown internal failure");
  const causeMessage = error instanceof Error ? ` ${error.message}` : "";

  return new MobsFlowError(
    component,
    stage,
    `${message}${causeMessage}`,
    { cause },
  );
}
