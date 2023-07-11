import styles from './App.module.css'
import {PlusCircle} from 'phosphor-react'

import { Header } from './components/Header'

function App() {

  return (
    <main>
      <Header />
      <div className={styles.wrapper}>

        <form className={styles.inputForm}>
          <input 
            type='text' 
            placeholder='Adicione uma nova tarefa' 
            name='task'
          />
          <button type='submit'>
            Criar <PlusCircle size={32} />
          </button>
        </form>



      </div>
    </main>
  )
}

export default App
