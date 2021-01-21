import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


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
  return (
    <div className="container">
    <Header />
    <Tasks  tasks={tasks}/>
    </div>
  );
}

export default App;
