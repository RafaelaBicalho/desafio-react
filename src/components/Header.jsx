import styles from './Header.module.css'
import { PlusCircle } from 'phosphor-react'

import rocketLogo from '../assets/rocket-logo.svg'

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <img src={rocketLogo} alt="Logotipo da Rocket" />
                <p>todo</p>
            </div>

            <div className={styles.Create}>
                <input type="text" placeholder='Adicionar uma nova tarefa'/>
                <button>Criar <PlusCircle size={16} color='var(--gray-100)'> </PlusCircle></button>
            </div>
        </header>
    )
}