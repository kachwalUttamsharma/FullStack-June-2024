import React from "react";
import { useTransition } from "react";
import { useState } from "react";

const List = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransistion] = useTransition();

  const handleInput = (e) => {
    setInput(e.target.value);
    startTransistion(() => {
      const newList = [];
      for (let i = 0; i < 100000; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  };

  return (
    <>
      <div>
        <h1>List</h1>
        <input type="text" value={input} onChange={(e) => handleInput(e)} />
        <input type="text" value={input} onChange={handleInput} />
      </div>
      {isPending ? (
        <div>List is loaded or builded</div>
      ) : (
        list?.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })
      )}
    </>
  );
};

export default List;
