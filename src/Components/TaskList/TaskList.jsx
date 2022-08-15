import React from 'react';
import Task from '../Task/Task';
import './TaskList.styles.css';

const TaskList = ({ taskList, toggleDone, deleteTask }) => {
	return (
		<ul className='TaskList'>
			{
				taskList.map((task, idx) => {
					return (
						<Task key={task.id} task={task} idx={idx} toggleDone={toggleDone} deleteTask={deleteTask} />
					);
				})

			}
		</ul>
	)
}

export default TaskList;