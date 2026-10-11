// API Response Types matching Spring Boot backend

export interface ScenarioResponse {
  scenarios: Scenario[];
  metadata: {
    totalCount: number;
    lastUpdated: string;
  };
}

export interface Scenario {
  id: string;
  label: string;
  description: string;
}

export interface JourneyRequest {
  scenarioId: string;
}

export interface JourneyResponse {
  journey: {
    scenarioId: string;
    scenarioLabel: string;
    resultType: string;
  };
  benefitInformation: BenefitInformation;
  disclaimer: {
    text: string;
    importance: string;
  };
  sources: Source[];
  nextSteps: {
    primary: NextStep;
    secondary: NextStep;
  };
  metadata: {
    requestId: string;
    timestamp: string;
    contentVersion: string;
  };
}

export interface BenefitInformation {
  summary: string;
  policyConditions: PolicyCondition[];
  benefitStructure: BenefitStructure;
  itemsToVerify: string[];
}

export interface PolicyCondition {
  id: string;
  title: string;
  description: string;
  sourceId: string;
}

export interface BenefitStructure {
  maximumMonthlyBenefit: {
    amount: number;
    currency: string;
    qualifier: string;
  };
  maximumDuration: {
    value: number;
    unit: string;
    qualifier: string;
  };
  frequencyLimit: string;
}

export interface Source {
  id: string;
  title: string;
  url: string;
  type: string;
  effectiveDate: string | null;
  reviewedDate: string;
}

export interface NextStep {
  label: string;
  url: string;
  description: string;
}

export interface ErrorResponse {
  error: {
    code: string;
    message: string;
    field?: string;
    submittedValue?: string;
    requestId: string;
    timestamp: string;
  };
}
