import React, { useState } from "react";
import DobForm from "./DobForm";
import GenderForm from "./GenderForm";
import CustomGender from "./CustomGenderForm";
import { useMutation } from "@apollo/client";
import { AddNewUserQuery } from "../../queries/Queries";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// interface NewUserProps {
//   firstName: string;
//   surName: string;
//   email: string;
//   mobileNumber: string;
//   dob: string;
//   gender: string;
//   password: string;
// }

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    emailOrMobileNumber: "",
    dob: "",
    dobMonth: (new Date().getMonth() + 1).toString(),
    dobDay: new Date().getDate().toString(),
    dobYear: new Date().getFullYear().toString(),
    gender: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [addNewUser] = useMutation(AddNewUserQuery);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Concatenate the dobYear, dobMonth, and dobDay fields to create the dob string
    const dob = `${formData.dobYear}-${formData.dobMonth}-${formData.dobDay}`;

    // Update the formData with the concatenated dob
    setFormData((prevData) => ({
      ...prevData,
      dob: dob,
    }));

    try {
      let inputUser = {
        firstName: formData.firstName,
        surName: formData.surName,
        dob: formData.dob,
        gender: formData.gender,
        email: null as string | null, // Initialize email to null
        mobileNumber: null as string | null, // Initialize mobileNumber to null
        password: formData.password,
      };

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10,12}$/; // Matches 10 to 12 digit phone number

      if (emailRegex.test(formData.emailOrMobileNumber)) {
        inputUser.email = formData.emailOrMobileNumber;
      } else if (phoneRegex.test(formData.emailOrMobileNumber)) {
        inputUser.mobileNumber = formData.emailOrMobileNumber;
      } else {
        console.error("Invalid email/mobile number format");
        return;
      }

      // Perform the mutation
      const { data } = await addNewUser({
        variables: {
          inputUser: inputUser,
        },
      });

      // Handle the response data as needed
      console.log("New user added:", data.createUser);

      // Redirect to login page
      navigate("/login"); // Use navigate function to redirect
    } catch (error) {
      // Handle error if the mutation fails
      console.error("Error adding new user:", error);
    }

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col">
      <div className="flex">
        <div>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2 rounded-md" placeholder="First name" />
        </div>

        <div>
          <input type="text" name="surName" value={formData.surName} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] m-2 p-2 rounded-md" placeholder="Surname" />
        </div>
      </div>

      <div>
        <input type="text" name="emailOrMobileNumber" value={formData.emailOrMobileNumber} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2" placeholder="Mobile number or email address" />
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
