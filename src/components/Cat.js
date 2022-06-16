import React from "react";

const Cat = ({ name, chipNum }) => {
  return (
    <li>
      <h3>{name}</h3>
      <span>Chip #: {chipNum}</span>
      <button>add Chip</button>
    </li>
  );
};

export default Cat;
