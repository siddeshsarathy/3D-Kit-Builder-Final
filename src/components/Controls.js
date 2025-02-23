import React from "react";

const Controls = ({ setJerseyColor, setShortsColor, setStockingsColor, setSelectedSport }) => {
  return (
    <div className="controls">
      <label>Select Sport:</label>
      <select onChange={(e) => setSelectedSport(e.target.value)}>
        <option value="Soccer">Soccer</option>
        <option value="Basketball">Basketball</option>
        <option value="AFL">AFL</option>
        <option value="Netball">Netball</option>
        <option value="Cricket">Cricket</option>
        <option value="Baseball">Baseball</option>
        <option value="Softball">Softball</option>
        <option value="Lawn Bowls">Lawn Bowls</option>
        <option value="Hoodies">Hoodies</option>
        <option value="Polos">Polos</option>
      </select>

      <label>Jersey Color:</label>
      <input type="color" onChange={(e) => setJerseyColor(e.target.value)} />

      <label>Shorts Color:</label>
      <input type="color" onChange={(e) => setShortsColor(e.target.value)} />

      <label>Stockings Color:</label>
      <input type="color" onChange={(e) => setStockingsColor(e.target.value)} />
    </div>
  );
};

export default Controls;
