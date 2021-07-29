import React, { useEffect, useState } from "react";
import { useInput } from "hooks/useInput";
import TextInput from "global-components/text-input";
import PhoneInput from "global-components/phone-input";
import "./style.scss";

const Form = ({ className, history }) => {
  const [name, handleNameChange] = useInput("");
  const [phone, handlePhoneChange] = useInput("");
  const [submitCounter, setSubmitCounter] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitCounter(prevCounter => prevCounter + 1);
  };

  useEffect(() => {
    if (submitCounter) {
      history.push({
        pathname: "/score-page",
        state: { name, phone },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitCounter]);

  return (
    <form className={`form ${className}`} onSubmit={handleSubmit}>
      <div className="form__wrapper">
        <TextInput
          name="name"
          placeholder="lorem impsum"
          autoFocus
          val={name}
          handleChange={handleNameChange}
          required
          minLength={2}
        />
      </div>
      <div className="form__wrapper">
        <PhoneInput
          name="phone"
          placeholder="09-1234567"
          val={phone}
          handleChange={handlePhoneChange}
          required
        />
      </div>

      <button className="common-link-btn">submit</button>
    </form>
  );
};

export default Form;
