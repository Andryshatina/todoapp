
const Task = ({ task, idx, toggleDone, deleteTask }) => {

	return (
		<li>
			<input type='checkbox' checked={task.isDone} onChange={() => toggleDone(idx)} />
			{task.text}
			<button onClick={() => deleteTask(idx)}>x</button>
		</li>
	)
}

export default Task;