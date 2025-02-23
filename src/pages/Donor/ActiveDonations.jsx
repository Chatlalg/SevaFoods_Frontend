// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ActiveDonations = () => {
//   const [donations, setDonations] = useState([]);
//   const [selectedDonation, setSelectedDonation] = useState(null);

//   useEffect(() => {
//     const fetchActiveDonations = async () => {
//       try {
//         const response = await axios.get("/api/active-donations"); // Adjust API endpoint
//         setDonations(response.data);
//       } catch (error) {
//         console.error("Error fetching active donations:", error);
//       }
//     };
//     fetchActiveDonations();
//   }, []);

//   return (
//     <div className="p-8 bg-green-50 min-h-screen">
//       <h1 className="text-4xl font-bold text-center mb-8 text-green-800">My Active Donations</h1>

//       {donations.length > 0 ? (
//         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-green-200 text-gray-700 uppercase text-sm">
//                 <th className="p-3 text-left">NGO Name</th>
//                 <th className="p-3 text-left">Date</th>
//                 <th className="p-3 text-left">Status</th>
//                 <th className="p-3 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {donations.map((donation, index) => (
//                 <tr key={index} className="border-b hover:bg-green-50">
//                   <td className="p-3">{donation.ngoName || "Not Assigned Yet"}</td>
//                   <td className="p-3">{donation.date}</td>
//                   <td
//                     className={`p-3 font-semibold ${
//                       donation.status === "pending" ? "text-yellow-600" : "text-blue-600"
//                     }`}
//                   >
//                     {donation.status}
//                   </td>
//                   <td className="p-3">
//                     <button
//                       className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                       onClick={() => setSelectedDonation(donation)}
//                     >
//                       View More
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p className="text-center text-gray-500 text-lg">No active donations at the moment.</p>
//       )}

//       {/* Modal for View More */}
//       {selectedDonation && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//             <h2 className="text-2xl font-bold mb-4 text-gray-800">Donation Details</h2>
//             <p><strong>Date:</strong> {selectedDonation.date}</p>
//             <p><strong>Status:</strong> {selectedDonation.status}</p>
//             <p><strong>Food Items:</strong> {selectedDonation.details || "No additional details"}</p>

//             {/* Image Gallery */}
//             <div className="grid grid-cols-3 gap-4 mt-4">
//               <img src={selectedDonation.image1 || "/placeholder.jpg"} className="rounded-lg shadow-md" alt="Food Item 1" />
//               <img src={selectedDonation.image2 || "/placeholder.jpg"} className="rounded-lg shadow-md" alt="Food Item 2" />
//               <img src={selectedDonation.image3 || "/placeholder.jpg"} className="rounded-lg shadow-md" alt="Food Item 3" />
//             </div>

//             {/* Close Button */}
//             <button
//               className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//               onClick={() => setSelectedDonation(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ActiveDonations;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {Link} from 'react-router-dom'
// import axios from "axios";

// useEffect(() => {
//     const fetchDonations = async () => {
//         try {
//             const response = await axios.get(`${backend_url}/donor/viewpastdonations`, {
//                 headers: { 'Content-Type': "application/json" },
//                 withCredentials: true
//             });

//             console.log("API Response:", response.data); // Debugging

//             // Assuming the backend sends a JSON object with `requests_array` and `ngoDetails`
//             setDonations(response.data.requests_array || []); 

//             // Store NGOs in an object for easy lookup
//             const ngoMap = {};
//             response.data.ngoDetailsList?.forEach(ngo => {
//                 ngoMap[ngo._id] = ngo.name;
//             });
//             setNgos(ngoMap);
            
//         } catch (error) {
//             console.error("Error fetching donation history:", error);
//         }
//     };
//     fetchDonations();
// }, []);

//     return (
//         <div className="p-8 bg-gray-50 min-h-screen">
//             <h1 className="text-4xl font-bold text-center mb-6">Active Donations</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {donations.length > 0 ? (
//                     donations.map((donation) => (
//                         <div key={donation._id} className="p-4 shadow-lg bg-white rounded-lg">
//                             <h2 className="text-xl font-semibold">{donation.foodType}</h2>
//                             <p className="text-gray-600 mt-2">Status: {donation.status}</p>
//                             <p className="text-sm text-gray-500">Date: {donation.date}</p>
//                             {/* <button
//                                 className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//                                 onClick={() => navigate(`/donation/${donation._id}`)}
//                             >
//                                 View More
//                             </button> */}
//                             <Link to="/DD"  
//                             className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-center block">
//                                 View More
//                             </Link>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No active donations available.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ActiveDonations;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../../../constants.js";
import { useNavigate } from "react-router-dom";

const ActiveDonations = () => {
    const [donations, setDonations] = useState([]);
    const [ngos, setNgos] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const response = await axios.get(`${backend_url}/donor/viewpastdonations`, {
                    headers: { 'Content-Type': "application/json" },
                    withCredentials: true
                });

                console.log("API Response:", response.data); // Debugging

                // Ensure donations is properly extracted
                setDonations(response.data.requests_array || []);

                // Store NGOs in an object
                const ngoMap = {};
                if (Array.isArray(response.data.ngoDetailsList)) {
                    response.data.ngoDetailsList.forEach(ngo => {
                        ngoMap[ngo._id] = ngo.name;
                    });
                }
                setNgos(ngoMap); // Store as an object instead of JSON string

            } catch (error) {
                console.error("Error fetching donation history:", error);
            }
        };
        fetchDonations();
    }, []);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">My Active Donations</h1>

            {donations.length > 0 ? (
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                                <th className="p-3 text-left">NGO Name</th>
                                <th className="p-3 text-left">Date</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donations.map((donation) => (
                                <tr key={donation._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">{donation.status === "expired" ? "NA" : ngos[donation.ngoId] || "Unknown"}</td>
                                    <td className="p-3">{donation.status === "expired" ? "NA" : donation.date}</td>
                                    <td className={`p-3 font-semibold ${donation.status === "accepted" ? "text-green-600" : "text-red-600"}`}>
                                        {donation.status}
                                    </td>
                                    <td className="p-3">
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                            onClick={() => navigate("/Donor/PHExtra")}
                                        >
                                            View More
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500 text-lg">No active donations found.</p>
            )}
        </div>
    );
};

export default ActiveDonations;


