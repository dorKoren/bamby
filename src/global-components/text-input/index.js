const TextInput = props => {
  return (
    <>
      <label htmlFor={`${props.name}`}>{props.name}: </label>
      <input
        id={props.name}
        type="text"
        placeholder={props.placeholder}
        value={props.val}
        onChange={props.handleChange}
        maxLength={props.maxLength}
        minLength={props.minLength}
        autoFocus={props.autoFocus}
        required={props.required}
      />
    </>
  );
};

export default TextInput;
