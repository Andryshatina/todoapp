import './BottomBar.styles.css';

const BottomBar = ({ taskList, deleteCompleted, filter, setFilter }) => {

	return (
		<div className='bottomBar'>
			<p>{taskList.filter(task => !task.isDone).length} tasks left</p>
			<div>
				<button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
				<button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
				<button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
			</div>
			<button onClick={deleteCompleted}>Clear Completed</button>
		</div>
	)
}

export default BottomBar;