import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Car repair',
        day: 'Jan 21th at 18:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Learn React Hooks',
        day: 'Jan 21th from 19:00 to 22:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Jan 22th after 17:30pm',
        reminder: false,
    }
])


//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

//delete task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task) => task.id !== id ))
}


  return (
    <div className="container">
    <Header />
    <AddTask />
    { tasks.length > 0 ? <Tasks  tasks={tasks} 
    onDelete={deleteTask} 
    onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
