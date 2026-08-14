import { ProcessSteps as ProcessStepsInner } from "@/components/ui/ProcessSteps";

/**
 * Homepage wrapper for the process section with numbered kicker.
 */
export function ProcessSteps() {
  return (
    <ProcessStepsInner
      number="06"
      label="Process"
      title="How It Works"
      lead="A simple process, from first message to finished work — so you always know where your project stands."
    />
  );
}
