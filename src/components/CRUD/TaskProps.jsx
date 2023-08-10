export const TaskProps = (props) => {
  return (
    <div >
      <h5 style={{color: props.isComplete ? 'green' : 'black'}} >{props.taskName}</h5>
      <button onClick={() => props.deleteTask(props.id)}>delete</button>
      <button onClick={()=>props.completed(props.id)}>completed</button>
    </div>
  );
};
