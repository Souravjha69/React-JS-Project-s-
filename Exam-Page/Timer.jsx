import { useState, useEffect } from "react";
import { Divider } from "antd";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>Time Left</div>
      <Divider
        type="vertical"
        style={{ backgroundColor: "#ccc", height: "20px", margin: "0 10px" }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "#ccc",
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "5px",
          }}
        >
          {hours.toString().padStart(2, "0")}
        </div>
        :
        <div
          style={{
            backgroundColor: "#ccc",
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "5px",
          }}
        >
          {minutes.toString().padStart(2, "0")}
        </div>
        :
        <div
          style={{
            backgroundColor: "#ccc",
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {seconds.toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

export default Timer;
