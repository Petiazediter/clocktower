import { createContext, useCallback, useContext, useState } from "react";

type Phase = "Setup" | "RoleSelection";

type PhaseContextType = {
  isGameStarted: boolean,
  startGame: () => void,
  phase: Phase,
  nextPhase: () => void
}

const PhaseContext = createContext<PhaseContextType | null>(null);

export function PhaseContextProvider({ children }: { children: React.ReactNode }) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [phase, setPhase] = useState<Phase>('Setup');

  const startGame = useCallback( () => {
    setIsGameStarted(true);
    setPhase('Setup');
  }, []);

  const nextPhase = useCallback( () => {
    switch (phase) {
      case 'Setup':
        setPhase('RoleSelection');
        break;
      case 'RoleSelection':
        throw new Error('No more phases');
      default:
        throw new Error('Invalid phase');
    }
  }, [phase]);

  return (
    <PhaseContext.Provider value={{ isGameStarted, startGame, phase, nextPhase }}>
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