import React from 'react';
import Task from '../Task/Task';

const TaskList = ({ taskList, toggleDone, deleteTask }) => {
	return (
		<ul>

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