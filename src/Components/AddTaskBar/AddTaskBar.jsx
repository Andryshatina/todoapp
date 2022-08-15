
const AddTaskBar = ({ value, onInputChange, addTask }) => {
	return (
		<div className='AddTask' >
			<input placeholder='What needs to be done?' value={value} onChange={(e) => onInputChange(e)} onKeyDown={(e) => addTask(e)} />
		</div>
	)
}

export default AddTaskBar;