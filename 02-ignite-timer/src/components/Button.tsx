import { ButtonContainer, ButtonVariant } from "./Button.styles.ts"

type ButtonProps = {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant} >Enviar</ButtonContainer>
}