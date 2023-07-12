import { Task } from './Task'
import styles from './TaskList.module.css'
import { ClipboardText } from 'phosphor-react'

interface TaskListProps {
  tasks: {
    id: number
    content: string
    isCompleted: boolean
  }[]
  onDeleteTask: (task: string) => void
}

export function TaskList({ tasks, onDeleteTask }: TaskListProps) {
  return (
    <div className={styles.taskList}>

      <div className={styles.taskListHeader}>
        <div className={styles.taskListHeaderCreated}>
          <p>Tarefas criadas<span>0</span></p>
        </div>
        <div className={styles.taskListHeaderCompleted}>
          <p>Concluídas<span>0</span></p>
        </div>
      </div>

      <div className={styles.taskListContent}>
        
        {tasks.length === 0 ? (
          <div className={styles.taskListContentEmpty}>
            <ClipboardText size={64} className={styles.taskListContentEmptyIcon}/>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          tasks.map(task => (
            <Task 
              key={task.id}
              content={task.content}
              isCompleted={task.isCompleted}
              onDelete={onDeleteTask}
            />
          ))
        )}

      </div>

    </div>
  )
}
