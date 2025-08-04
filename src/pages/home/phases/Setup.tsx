import { useMemo, useState } from "react";
import { NextPhaseButton } from "../../../components/NextPhaseButton";

const MIN_PLAYERS = 1;
const MAX_PLAYERS = 2;

export default function Setup() {
  const [players, setPlayers] = useState<string[]>([]);


  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleAddPlayer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const playerName = e.currentTarget.playerName.value;
    if ( !players.includes(playerName) ) {
      setPlayers([...players, playerName]);
    } else {
      setErrorMessage(`Player ${playerName} already exists`);
    }
  }

  const dropPlayer = (player: string) => {
    setPlayers(players.filter((p) => p !== player));
  }

  const isReady = useMemo( () => {
    if ( players.length < MIN_PLAYERS ) {
      setErrorMessage(`Minimum number of players is ${MIN_PLAYERS}`);
    } else if ( players.length > MAX_PLAYERS ) {
      setErrorMessage(`Maximum number of players is ${MAX_PLAYERS}`);
    } else {
      setErrorMessage(null);
    }
    return players.length >= MIN_PLAYERS && players.length <= MAX_PLAYERS;
  }, [players]);

  return (
    <div>
      <h1>Setup phase</h1>
      { errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div> }
      <ul>
          {players.map((player) => (
            <li key={player}>
              <span>{player}</span>&nbsp;
              <button onClick={() => dropPlayer(player)}> Delete </button>
            </li>
          ))}
      </ul>
      <form onSubmit={handleAddPlayer}>
        <input type="text" name="playerName" placeholder="Enter a player name" />
        <button type="submit">Add player</button>
      </form>
      <br/>
      <NextPhaseButton disabled={!isReady} />
    </div>
  )
}