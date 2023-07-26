import React from "react";
import { Link } from "react-router-dom"

function Results({ results }) {
  return (
    <div className="space-y-3 mb-10">
      {results.map((result, index) => (
        <div key={index} className="bg-gray-800 p-5 rounded">
          <div className="flex gap-14">
            <h1 className="text-xl font-semibold">{result.entity.name}</h1>
            <div>
              <small className="capitalize px-2 py-1 bg-gray-700">
                {result.type}
              </small>
            </div>
          </div>

          <div className="flex divide-x mt-2">
            <p className="capitalize px-3">Score: {result.score}</p>
            <p className="capitalize px-3">
              Country:{" "}
              {result.entity.country.name || (
                <span className="text-red-500">Not Provided</span>
              )}
            </p>
            <p className="capitalize px-3">
              User count:{" "}
              {result.entity.userCount || (
                <span className="text-red-500">Not Provided</span>
              )}
            </p>
            <p className="capitalize px-3">
              short name:{" "}
              {result.entity.shortName || (
                <span className="text-red-500">Not Provided</span>
              )}
            </p>
          </div>

          <div>
            <h1 className="font-semibold mt-3">Team details</h1>
            {result.entity.team && (
              <div className="flex divide-x mt-2">
                <p className="px-3">Name: {result.entity.team.name}</p>
                <p className="px-3">
                  Country: {result.entity.team.country.name}
                </p>
                <p className="px-3">Type: {result.entity.team.sport.name}</p>
                <p className="px-3">
                  Colors:{" "}
                  <span
                    className="w-10"
                    style={{
                      backgroundColor: result.entity.team.teamColors.primary,
                      color: result.entity.team.teamColors.primary,
                    }}
                  >
                    TEAM
                  </span>
                  <span
                    className="w-10"
                    style={{
                      backgroundColor: result.entity.team.teamColors.secondary,
                      color: result.entity.team.teamColors.secondary,
                    }}
                  >
                    TEAM
                  </span>
                  {result.type === "player" && (
                    <Link to={`/statistics/${result.entity.id}`}>
                      <button className="text-indigo-400 mx-6 font-semibold hover:underline">Player Statistics</button>
                    </Link>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
