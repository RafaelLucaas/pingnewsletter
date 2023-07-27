import './Input.module.css'

interface InputProps {
  type: string,
  value?: string,
  placeholder: string,
  required: boolean,
  className?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onInvalid?: (event: React.InvalidEvent<HTMLInputElement>) => void
}

export function Input(props: InputProps) {
  return (
    <input type={props.type} onChange={props.onChange} onInvalid={props.onInvalid} placeholder={props.placeholder} required={props.required}/>
  )
}