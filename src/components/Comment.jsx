import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./avatar"

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/bem-aleatorio..jpg?w=564&ssl=1" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Patagonia</strong>
              <time title="11 de Maio de 2023" dataTime="2023-05-11 23:12">
                Cerca de 1 hora atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={22} />
            </button>
          </header>
          <p>Muito bem Marcão, voa mlk!🪁 </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
