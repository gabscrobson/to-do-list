import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

interface TaskProps {
  content: string
  isCompleted: boolean
  onDelete: (task: string) => void
}

export function Task({ content, isCompleted, onDelete }: TaskProps) {
  function handleDeleteTask() {
    onDelete(content);
  }

  return (
    <div className={styles.task}>

      <button className={`${styles.checkbox} ${styles.taskChild}`}></button>

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