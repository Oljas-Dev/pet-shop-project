import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/categories/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(data);

  return (
    <>
      <h1>Pet Shop Project</h1>
    </>
  );
}

export default App;
