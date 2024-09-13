"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import World from "./Globe1";
import Globe2 from "./Globe2";

export default function RealTime({ data }) {
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState([0, 0]);
  const [disaster, setDisaster] = useState("ALL");
  const [country, setCountry] = useState("ALL");

  useEffect(() => {
    setDimensions([window.innerHeight / 2, 0]);
  }, []);

  const parseTime = (timeStr) => {
    return new Date(timeStr);
  };
  const filteredData = data["data"]
    .filter((item) => {
      return (
        (country === "ALL" || item.country === country) &&
        (disaster === "ALL" || item.disaster === disaster)
      );
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
     // Show at most 6 entries

  const Item = (data) => {
    return <div className="flex"></div>;
  };

  const getUniqueValues = (array, index) => {
    const values = array.map((item) => item[index]);
    return Array.from(new Set(values));
  };

  const countries = ["ALL", ...getUniqueValues(data["data"], "country")];
  const disasters = ["ALL", ...getUniqueValues(data["data"], "disaster")];

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleDisasterChange = (e) => {
    setDisaster(e.target.value);
  };

  return (
    <div className="mx-4 bg-gray-200 border-zinc-400 border p-4 my-4 rounded-lg h-[85vh]">
      <h1>Real-Time Disasters</h1>
      <div className="flex gap-4 h-[90%]">
        <div className="rounded-2xl overflow-hidden my-2 flex-1">
          <Globe2 />
        </div>
        <div className="flex-1 overflow-auto h-[90%]">
          <div className="sticky top-0 bg-gray-200">
            <label>
              Country:
              <select value={country} onChange={handleCountryChange}>
                {countries.map((c, index) => (
                  <option key={index} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Disaster Type:
              <select value={disaster} onChange={handleDisasterChange}>
                {disasters.map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid grid-cols-3 justify-center">
              <div>COUNTRY</div>
              <div>DISASTER</div>
              <div>TIME</div>
            </div>
          </div>
          <div>
            
            {filteredData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 justify-center py-2">
                <div>{item.country}</div>
                <div>{item.disaster}</div>
                <div>{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
