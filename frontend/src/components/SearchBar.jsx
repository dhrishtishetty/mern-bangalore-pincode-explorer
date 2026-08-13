import { useState } from "react";

const SearchBar = ({ onSearch, loading }) => {
  const [pincode, setPincode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(pincode);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Bangalore pincode"
        value={pincode}
        onChange={(e) =>
          setPincode(e.target.value.replace(/\D/g, ""))
        }
        maxLength={6}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;