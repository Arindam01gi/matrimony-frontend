export type OnboardingStepKey = "personal" | "career" | "family" | "lifestyle";

export type SelectField = {
  id: string;
  label: string;
  options: string[];
  placeholder?: string;
  type: "select";
};

export type RadioField = {
  id: string;
  label: string;
  options: string[];
  type: "radio";
};

export type ChipsField = {
  id: string;
  label: string;
  options: string[];
  type: "chips";
};

export type TextField = {
  id: string;
  label: string;
  placeholder?: string;
  type: "date" | "text" | "textarea";
};

export type RangeField = {
  id: string;
  label: string;
  max: number;
  min: number;
  type: "range";
  unit: string;
};

export type OnboardingField =
  | ChipsField
  | RadioField
  | RangeField
  | SelectField
  | TextField;

export type StepConfig = {
  description: string;
  fields: OnboardingField[];
  key: OnboardingStepKey;
  label: string;
  title: string;
};
