import { createContext, useCallback, useContext, useState } from "react";

type Phase = "Setup";

type PhaseContextType = {
  isGameStarted: boolean,
  startGame: () => void,
  phase: Phase
}

const PhaseContext = createContext<PhaseContextType | null>(null);

export function PhaseContextProvider({ children }: { children: React.ReactNode }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [phase, setPhase] = useState<Phase>('Setup');

  const startGame = useCallback( () => {
    setIsGameStarted(true);
    setPhase('Setup');
  }, []);

  return (
    <PhaseContext.Provider value={{ isGameStarted, startGame, phase }}>
      {children}
    </PhaseContext.Provider>
  )
}

export function usePhaseContext() {
  const context = useContext(PhaseContext)

  if (!context) {
    throw new Error('usePhaseContext must be used within a PhaseContextProvider')
  }

  return context
}