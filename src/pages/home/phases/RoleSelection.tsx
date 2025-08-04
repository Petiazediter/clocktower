import { useState } from "react";
import { DraggableCard } from "../../../components/DraggableCard";

const ROLES = [
  'Role 1',
  'Role 2',
  'Role 3',
  'Role 4',
  'Role 5',
  'Role 6',
  'Role 7',
]

export default function RoleSelection() {

  const [inGameRoles, setInGameRoles] = useState<string[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const role = e.dataTransfer.getData('text/plain');
    setInGameRoles([...inGameRoles, role]);
  }
  
  const handleDropFromAvailableRoles = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const role = e.dataTransfer.getData('text/plain');
    setInGameRoles(roles => roles.filter(r => r !== role));
    setIsDraggingInGameRole(false);
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Allow dropping
  }

  const [isDraggingInGameRole, setIsDraggingInGameRole] = useState(false);

  const handleDragStartFromInGameRoles = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDraggingInGameRole(true);
  }

  const handleDragEndFromInGameRoles = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDraggingInGameRole(false);
  }

  return (
    <div>
      <h2>Role selection</h2>
      <h3>In game roles</h3>
      <ul>
        {inGameRoles.map((role) => (
          <li key={role}>
            <DraggableCard data={role} onDragEndCallback={handleDragEndFromInGameRoles} onDragStartCallback={handleDragStartFromInGameRoles}>
              <h4>{role}</h4>
            </DraggableCard>
          </li>
        ))}
        { !isDraggingInGameRole && <li>
          <div onDrop={handleDrop} onDragOver={handleDragOver} style={{ border: '1px dotted black', padding: '10px', margin: '10px', width: '200px' }}>
            Drag here
          </div>
        </li> }
      </ul>
      <h3>Available roles</h3>
      { isDraggingInGameRole && <div onDragOver={handleDragOver} onDrop={handleDropFromAvailableRoles} style={{ border: '1px dotted black', padding: '10px', margin: '10px', width: '200px' }}>Discard role by dragging it here</div> }
      <ul>
        { ROLES.filter((role) => !inGameRoles.includes(role)).map((role) => (
          <li key={role}>
            <DraggableCard data={role}>
              <h4>{role}</h4>
            </DraggableCard>
          </li>
        ))}
      </ul>
    </div>
  )
}