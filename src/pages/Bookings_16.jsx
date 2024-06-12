import { useEffect } from "react";
import { getBooking } from "../services/apiBookings";

const Bookings_16 = () => {
  useEffect(()=>{
    getBooking(1).then((data) => console.log('booking(1) data', data));
  }, []);
  return <>Bookings_16 page</>;
};

export default Bookings_16;