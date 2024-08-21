import React, { useEffect } from "react";
import { useState } from "react";

const UserData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("effect 1");
    setTimeout(
      () =>
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((result) => setData(result))
          .catch((error) => console.log(error)),
      3000
    );
  }, []);

  useEffect(() => {
    console.log("effect 2");
    const token = setInterval(() => console.log("from effect 2"), 100);
    return () => {
      clearInterval(token);
    };
  }, [data]);
  //   re-render ->

  return (
    <>
      <div>UserData</div>
      {data.length > 0 ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.username})
              <br />
              Email: {user.email}
              <br />
              Address: {user.address.street}, {user.address.city}
              <br />
              Phone: {user.phone}
              <br />
              Website:
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
              <br />
              Company: {user.company.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default UserData;
