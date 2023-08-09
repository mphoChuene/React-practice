export const TaskProps = (props) => {
  return (
    <div style={{color: props.isComplete ? 'green' : 'black'}}>
      <h5 >{props.taskName}</h5>
      <button onClick={() => props.deleteTask(props.id)}>delete</button>
      <button onClick={()=>props.completed(props.id)}>completed</button>
    </div>
  );
};
