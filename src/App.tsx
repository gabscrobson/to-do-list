import { useState } from 'react'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { TaskList } from './components/TaskList'

interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(task: string) {
    const newTask = {
      id: tasks.length + 1,
      content: task,
      isCompleted: false
    }

    setTasks([newTask, ...tasks]);
  }

  function deleteTask(task: string) {
    const newTasks = tasks.filter(taskItem => taskItem.content !== task);
    setTasks(newTasks);
  }

  function completeTask(task: string) {
    const newTasks = tasks.map(taskItem => {
      if (taskItem.content === task) {
        taskItem.isCompleted = !taskItem.isCompleted;
      }

      return taskItem;
    });

    setTasks(newTasks);
  }

  return (
    <main>
      <Header />

      <div className={styles.wrapper}>
        <Input onAddTask={addTask}/>
        <TaskList 
          tasks={tasks} 
          onDeleteTask={deleteTask} 
          onCompleteTask={completeTask}
        />
      </div>

    </main>
  )
}

export default App
