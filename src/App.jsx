import { Header } from "./components/Header"
import Post from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css"
import "./global.css"
//se está lendo isso no github funcionou!

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Marcos Sales"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam ea neque nobis necessitatibus illo repellendus, perspiciatis, 
            facilis labore voluptates quaerat error. Dicta facilis mollitia voluptates modi voluptate, 
            aliquid laborum nostrum salve!"
          />

          <Post
            author="Maicão do pão"
            content="A vontade rir é grande, mas a de chorar é maior!"
          />
        </main>
      </div>
    </div>
  )
}
