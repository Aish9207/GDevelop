// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdExpressionMetadata extends gdAbstractFunctionMetadata {
  constructor(returnType: string, extensionNamespace: string, name: string, fullname: string, description: string, group: string, smallicon: string): void;
  getReturnType(): string;
  getFullName(): string;
  getDescription(): string;
  getGroup(): string;
  getSmallIconFilename(): string;
  getHelpPath(): string;
  isShown(): boolean;
  isPrivate(): boolean;
  isRelevantForLayoutEvents(): boolean;
  isRelevantForFunctionEvents(): boolean;
  isRelevantForAsynchronousFunctionEvents(): boolean;
  isRelevantForCustomObjectEvents(): boolean;
  getParameter(id: number): gdParameterMetadata;
  getParametersCount(): number;
  getParameters(): gdVectorParameterMetadata;
  setHidden(): gdExpressionMetadata;
  setPrivate(): gdExpressionMetadata;
  setRelevantForLayoutEventsOnly(): gdExpressionMetadata;
  setRelevantForFunctionEventsOnly(): gdExpressionMetadata;
  setRelevantForAsynchronousFunctionEventsOnly(): gdExpressionMetadata;
  setRelevantForCustomObjectEventsOnly(): gdExpressionMetadata;
  addParameter(type: string, description: string, optionalObjectType?: string, parameterIsOptional?: boolean): gdExpressionMetadata;
  addCodeOnlyParameter(type: string, supplementaryInformation: string): gdExpressionMetadata;
  setDefaultValue(defaultValue: string): gdExpressionMetadata;
  setParameterLongDescription(longDescription: string): gdExpressionMetadata;
  setParameterExtraInfo(extraInfo: string): gdExpressionMetadata;
  addRequiredObjectCapabilityOnLastParameter(capability: string): gdExpressionMetadata;
  setRequiredBaseObjectCapability(capability: string): gdExpressionMetadata;
  getRequiredBaseObjectCapability(): string;
  getCodeExtraInformation(): gdExpressionMetadata;
  setFunctionName(functionName: string): gdExpressionMetadata;
  getFunctionName(): string;
  setStatic(): gdExpressionMetadata;
  setIncludeFile(includeFile: string): gdExpressionMetadata;
  addIncludeFile(includeFile: string): gdExpressionMetadata;
  getIncludeFiles(): gdVectorString;
  delete(): void;
  ptr: number;
};