
interface ButtonProps {
  buttonText?: string
}
function Button({ 
  buttonText = 'Default Button', 
  ...restProps
}: ButtonProps) {
  return (
    <button {...restProps}>{buttonText}</button>
  )
}

export default Button