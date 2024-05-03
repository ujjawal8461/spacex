import React, { useState } from 'react';

function Search({ missionData }) {
  const [missionId, setMissionId] = useState("");
  const [selectedMission, setSelectedMission] = useState(null);

  const handleMissionSearch = () => {
    const foundMission = missionData.find(mission => mission.mission_name.toLowerCase() === missionId.toLowerCase());
    setSelectedMission(foundMission);
    console.log(missionData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleMissionSearch();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter mission name..."
          value={missionId}
          onChange={(e) => {
            setMissionId(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {selectedMission && (
        <div>
          <h2>{selectedMission.mission_name}</h2>
          <p>Flight Number: {selectedMission.flight_number}</p>
          <p>Launch Year: {selectedMission.launch_year}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
