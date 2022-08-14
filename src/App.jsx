import { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import TaskList from './Components/TaskList/TaskList';

const App = () => {
  const [input, setInput] = useState('');
  const [taskList, setTaskList] = useState([
    {
      id: uniqid(),
      text: 'Sample todo',
      isDone: false
    }
  ]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  }

  const addTask = (e) => {
    if (e.key === 'Enter') {
      setTaskList([...taskList, { id: uniqid(), text: e.target.value, isDone: false }]);
      setInput('');
    }
  }

  const deleteTask = (idx) => {
    let temp = [...taskList];
    temp.splice(idx, 1);
    setTaskList(temp);
  }

  const toggleDone = (idx) => {
    let temp = [...taskList];
    temp[idx].isDone = !temp[idx].isDone;
    setTaskList(temp);
  }


  return (
    <div className="App">
      <div className='AddTask' >
        <input placeholder='Add a new task' value={input} onChange={(e) => onInputChange(e)} onKeyDown={(e) => addTask(e)} />
      </div>
      <TaskList taskList={taskList} toggleDone={toggleDone} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
