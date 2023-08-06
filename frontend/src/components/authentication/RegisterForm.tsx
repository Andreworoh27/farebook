import React, { useState } from "react";
import DobForm from "./DobForm";
import GenderForm from "./GenderForm";
import CustomGender from "./CustomGenderForm";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    emailOrMobileNumber: "",
    password: "",
    dobComplete: "",
    dobMonth: (new Date().getMonth() + 1).toString(),
    dobDay: new Date().getDate().toString(),
    dobYear: new Date().getFullYear().toString(),
    gender: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
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
      <div className="flex">
        <div>
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2 rounded-md" placeholder="First name" />
        </div>

        <div>
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] m-2 p-2 rounded-md" placeholder="Surname" />
        </div>
      </div>

      <div>
        <input type="email" name="emailOrMobileNumber" value={formData.emailOrMobileNumber} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2" placeholder="Mobile number or email address" />
      </div>

      <div>
        <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2" placeholder="New password" />
      </div>
      <div>
        <div className="text-xs text-[#646e89] mt-2">Date of birth</div>
        <DobForm
          formData={{
            dobMonth: formData.dobMonth,
            dobDay: formData.dobDay,
            dobYear: formData.dobYear,
          }}
          handleChange={handleChange}
        />
      </div>

      <div>
        <div className="text-xs text-[#646e89] mt-2">Gender</div>
        <GenderForm
          formData={{
            gender: formData.gender,
          }}
          handleChange={handleChange}
        />
      </div>

      {!(formData.gender === "Male" || formData.gender === "Female" || formData.gender.length === 0) && (
        <div>
          <CustomGender
            formData={{
              gender: formData.gender,
            }}
            handleChange={handleChange}
          />
        </div>
      )}
      <p className="text-[#7d7e7f] text-xs font-medium mb-2">
        People who use our service may have uploaded your contact information to Facebook.{" "}
        <a href="https://www.facebook.com/help/637205020878504" target="_blank" className="text-[#275bbc]">
          {" "}
          Learn more.
        </a>
      </p>

      <p className="text-[#7d7e7f] text-xs font-medium">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>

      <button type="submit" className="w-1/2 bg-[#00a400] text-white px-3 py-2 mt-3 mx-auto font-bold rounded-lg">
        Sign Up
      </button>
    </form>
  );
}
