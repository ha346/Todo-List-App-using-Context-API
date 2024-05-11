const Input = ({type="text",placeholder="Write Todo...",className="",value,onInputChange,readOnly}) => {
  return ( 
      <input
        type={type}
        placeholder={placeholder}
        className={`${className}`}
        value={value}
        onChange={(e) => onInputChange && onInputChange(e.target.value)}
        readOnly={readOnly}
        /> 
  )
}

export default Input;
