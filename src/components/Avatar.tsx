import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean;
}

//usando desestruturação nas propriedades
//valores default
//extenção typescript
//rest operator ==  resto das propriedades
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    /*aplicando renderização condicional*/
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      // spread operator == pego cada elemento e passo como atributo
      {...props}
    />
  )
}
