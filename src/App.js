import './App.css';
import Square from './Square';

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value={1}/>
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}