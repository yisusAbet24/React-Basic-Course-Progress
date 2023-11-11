import "./task.css";

export function Taks({ realy }) {
  return (
    <div className="card">
      <h1>Mi primera tarea</h1>
      <span className={realy ? "spam-true" : "spam-false"}>
        {realy ? "tarea realizada" : "tarea pendiente"}
      </span>
    </div>
  );
}
