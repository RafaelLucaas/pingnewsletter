import "./Button.module.css"

interface ButtonProps {
  children: string,
  type?: "button" | "submit" | "reset",
  onClick?: (event: React.MouseEvent) => void
}

export function Button(props: ButtonProps) {
  return (
    <button type={props.type} onClick={props.onClick} >
      {props.children}
    </button>
  )
}