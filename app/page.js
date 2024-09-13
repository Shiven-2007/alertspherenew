import Image from "next/image";
import Navbar from "./components/Navbar";
import RealTime from "./components/RealTime";
import DangerousCountries from "./components/DangerousCountries";
import DisasterLineChart from "./components/Historic";

export default async function Home() {
//   const data = [
//     ["BRAZIL", "FLOOD", "16:37"],
//     ["INDIA", "EARTHQUAKE", "8:37"],
//     ["BRAZIL", "FLOOD", "16:37"],
//     ["BRAZIL", "FLOOD", "5:37"],
//     ["BRAZIL", "FLOOD", "4:37"],
//     ["BRAZIL", "FLOOD", "0:37"],
//     ["BRAZIL", "FLOOD", "5:33"],
// ];

const idata = await fetch("http://127.0.0.1:5000/fetchingdata");
const data = await idata.json()
const idata2 = ''

const realtimedata = fetch("https://sachet.ndma.gov.in/cap_public_website/FetchEarthquakeAlerts")

const predictedData = [
  ["BRAZIL", "FLOOD", "16:37"],
  ["INDIA", "EARTHQUAKE", "8:37"],
  ["BRAZIL", "FLOOD", "16:37"],
  ["BRAZIL", "FLOOD", "5:37"],
  ["BRAZIL", "FLOOD", "4:37"],
  ["BRAZIL", "FLOOD", "0:37"],
  ["BRAZIL", "FLOOD", "5:33"],
];

  return (
    <>
      <Navbar />
      <RealTime data={data} />
      <DangerousCountries />
      <DisasterLineChart />
    </>
  );
}
