import styles from  './Post.module.css'
import { Trash } from 'phosphor-react'

export function Post() {
    return (
        <div className={styles.Container}>
            <label className={styles.Post}>  
                <div className={styles.Wrapper}>
                    <input type="checkbox" />
                    <span className={styles.Check}></span>
                </div>  
                <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <button className={styles.Button}><Trash size={20} color='var(--gray-300)'>  </Trash></button>
            </label>
        </div>
    )
}