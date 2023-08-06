interface GenderFormProps {
  formData: {
    gender: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GenderForm({ formData, handleChange }: GenderFormProps) {
  return (
    <div className="flex">
      <div className="relative w-1/3 border p-2  border-solid border-[#dfe0e3] my-1 rounded-md">
        <label className="form--radio-label flex justify-evenly">
          <span>Male</span>
          <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} />
        </label>
      </div>

      <div className="relative w-1/3 border p-2  border-solid border-[#dfe0e3] my-1 rounded-md mx-2">
        <label className="form--radio-label flex justify-evenly">
          <span>Female</span>
          <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} />
        </label>
      </div>

      <div className="relative w-1/3 border p-2  border-solid border-[#dfe0e3] my-1 rounded-md">
        <label className="form--radio-label flex justify-evenly">
          <span>Custom</span>
          <input type="radio" name="gender" value="Custom" checked={formData.gender === "Custom"} onChange={handleChange}/>
        </label>
      </div>
    </div>
  );
}
