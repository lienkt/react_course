import clsx from "clsx"
import styled from "styled-components"

interface ButtonProps {
  buttonText?: string
  variant?: string
}

const ButtonStyled = styled.button<any>`
  background-color: ${props => props.$variant === 'primary' ? 'blue' : 'azure'}
`

function Button({ 
  buttonText = 'Default Button', 
  variant = 'default',
  
  ...restProps
}: ButtonProps) {
  return (
    <ButtonStyled 
      {...restProps}
      className={clsx(
        'button px-2',
        // variant === 'primary' && 'btn-primary',
        // variant === 'secondary' && 'btn-secondary'
      )}
      $variant={variant}
    >
      {buttonText}
    </ButtonStyled>
  )
}

export default Button