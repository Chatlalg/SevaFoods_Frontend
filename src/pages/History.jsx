import { useEffect } from "react";
import { backend_url } from "../../constants";
import axios from "axios";
import { useState } from "react";

const HistoryPage = () => {
  const [donorHistory,setDonorHistory] = useState({});
  useEffect(()=>{
    (async () => {
       const response = await axios.get(`${backend_url}/donor/viewpastdonations`,
        {
          headers:{
            'Content-Type' : 'application/json'
          },
          withCredentials:true,
        }
       )
       setDonorHistory(response)
      //  console.log(response)
    })(); 
  },[])

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Donation History</h1>
      
    </div>
  );
};

export default HistoryPage;
