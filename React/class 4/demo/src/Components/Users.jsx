import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Users = ({ isAdmin }) => {
  const params = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const result = async () => {
      const data = await fetch(`https://fakestoreapi.com/users/${params?.id}`);
      const formattedData = await data.json();
      setUserData(formattedData);
    };
    result();
  }, []);
  return (
    <div>
      {userData.name === undefined ? (
        <h3>...loading</h3>
      ) : (
        <>
          <h4>User Name: {userData.username}</h4>
          <h3>
            Name: {userData.name?.firstname + " " + userData.name?.lastname}
          </h3>
          <h4> Phone: {userData.phone}</h4>
        </>
      )}
    </div>
  );
};

export default Users;
