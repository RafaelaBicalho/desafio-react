import styles from './List.module.css'

export function List() {
        return (
            <div>
            <div className={styles.accountant}>
                <p>Tarefas criadas <span>5</span></p>
                <p>Concluídas <span>2 de 5</span></p>
            </div>
        </div>
        )
}