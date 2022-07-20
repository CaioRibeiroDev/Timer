import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonBackgroundColor {
  variant?: ButtonVariant;
}

export function Button({ variant = "danger" }: ButtonBackgroundColor) {
  return (
    <>
      <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    </>
  )
}