import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './Components/Search';

function App() {

  const years = Array.from({ length: 15 }, (_, index) => 2006 + index);

  const [selectedYear, setSelectedYear] = useState(null);
  const [missionData, setMissionData] = useState(null); 

  const handleButtonClick = async (year) => {
    setSelectedYear(year);
    try {
      const response = await axios.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`);
      setMissionData(response.data);
    } catch (error) {
      console.error('Error fetching mission data:', error);
    }
  };

  return (
      <>
      <div>
        {years.map((year) => (
          <button key={year} onClick={() => handleButtonClick(year)}>
            {year}
          </button>
        ))}
      </div>

    {selectedYear && (
      <div>
        <h2>Missions for {selectedYear}</h2>
        {missionData ? (
          <ul>
            {missionData.map((mission) => (
              <li key={mission.flight_number}>{mission.mission_name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading missions...</p>
        )}
      </div>
    )}
    <Search missionData={missionData}/>
      </>
);
}

export default App