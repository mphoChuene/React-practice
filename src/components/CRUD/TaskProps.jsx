export const TaskProps = (props) => {
return(
    <div>
    <h5>{props.taskName}</h5>
    <button onClick={() => props.deleteTask(props.id)}>delete</button>
  </div>
)
};
