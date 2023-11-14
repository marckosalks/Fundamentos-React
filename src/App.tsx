import { Header } from "./components/Header"
//  import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css"
import "./global.css"
import { Post } from "./components/Post"


//import { PostProps, Author, Content } from "./components/Post"
//se está lendo isso no github funcionou!

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/84982384?v=4',
      name: 'Marcos Sales',
      role: 'Frontend Jr'
    },
    content: [
      { type: 'paragraph', content: 'Ola pessoal👀' },
      { type: 'paragraph', content: 'Esse é o meu ultimo projeto em colaboração com o pessoal da rocketseat! 🚀' },
      { type: 'link', content: 'marcos.sales/frontend' },
    ],
    publisheAt: new Date('2023-10-21 13:05:01'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/46347115?v=4',
      name: 'Everton Sales',
      role: 'Analyst'
    },
    content: [
      { type: 'paragraph', content: 'Ola Amantes da tecnologia ! 📱' },
      { type: 'paragraph', content: 'Mais um grande passo no desenvolvimento ! 🦅' },
      { type: 'link', content: 'everton.sales/it analyst' },
    ],
    publisheAt: new Date('2023-10-12 17:05:01'),
  },

]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publisheAt={post.publisheAt}
            />
          )
          }
        </main>
      </div>
    </div>
  )
}
