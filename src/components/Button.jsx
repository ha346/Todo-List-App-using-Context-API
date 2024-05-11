const Button = ({text,className="",disabled,onClick}) => {
  return (
    <div>
      <button onClick={onClick} type="submit" disabled={disabled} className={`${className}`}>
             {text}
      </button>
    </div>
  )
}

export default Button;
