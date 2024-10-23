import { Routes, Route } from 'react-router-dom';
import {FlightsData} from './components/flightsData';
import {FlightDetail} from '../src/components/flightDetail';
import { Navbar } from './components/navbar';
import {Footer} from './components/footer'

export const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<FlightsData />} />
        <Route path="/:id" element={<FlightDetail />} />
      </Routes>
      <Footer/>
    </>
  );
};
