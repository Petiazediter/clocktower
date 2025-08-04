import { usePhaseContext } from "../contexts/PhaseContext";

type NextPhaseButtonProps = {
  disabled?: boolean;
}

export function NextPhaseButton({ disabled }: NextPhaseButtonProps) {
  const { nextPhase } = usePhaseContext();

  return (
    <button onClick={nextPhase} disabled={disabled}>Next phase</button>
  )
}