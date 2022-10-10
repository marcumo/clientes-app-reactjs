import { useEffect, useState } from "react";
import ClientesTable from "./components/ClientesTable";
import NavBar from "./components/NavBar";

function App() {
  
  const [clientes, setClientes] = useState([]);
  
  const fetchCalientes = () => {
    fetch('https://jmcawi0bk9.execute-api.us-east-1.amazonaws.com/Dev/clientes', {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setClientes(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  
  useEffect(()=>{
    fetchCalientes();
  },[]);

  return (
    <div className="container">
      <NavBar />
      <ClientesTable clientes={clientes}/>
    </div>
  );
}

export default App;
