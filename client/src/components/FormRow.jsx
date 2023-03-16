const FormRow = ({ labelText, type, name, value, handleChange }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>
        {labelText ? labelText : name?.toUpperCase()}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
export default FormRow
