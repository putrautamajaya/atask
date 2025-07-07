import { useEffect, useRef } from "react";

const useMount = (callback: () => void) => {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMount;
