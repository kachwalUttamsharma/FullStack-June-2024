// toogle visibility
import React, { useCallback, useState } from "react";

const useVisibility = (intialVisibility = false) => {
  const [isVisible, setIsVisible] = useState(intialVisibility);

  const show = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hide = useCallback(() => {
    setIsVisible(false);
  }, []);

  const toggle = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return {
    isVisible,
    show,
    hide,
    toggle,
  };
};

export default useVisibility;
