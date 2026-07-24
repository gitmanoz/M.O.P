export type DiagnosticComponent =
  | "interface"
  | "core"
  | "project-engine"
  | "brand-engine"
  | "asset-generator";

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

export interface AssetGenerationBrandContext {
  brandId: string;
  sourcePath: string;
  exportsPath: string;
  masters: Record<string, string>;
}

export interface ExportJob {
  masterKey: string;
  format: "png";
}

export interface AssetGeneratorBrandContextView {
  brandId: string;
  sourcePath: string;
  exportsPath: string;
}

export interface AssetGeneratorJobContextView {
  masterKey: string;
  format: "png";
}

export interface AssetGeneratorContexts {
  brand?: AssetGeneratorBrandContextView;
  job?: AssetGeneratorJobContextView;
}

export interface AssetGeneratorDiagnostic {
  status: DiagnosticStatus;
  steps: DiagnosticStep[];
  filesRead: string[];
  filesWritten: string[];
  contexts: AssetGeneratorContexts;
  failure?: FactualFailure;
}
