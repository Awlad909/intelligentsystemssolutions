import React, { useEffect, useState } from "react";
import Client from "../Client/Client";
import "./Clients.css";

const Clients = () => {
  const [client, setClient] = useState([]);
  useEffect(() => {
    fetch("Clients.json")
      .then((res) => res.json())
      .then((data) => setClient(data));
  }, []);
  return (
    <div className="ClientsContainer">
      <div className="container">
        <div className="ClientInfo">
          {client.map((client) => (
            <Client key={client.id} client={client}></Client>
          ))}
        </div>
      </div><br /><br />
    </div>
  );
};

export default Clients;
