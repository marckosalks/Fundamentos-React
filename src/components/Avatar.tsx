import styles from './Avatar.module.css'

type AvatarProps = {
  hasBorder?: boolean
  src: string
  alt?: string
}

//usando desestruturação nas propriedades
//valores default
export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  return (
    /*aplicando renderização condicional*/
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  )
}
