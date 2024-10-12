import { useState, useEffect } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
};

const MyComponent = () => {
  const isLoading = useLoading();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Data Loaded</div>;
};

export default MyComponent;
