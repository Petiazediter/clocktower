import { usePhaseContext } from "../../contexts/PhaseContext"
import Phases from "./phases"

function App() {
  const { isGameStarted, phase } = usePhaseContext()
  
  return (
    <>
      <h1>Clocktower Helper { isGameStarted && `- ${phase}` }</h1>
      <Phases />
    </>
  )
}

export default App
