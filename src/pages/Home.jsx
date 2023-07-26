import { BiLoaderAlt } from "react-icons/bi";
import React, { useState } from "react";
import axios from "axios";
import configurations from "../config";
import Results from "./Results";

import { db } from "../db";

function Home() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      searchApiData();
    }
  };

  const searchApiData = async () => {
    try {
      const { data } = await axios.get(`${configurations.url}/search/${text}`, {
        headers: { "X-RapidAPI-Key": configurations.XRapidAPIKey },
      });
      setLoading(false);
      setResult(data.results);
      setError(null);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[600px] relative">
          <input
            onChange={(event) => setText(event.target.value)}
            onKeyDown={handleSearch}
            type="text"
            value={text}
            placeholder="Search players, teams, and tournaments."
            className="border text-white px-5 text-center border-gray-700 bg-gray-800 py-3 rounded-full w-full my-9"
          />
          {loading && (
            <BiLoaderAlt className="text-gray-500 text-4xl absolute top-11 right-3 animate-spin" />
          )}

          <h1 className="text-red-500 text-2xl">{error}</h1>
        </div>
      </div>

      {/* search results */}

      {Array.isArray(result) &&(
            <div className="px-12">
              <h1 className="block my-3 text-xl">
                {result.length} Search results for {text}
              </h1>
              
              

              <Results results={result} /> 
             
              <Results results={db} />
            </div>
          )}
    </>
  );
}

export default Home;
