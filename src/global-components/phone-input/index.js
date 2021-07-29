const PhoneInput = ({ name, placeholder, val, handleChange, required }) => {
  return (
    <>
      <label htmlFor={name}>{`${name}: `}</label>
      <input
        id={name}
        type="tel"
        placeholder={placeholder}
        value={val}
        onChange={handleChange}
        required={required}
      />
    </>
  );
};

export default PhoneInput;
