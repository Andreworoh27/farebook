import React from "react";

interface DobFormProps {
  formData: {
    dobMonth: string;
    dobDay: string;
    dobYear: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function DobForm({ formData, handleChange }: DobFormProps) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const generateOptions = (start: number, end: number) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const generateDaysOptions = (year: number, month: number) => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2 && isLeapYear(year)) {
      return generateOptions(1, 29);
    }

    return generateOptions(1, daysInMonth[month - 1]);
  };

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const validateDay = (year: number, month: number, day: number) => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) {
      return day <= 29;
    }
    return day <= daysInMonth[month - 1];
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const updatedFormData = { ...formData, [name]: value };

    if (name === "dobYear" || name === "dobMonth" || name === "dobDay") {
      const year = parseInt(updatedFormData.dobYear);
      const month = parseInt(updatedFormData.dobMonth);
      const day = parseInt(updatedFormData.dobDay);

      if (validateDay(year, month, day)) {
        handleChange(event);
      }
    } else {
      handleChange(event);
    }
  };

  return (
    <div className="flex">
      <div className="relative w-1/3">
        <select name="dobMonth" value={formData.dobMonth} onChange={handleChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2 rounded-md">
          <option value="" disabled>
            Month
          </option>
          {monthNames.map((monthName, index) => (
            <option key={index} value={index + 1}>
              {monthName}
            </option>
          ))}
        </select>
      </div>

      <div className="relative w-1/3 mx-2">
        <select name="dobDay" value={formData.dobDay} onChange={handleDateChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2 rounded-md">
          <option value="" disabled>
            Day
          </option>
          {generateDaysOptions(parseInt(formData.dobYear), parseInt(formData.dobMonth))}{" "}
        </select>
      </div>

      <div className="relative w-1/3">
        <select name="dobYear" value={formData.dobYear} onChange={handleDateChange} className="w-full border border-solid border-[#dfe0e3] my-2 p-2 rounded-md">
          <option value="" disabled>
            Year
          </option>
          {generateOptions(1900, new Date().getFullYear())}
        </select>
      </div>
    </div>
  );
}
