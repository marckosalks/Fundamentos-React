import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./avatar"

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://avatars.githubusercontent.com/u/84982384?v=4' />

          <div className={styles.authorInfo}>
            <strong>Marcos Sales</strong>
            <span>Front End Developer</span>
          </div>
        </div>
        <time title="11 de Maio de 2023" dataTime="2023-05-11 23:12">
          Publicado a 1 hora
        </time>
      </header>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="deixe seu comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
