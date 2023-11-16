import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./avatar"
import { useState } from "react"

type CommentProps = {
  content: string
  onDeleteComment: (content: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    console.log('vou passa a burracha')
    onDeleteComment(content)

  }

  function handleLikeCount() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/bem-aleatorio..jpg?w=564&ssl=1"
        alt=""

      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Patagonia</strong>
              <time title="11 de Maio de 2023" dateTime="2023-05-11 23:12">
                Cerca de 1 hora atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={22} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp onClick={handleLikeCount} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
