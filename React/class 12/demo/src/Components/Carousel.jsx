// Create a simple image carousel component in React that automatically cycles through a list of images,
//displaying one image at a time. The carousel should also allow users to manually navigate to the next
// or previous image using buttons.

// Features:
// Automatically cycles through images every 2 seconds.
// Manual navigation to the next or previous image using buttons.
// Displays image, title, and description for each item.

const items = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 1",
    description: "Description of item 1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 2",
    description: "Description of item 2",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 3",
    description: "Description of item 3",
  },
];

import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const nextHandler = () => {
    if (currentItem === items.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const token = setInterval(() => {
      nextHandler();
    }, 2000);

    return () => {
      clearInterval(token);
    };
  }, [currentItem]); // ? why

  const prevHandler = () => {
    if (currentItem === 0) {
      setCurrentItem(items.length - 1);
    } else {
      setCurrentItem((prev) => prev - 1);
    }
  };
  return (
    <>
      <div>
        <button onClick={prevHandler}>Prev</button>
        <div>
          <img
            width="200"
            height="200"
            src={items[currentItem]?.imageUrl}
            alt={items[currentItem]?.title}
          />
          <h2>{items[currentItem]?.title}</h2>
          <p>{items[currentItem]?.description}</p>
        </div>
        <button onClick={nextHandler}>Next</button>
      </div>

      <button onClick={show}>Show Modal</button>
      <button onClick={toggle}>Toogle Modal</button>
      <Modal isVisible={isVisible} hide={hide} />
    </>
  );
};

export default Carousel;
