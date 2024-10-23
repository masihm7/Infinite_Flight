import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/FlightDetails.module.css";

interface details {
  id: number;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

export const FlightDetail: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<details>(null);
  const navigate = useNavigate();

  const gotoTable = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://flight-status-mock.core.travelopia.cloud/flights/${id}`
        );
        setData(res.data);
      } 
      catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if(!data){
    return(
      <p>No data found</p>
    )
  }


  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Time":
        return "#07ffff";
      case "Boarding":
        return "rgb(11, 255, 11)";
      case "Delayed":
        return "red";
      case "Departed":
        return "#ffcc00";
    }
  };
  
  return (
    <div className={styles.container}>
      <div id={styles.okok}>
      <p><b>Flight no: </b> {data.flightNumber}</p>
        <div id={styles.detconte}>
          <p><b>Airline: </b>{data.airline}</p>
          <p><b>Origin: </b>{data.origin}</p>
          <p><b>Destination: </b>{data.destination}</p>
          <p> <b>Departure Time: </b>{new Date(data.departureTime).toLocaleString()}</p>
          <p><span className={styles.Indicator} style={{ backgroundColor: getStatusColor(data.status) }}/><b>Status: </b> {data.status}</p>
        </div>
        <button onClick={gotoTable}>X</button>
      </div>
    </div>
  );
};
