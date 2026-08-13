import { useState } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import PincodeCard from "./components/PincodeCard";

import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [searchedPincode, setSearchedPincode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchPincode = async (pincode) => {
    setError("");
    setResults([]);

    if (!/^\d{6}$/.test(pincode)) {
      setError("Please enter a valid 6-digit pincode.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:5000/api/pincode/${pincode}`
      );

      setResults(response.data.areas);
      setSearchedPincode(response.data.pincode);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <main className="container">

        <header className="hero">
          <div className="logo">📍</div>

          <p className="eyebrow">
            BENGALURU • KARNATAKA
          </p>

          <h1>
            Bangalore Pincode
            <span> Explorer</span>
          </h1>

          <p className="subtitle">
            Search a pincode and discover its areas and
            post offices.
          </p>
        </header>

        <SearchBar
          onSearch={searchPincode}
          loading={loading}
        />

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        {results.length > 0 && (
          <section className="results">

            <div className="results-heading">
              <div>
                <p>SEARCH RESULTS</p>
                <h2>
                  Areas for {searchedPincode}
                </h2>
              </div>

              <span>
                {results.length} result
                {results.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="cards">
              {results.map((area, index) => (
                <PincodeCard
                  key={index}
                  area={area}
                  pincode={searchedPincode}
                />
              ))}
            </div>

          </section>
        )}

        {!loading &&
          !error &&
          results.length === 0 && (
            <div className="empty-state">
              <div>🔎</div>

              <h2>
                Search for a Bangalore pincode
              </h2>

              <p>
                Enter a 6-digit pincode above to
                find its area and post office.
              </p>
            </div>
          )}

      </main>
    </div>
  );
}

export default App;