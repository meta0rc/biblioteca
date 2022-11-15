import { useState } from "react";
import Scanner from "../../components/scanner/Scanner";

export const NewLocation = () => {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = (result:any) => {
    setResult(result);
  };
  return (
    <div className="AppCanvas">
      <p style={{color: '#fff'}}>{result ? result : "Scanning..."}</p>
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
};
