import { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import TaskList from './Components/TaskList/TaskList';
import BottomBar from './Components/BottomBar/BottomBar';
import AddTaskBar from './Components/AddTaskBar/AddTaskBar';

const App = () => {
  const [input, setInput] = useState('');

  const [taskList, setTaskList] = useState([
    {
      id: uniqid(),
      text: 'Sample todo',
      isDone: false
    }
  ]);

  const [filter, setFilter] = useState('all');

  const onFilter = () => {
    switch (filter) {
      case 'all':
        return taskList;
      case 'active':
        return taskList.filter(task => !task.isDone);
      case 'completed':
        return taskList.filter(task => task.isDone);
      default:
        return taskList;
    }
  };

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

  const deleteCompleted = () => {
    setTaskList(taskList.filter(task => !task.isDone));
  }

  const toggleDone = (idx) => {
    let temp = [...taskList];
    temp[idx].isDone = !temp[idx].isDone;
    setTaskList(temp);
  }

  return (
    <div className="App">
      <h1 className='header'>todos</h1>
      <div className='items'>
        <AddTaskBar value={input} onInputChange={onInputChange} addTask={addTask} />
        <TaskList taskList={onFilter()} toggleDone={toggleDone} deleteTask={deleteTask} />
        <BottomBar taskList={taskList} deleteCompleted={deleteCompleted} filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
}

export default App;
