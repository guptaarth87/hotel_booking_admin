import React from 'react';
import Bookings from '../Components/Bookings/Bookings';
import {Link} from 'react-router-dom';

const Dashboard = () => {

  
  return (
   <>
   <div className="container">
   <Link className='btn btn-primary  mt-4 ' to='/confirmbookings' >See confirm bookings</Link><br></br><br></br>
  
   <Bookings/>
   </div>
   
   
   </>
  );
};

export default Dashboard;
