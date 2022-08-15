
const BottomBar = ({ taskList, deleteCompleted, setFilter }) => {

	return (
		<div>
			<p>{taskList.filter(task => !task.isDone).length} tasks left</p>
			<div>
				<button onClick={() => setFilter('all')}>All</button>
				<button onClick={() => setFilter('active')}>Active</button>
				<button onClick={() => setFilter('completed')}>Completed</button>
			</div>
			<button onClick={deleteCompleted}>Clear Completed</button>
		</div>
	)
}

export default BottomBar;