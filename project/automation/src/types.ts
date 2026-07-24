export type DiagnosticComponent =
  | "interface"
  | "core"
  | "project-engine"
  | "brand-engine";

export type DiagnosticStatus = "ok" | "failed";

export interface DiagnosticStep {
  component: DiagnosticComponent;
  action: string;
  status: DiagnosticStatus;
}

export interface ProjectResolvedContext {
  projectId: string;
  brandId: string;
}

export interface BrandResolvedContext {
  brandId: string;
  declaredSourcePath: string;
  sourcePath: string;
}

export interface ResolvedContexts {
  project?: ProjectResolvedContext;
  brand?: BrandResolvedContext;
}

export interface FactualFailure {
  component: DiagnosticComponent;
  stage: string;
  message: string;
}

export interface FactualDiagnostic {
  status: DiagnosticStatus;
  steps: DiagnosticStep[];
  filesRead: string[];
  contexts: ResolvedContexts;
  failure?: FactualFailure;
}

export interface VerticalFlowInput {
  projectPath: string;
  brandPath: string;
}
