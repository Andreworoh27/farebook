import { useState } from "react";

interface SearchbarProps {
  className?: string;
}

export default function SearchBar({ className }: SearchbarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Perform your search logic here using the searchQuery state
      console.log("Searching for:", searchQuery);
    }
  };

  const finalClassName = `${className || ""}`;
  return (
    <div className={finalClassName}>
      <input
        type="text" 
        placeholder="Search..."
        className="px-4 py-1 border border-gray-300 rounded-3xl shadow-sm focus:ring focus:ring-blue-300 w-60"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
