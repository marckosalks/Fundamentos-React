import { format, formatDistanceToNow } from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'
import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./avatar"
import React, { useState } from "react"

export default function Post({author, content, publisheAt}) {
  const [comments, setComments] = useState([])

  const [newCommentText, setNewCommentText] = useState('')

  const publisheAtDateFormatted = format(publisheAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publisheAtDateRelativeToNow = formatDistanceToNow(publisheAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCommentClick(){
    event.preventDefault()
    const newCommentValue = event.target.comment.value
    setComments([...comments,newCommentValue])
    setNewCommentText('')
  }

  function handleNewCommentChange(){
    //aqui eu não preciso usar e posso usar o event
    setNewCommentText(event.target.value)
  }

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
      <form onSubmit={handleCommentClick} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        onChange={handleNewCommentChange}
        name="comment"
        value={newCommentText}
        placeholder="deixe seu comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) => {
            return <Comment  content={comment}/>
          })
        }
      </div>
    </article>
  )
}
