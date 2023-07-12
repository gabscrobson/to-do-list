import { useState } from 'react';
import styles from './Input.module.css'
import {PlusCircle} from 'phosphor-react'

interface InputProps {
  onAddTask: (task: string) => void
}

export function Input({ onAddTask }: InputProps) {
  const [task, setTask] = useState('');

  function handleAddTask(event: React.FormEvent) {
    event.preventDefault();
    onAddTask(task);
    setTask('');
  }

  function handleChangeTask(event: React.ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  return (
    <form className={styles.inputForm} autoComplete='off' onSubmit={handleAddTask}>

      <input
        type='text' 
        placeholder='Adicione uma nova tarefa' 
        name='task'
        required
        onChange={handleChangeTask}
        value={task}
      />

      <button type='submit'>
        Criar <PlusCircle size={32} />
      </button>

    </form>
  )
}