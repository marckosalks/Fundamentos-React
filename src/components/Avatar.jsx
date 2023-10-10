import styles from './Avatar.module.css'

//usando desestruturação nas propriedades
//valores default
export function Avatar({hasBorder = true, src}) {
  return (
    /*aplicando renderização condicional*/
    <img 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    src={src} 
    alt="foto de perfil" 
    />
  )
}
