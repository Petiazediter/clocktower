import { usePhaseContext } from "../../contexts/PhaseContext"

function App() {
  
  const { isGameStarted, startGame, phase } = usePhaseContext()
  
  return (
    <>
      <h1>Clocktower Helper { isGameStarted && `- ${phase}` }</h1>
      { !isGameStarted && <button onClick={startGame}>Start Game</button> }
    </>
  )
}

export default App
