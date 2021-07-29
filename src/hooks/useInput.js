import { useState } from "react";

const useInput = initialVal => {
  const [val, setVal] = useState(initialVal);
  const handleChange = e => setVal(e.target.value);

  return [val, handleChange];
};

export { useInput };
