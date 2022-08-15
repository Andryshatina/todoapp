import './Task.styles.css';

const Task = ({ task, idx, toggleDone, deleteTask }) => {

	return (
		<li >
			<label className='container'>
				<input type='checkbox' checked={task.isDone} onChange={() => toggleDone(idx)} />
				<span className={task.isDone ? 'completed' : ''}>{task.text}</span>
			</label>
			<button className='deleteButton' onClick={() => deleteTask(idx)}>x</button>
		</li>
	)
}

export default Task;