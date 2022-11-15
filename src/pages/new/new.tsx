import { useContext, useEffect, useState } from "react";
import { Scanner } from "../../components/scanner/Scanner";
import { AdminContext } from "../../context/AdminContext";
import './style.css'
export const NewLocation = () => {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  const admin = useContext(AdminContext)
  const [book, setBook] = useState<any>(null)

  useEffect(() => {
    if(result) {
      getBook(result)
    }
  }, [result])

  const getBook = async (isbn: string) => {
    const res = await admin.registerDonation(isbn)
    if(res) {
      setBook(res)
    }
  }
  const onDetected = (result:any) => {
    setResult(result);
  };
  return (
    <div className="AppCanvas">
      <p style={{color: '#fff', fontSize: '30px'}}>{result ? result : "Scanning..."}</p>
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
      { book && <h1>{ book.title } </h1>}
    </div>
  );
};
