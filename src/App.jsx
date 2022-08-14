import { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import TaskList from './Components/TaskList/TaskList';
import Footer from './Components/Footer/Footer';

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

  let filteredTaskList = onFilter()
  return (

    <div className="App">
      <h1>todos</h1>
      <div className='AddTask' >
        <input placeholder='What needs to be done?' value={input} onChange={(e) => onInputChange(e)} onKeyDown={(e) => addTask(e)} />
      </div>
      <TaskList taskList={filteredTaskList} toggleDone={toggleDone} deleteTask={deleteTask} />
      <Footer taskList={taskList} deleteCompleted={deleteCompleted} setFilter={setFilter} />
      {console.log(filter)}
    </div>
  );
}

export default App;
