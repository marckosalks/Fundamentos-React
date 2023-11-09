import { format, formatDistanceToNow } from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'
import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./avatar"
import React, { useState } from "react"

export default function Post({author, content, publisheAt}) {
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')
  const  isNewCommentEmpty =  newCommentText.length === 0

  console.log(newCommentText)

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
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete){
    //fazer algo com o comentário
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeleteOne)
  }

  function handleNewCommentIncalid(){
    event.target.setCustomValidity('Esse campo é obrigatório!')
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
        <time title={publisheAtDateFormatted} dateTime={publisheAt.toISOString()}>
          {publisheAtDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line=> {
          if(line.type === 'paragraph'){
            return <p key={line.content}>{line.content}</p>
          }else if(line.type === 'link'){
            return <p key={line.content}><a href="#">{line.content}</a></p>
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
        placeholder="deixe seu comentário" 
        required // quando uma propriedade true por padrão não precisamos passar valor
        onInvalid={handleNewCommentIncalid}/>
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) => {
            return (
              <Comment 
                key={comment} 
                content={comment}
                onDeleteComment={deleteComment}/>
                // usamos esse on para dizer quando acontecer
            )
          })
        }
      </div>
    </article>
  )
}
