import { usePhaseContext } from "../../../contexts/PhaseContext";
import NewGame from "./NewGame";
import Setup from "./Setup";
import RoleSelection from "./RoleSelection";

export default function Phases() {
  const { phase, isGameStarted } = usePhaseContext();

  if ( !isGameStarted ) {
    return (
      <NewGame />
    )
  }

  const renderPhase = () => {
    switch (phase) {
      case 'Setup':
        return <Setup />;
      case 'RoleSelection':
        return <RoleSelection />;
      default:
        return `Unknown phase: ${phase}`;
    }
  }
  
  return renderPhase();
}