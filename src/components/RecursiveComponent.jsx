import React, { useState } from "react";
import { nanoid } from "nanoid";

const RecursiveComponent = ({ data }) => {
  const [notes, setNotes] = useState(false);
  const handleToggle = () => {
    setNotes(!notes);
  };

  return (
    <div>
      <div>
        <h3 onClick={handleToggle}>{data.title}</h3>
        <p>{notes && data.descr}</p>
      </div>
      {data.children && notes && (
        <div style={{ marginLeft: '20px' }}>
          {data.children.map((child) => (
            <RecursiveComponent key={nanoid()} data={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecursiveComponent;
