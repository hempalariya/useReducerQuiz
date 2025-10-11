import React, { useEffect } from "react";

export default function Timer({ dispatch, timeLeft }) {
  useEffect(() => {
    const countDown = setInterval(() => {
      dispatch({
        type: "countDown",
      });

    }, 1000);
   return () => clearInterval(countDown)
  }, [dispatch]);

  return <div className="timer">{timeLeft}</div>;
}
