const Checkbox = ({type="checkbox",className="",checked,onChange}) => {
  return ( 
      <input
        type={type}
        className={className}
        checked={checked}
        onChange={onChange}
       /> 
  )
}

export default Checkbox;
