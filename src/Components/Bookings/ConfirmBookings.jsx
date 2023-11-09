import React, { useState, useEffect } from 'react'
import { API_URL } from '../../Config';
import axios from 'axios';
import './Bookings.css'

export default function ConfirmBookings() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [detailsCard , setDetailsCard] = useState(false);
  const [customerId , setCustomerId] = useState(null);
  const [ChangeStatus , setChangeStatus] = useState(false);
  const [details , setDetails] = useState(null);

  const fetchData = async (pageNumber) => {
    try {
      const response = await axios.get(`${API_URL}getConfirmBookings/${pageNumber}`);
      setData(response.data.data);
      console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(page);
    
  }, [page]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handleDetailsCard=(id)=>{
    
      const filteredObject = data.find((item) => item._id === id);
      setDetails(filteredObject);
     
      setDetailsCard(true)
      
  }

  const changeStatus =(id)=>{
      setCustomerId(id);
      setChangeStatus(true);
  }
  const confirmStatusChange=()=>{
      setChangeStatus(false);
      console.log(customerId);
      
      axios.post(`${API_URL}updatestatus/${customerId}`,{payment_status : "unpaid"})
      .then(result=>{
          window.location.reload();
      })
  }

 
  return (
    <>
     <div className='container'>
     <h2 className='alignCentre'>Confirm Bookings</h2>
        {   ChangeStatus?
           
            <div className='card position_confirm_card p-4 col-lg-5 col-md-8 col-sm-12'>
                <h5> Press "Ok" to change the payment status to "unpaid" and remove booking from list of confirmed bookings.</h5>
                <br></br><br></br>
                <div className="row ">
                <button className='btn btn-success col-4 m-2' onClick={confirmStatusChange}>OK</button>
                <button className='btn btn-danger col-4 m-2' onClick={()=>{setChangeStatus(false)}}>Cancel</button>
           
                </div>
                </div>
           
            :
            <></>
        }
        {
            detailsCard?
            <>
            <div className="card position_confirm_card p-4">
            <h4 className='alignCentre'>Booking details</h4>
                <hr></hr>
                <div className="row">
                 <h6 className='col-6' >Name - {details.name}</h6>
                 <h6 className='col-6' >Phone - {details.phone_no}</h6>
                </div>
                <hr></hr>
                 <div className="row">
                 <h6 className='col-lg-12'>Type of room - {details.type_of_room} </h6>
                 <h6 className='col-lg-12'>No. of rooms - {details.no_of_rooms} </h6>

                 </div>
                 <hr></hr>
                <div className="row">
                    <h6 className='col-lg-12'>Check in - {details.check_in_date} </h6>
                    <h6 className='col-lg-12'>Check out - {details.check_out_date} </h6>

                </div>
                <hr></hr>
                <h6>Amount - {details.amount}</h6>
                <h6>Payment status - {details.payment_status}</h6>
                <br></br>
                <button className='btn btn-danger col-4' onClick={()=>{setDetailsCard(false)}}>Close</button>
               
            </div>
            </>:
            <></>
        }
       <div className=" mt-4">
        <h5 className='col-lg-2 m-2'>Page: {page}</h5>
        <button className='btn btn-primary col-lg-2 col-md-3 col-sm-4 m-2' onClick={handlePrevious} disabled={page === 1}>
        Previous page
      </button>
      <button className='btn btn-primary col-lg-2 col-md-3 col-sm-4 m-2' onClick={handleNext}>Next page</button>
    
        </div>
      <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Booking</th>
            <th>Check in</th>
            <th>Check out</th>
            <th>Payment Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.booking_date}</td>
              <td>{item.check_in_date}</td>
              <td>{item.check_out_date}</td>
              <td>{item.payment_status}<br></br><br></br>
              <button className='btn btn-danger' onClick={()=>{setChangeStatus(true);setCustomerId(item._id)}} >Mark unconfirmed</button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={()=>handleDetailsCard(item._id)} >Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  )
}
