import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./avatar"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

type Author = {
  name: string
  role: string
  avatarUrl: string
}

export type Content = {
  type: 'paragraph' | 'link'
  content: string
}

export type PostProps = {
  author: Author
  content: Content[]
  publisheAt: number
}


export default function Post({ author, content, publisheAt }: PostProps) {
  const [comments, setComments] = useState([
    'Post incrível cara, meus parabéns !'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  console.log(newCommentText)

  const publisheAtDateFormatted = format(publisheAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publisheAtDateRelativeToNow = formatDistanceToNow(publisheAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCommentClick(event: FormEvent) {
    event.preventDefault()

    //esse codigo esta estranhão
    //const newCommentValue = event.target.comment.value
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    //aqui eu não preciso usar e posso usar o event
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete: string) {
    //fazer algo com o comentário
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeleteOne)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }
  const isNewCommentEmpty = newCommentText.length === 0

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
        <time title={publisheAtDateFormatted} dateTime={publisheAt.toString()}>
          {publisheAtDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })

        }
      </div>
      <form onSubmit={handleCommentClick} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required />
        {/* // quando uma propriedade true por padrão não precisamos passar valor */}
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
                onDeleteComment={deleteComment} />
              // usamos esse on para dizer quando acontecer
            )
          })
        }
      </div>
    </article>
  )
}