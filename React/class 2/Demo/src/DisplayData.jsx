import React from "react";

const DisplayData = ({
  fruits,
  person = { name: "uttam", age: "x" },
  isLoggedIn = false,
}) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          DisplayData
          {/* fruits */}
          <ul>
            {fruits?.map((fruit, index) => {
              return <li key={index}>{fruit}</li>;
            })}
          </ul>
          {/* Person Info */}
          <h2>Person Info</h2>
          <p>Name: {person?.name}</p>
          <p>Age: {person?.age}</p>
        </>
      ) : (
        <p>Cannot be rendered</p>
      )}
    </div>
  );
};

export default DisplayData;
