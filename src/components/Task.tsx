import styles from './Task.module.css';
import { Trash, Check } from 'phosphor-react';

interface TaskProps {
  content: string
  isCompleted: boolean
  onDelete: (task: string) => void
  onComplete: (task: string) => void
}

export function Task({ content, isCompleted, onDelete, onComplete }: TaskProps) {
  const taskClass = isCompleted ? styles.taskCompleted : '';

  function handleDeleteTask() {
    onDelete(content);
  }

  function handleCompleteTask() {
    onComplete(content);
  }

  return (
    <div className={`${taskClass} ${styles.task}`}>

      <button 
        className={`${styles.checkbox} ${styles.taskChild}`} 
        onClick={handleCompleteTask}
      >
        <Check size={15} weight='bold' className={styles.checkboxIcon}/>
      </button>

      <p className={styles.taskChild}>{content}</p>

      <button 
        className={`${styles.taskDelete} ${styles.taskChild}`} 
        title='Deletar tarefa'
        onClick={handleDeleteTask}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}