import React, { useState } from "react";

interface VisibilitySelectorProps {
  onChange: (visibility: string) => void;
}

export default function VisibilitySelectorComponent({ onChange }: VisibilitySelectorProps): React.JSX.Element {
  const [selectedVisibility, setSelectedVisibility] = useState<string>("Public");

  function handleVisibilityChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setSelectedVisibility(event.target.value);
    onChange(event.target.value);
  }

  return (
    <div>
      <label className="mr-2">Visibility:</label>
      <select value={selectedVisibility} onChange={handleVisibilityChange}>
        <option value="Public">Public</option>
        <option value="Friends">Friends</option>
      </select>
    </div>
  );
}
