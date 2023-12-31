import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css'
import { Avatar } from './avatar';

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />
      
      <div className={styles.profiler}>
        <Avatar src="https://avatars.githubusercontent.com/u/84982384?v=4"/> 
        <strong>Marcos Sales</strong>
        <span>Front-End Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>

  );
}