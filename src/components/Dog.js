import React from "react";

const Dog = ({ name, chipNum }) => {
  return (
    <li>
      <h3>{name}</h3>
      <span>Chip #: {chipNum}</span>
      <button>add Chip</button>
    </li>
  );
};

export default Dog;
