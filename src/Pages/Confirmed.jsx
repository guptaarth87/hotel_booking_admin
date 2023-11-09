import React from 'react'
import ConfirmBookings from '../Components/Bookings/ConfirmBookings'
import {Link} from 'react-router-dom';

export default function Confirmed() {
  return (
    <>
     <div className="container">
     <Link className='btn btn-primary  mt-4 ' to='/dashboard' >See unpaid bookings</Link><br></br><br></br>
  
        <ConfirmBookings/>
     </div>
    </>
  )
}
