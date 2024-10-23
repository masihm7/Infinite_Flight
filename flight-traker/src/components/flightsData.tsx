import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/FlightTable.module.css";

interface Flights {
  id: number;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

export const FlightsData: React.FC = () => {
  const [data, setData] = useState<Flights[]>([]);

  const navigate = useNavigate();

  const gotodetails = (id: number) =>{
    navigate(`/${id}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://flight-status-mock.core.travelopia.cloud/flights"
        );
        setData(res.data);
      } 
      catch (error) {
        console.log(error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);
  
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
      
      <div id={styles.conte}>
      <h2>Live flight status</h2>
      <table>
        <thead className={styles.heads}>
          <tr>
            <th>Flight No.</th>
            <th>Airline Name</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {data.map((ele) => (
            <tr className={styles.rows}>
              <td>{ele.flightNumber}</td>
              <td>{ele.airline}</td>
              <td>{ele.origin}</td>
              <td>{ele.destination}</td>
              <td>{new Date(ele.departureTime).toLocaleString()}</td>
              <td><span className={styles.Indicator} style={{ backgroundColor: getStatusColor(ele.status) }}/>{ele.status}</td>
              <td>
                <button onClick={() => gotodetails(ele.id)} className={styles.button}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
      </div>
    </div>
  );
};
