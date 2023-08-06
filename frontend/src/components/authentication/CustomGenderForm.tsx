interface customGenderFormProps {
  formData: {
    gender: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CustomGender({ formData, handleChange }: customGenderFormProps) {
  const generateCustomGenderOption = () => {
    const genders = [
      { label: 'She : "Wish her a happy birthday!"', value: "She" },
      { label: 'He : "Wish him a happy birthday!"', value: "He" },
      { label: 'They : "Wish them a happy birthday!"', value: "They" },
    ];
    return genders.map((gender, index) => (
      <option key={index} value={gender.value}>
        {gender.label}
      </option>
    ));
  };

  return (
    <div className="relative w-full">
      <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2 rounded-md">
        <option disabled={formData.gender !== "Custom"}>Select your pronoun</option>
        {generateCustomGenderOption()}
      </select>
    </div>
  );
}
