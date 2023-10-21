import { format, formatDistanceToNow } from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'
import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./avatar"
import React from "react"
import { Link } from 'phosphor-react'



export default function Post({author, content, publisheAt}) {
  const publisheAtDateFormatted = format(publisheAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publisheAtDateRelativeToNow = formatDistanceToNow(publisheAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publisheAtDateFormatted} dataTime={publisheAt.toISOString()}>
          {publisheAtDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line=> {
          if(line.type === 'paragraph'){
            return <p>{line.content}</p>
          }else if(line.type === 'link'){
            return <p><a href="#">{line.content}</a></p>
          }
        })
          
        }
      </div>
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
