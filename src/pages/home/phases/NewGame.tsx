import { usePhaseContext } from "../../../contexts/PhaseContext"

export default function NewGame() {
  const { startGame } = usePhaseContext();
  return (
    <button onClick={startGame}>Start new game</button>
  )
}