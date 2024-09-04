import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// api, state
// building reusable custom hook

const useFetchData = (fetchThunk, selector) => {
  console.log("from usefetchData");
  const dispatch = useDispatch();
  const data = useSelector((state) => state[selector].data);
  const status = useSelector((state) => state[selector].status);
  useEffect(() => {
    dispatch(fetchThunk());
  }, []);
  return { data, status };
};

export default useFetchData;
