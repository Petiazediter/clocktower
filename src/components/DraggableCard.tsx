type Props = {
  children: React.ReactNode;
  data: string;
  onDragStartCallback?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEndCallback?: (e: React.DragEvent<HTMLDivElement>) => void;
}

export function DraggableCard({ children, data, onDragStartCallback, onDragEndCallback }: Props) {

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', data);
    if ( onDragStartCallback ) {
      onDragStartCallback(e);
    }
  }

  return (
    <div 
      draggable 
      onDragStart={handleDragStart} 
      onDragEnd={onDragEndCallback} 
      style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '200px' }}
    >
      { children }
    </div>
  )
}