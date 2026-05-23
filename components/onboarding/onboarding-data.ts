import type { StepConfig } from "./onboarding-types";

export const steps: StepConfig[] = [
  {
    key: "personal",
    label: "Personal Details",
    title: "Build Your Profile",
    description: "Step 1: Tell us about yourself",
    fields: [
      {
        id: "fullName",
        label: "Full Name",
        placeholder: "e.g. Ananya Das",
        type: "text",
      },
      { id: "dob", label: "Date of Birth", type: "date" },
      { id: "gender", label: "Gender", options: ["Female", "Male"], type: "radio" },
      {
        id: "religion",
        label: "Religion",
        options: ["Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain"],
        placeholder: "Select Religion",
        type: "select",
      },
      {
        id: "motherTongue",
        label: "Mother Tongue",
        options: ["Bengali", "English", "Hindi", "Sylheti"],
        placeholder: "Select Language",
        type: "select",
      },
      {
        id: "interests",
        label: "A few initial interests",
        options: ["Classical Music", "Travel", "Cooking", "Literature", "Photography"],
        type: "chips",
      },
    ],
  },
  {
    key: "career",
    label: "Career & Education",
    title: "Career & Education",
    description: "Step 2: Share your learning and work story",
    fields: [
      {
        id: "education",
        label: "Highest Education",
        options: ["Bachelors", "Masters", "Doctorate", "Diploma", "Professional Degree"],
        placeholder: "Select Education",
        type: "select",
      },
      {
        id: "university",
        label: "College / University",
        placeholder: "e.g. Presidency University",
        type: "text",
      },
      {
        id: "occupation",
        label: "Occupation",
        options: [
          "Software Professional",
          "Doctor",
          "Business Owner",
          "Teacher",
          "Creative Professional",
          "Government Service",
        ],
        placeholder: "Select Occupation",
        type: "select",
      },
      {
        id: "company",
        label: "Company / Organization",
        placeholder: "e.g. Elite Design Studio",
        type: "text",
      },
      {
        id: "income",
        label: "Annual Income",
        options: [
          "Rs. 3L - Rs. 6L",
          "Rs. 6L - Rs. 10L",
          "Rs. 10L - Rs. 15L",
          "Rs. 15L - Rs. 25L",
          "Rs. 25L+",
        ],
        placeholder: "Select Income Range",
        type: "select",
      },
      {
        id: "workLocation",
        label: "Working Location",
        placeholder: "e.g. Kolkata, West Bengal",
        type: "text",
      },
    ],
  },
  {
    key: "family",
    label: "Family",
    title: "Family Background",
    description: "Step 3: Help matches understand your home and values",
    fields: [
      {
        id: "familyType",
        label: "Family Type",
        options: ["Nuclear", "Joint", "Extended"],
        type: "radio",
      },
      {
        id: "familyValues",
        label: "Family Values",
        options: ["Traditional", "Moderate", "Liberal"],
        type: "radio",
      },
      {
        id: "fatherOccupation",
        label: "Father's Occupation",
        placeholder: "e.g. Retired Civil Engineer",
        type: "text",
      },
      {
        id: "motherOccupation",
        label: "Mother's Occupation",
        placeholder: "e.g. Homemaker",
        type: "text",
      },
      {
        id: "siblings",
        label: "Siblings",
        options: ["No Siblings", "1 Sibling", "2 Siblings", "3+ Siblings"],
        placeholder: "Select Siblings",
        type: "select",
      },
      {
        id: "familyLocation",
        label: "Family Location",
        placeholder: "e.g. South Kolkata, West Bengal",
        type: "text",
      },
    ],
  },
  {
    key: "lifestyle",
    label: "Lifestyle",
    title: "Lifestyle & Story",
    description: "Step 4: Add the details that make your profile feel complete",
    fields: [],
  },
];

export const stepKeys = steps.map((step) => step.key);

export const defaultValues: Record<string, string> = {
  height: "165",
};
