import { useState } from "react";

const useForm = (initialValues = { username: "", password: "" }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, handleChange };
};

export default useForm;
