import React, { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., send data to a server.
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col">
      <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2" placeholder="Email address or phone number"/>
      </div>

      <div>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2" placeholder="password"/>
      </div>
    
      <button type="submit" className="w-full bg-[#1877f2] text-white p-2 mt-1 font-bold rounded-lg">Login</button>

    </form>
  );
}
