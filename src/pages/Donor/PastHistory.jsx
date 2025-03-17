import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../../../constants.js"
import { useNavigate } from "react-router-dom";

const requests_array = [
  {
    "_id": "1",
    "date": "2024-02-10",
    "status": "accepted",
    "id": "D001",
    "details": "Donated 5 kg of rice and 2 kg of pulses."
  },
  {
    "_id": "2",
    "date": "2024-01-25",
    "status": "pending",
    "id": "D002",
    "details": "Donated winter clothes for children."
  },
  {
    "_id": "3",
    "date": "2023-12-15",
    "status": "expired",
    "id": "D003",
    "details": "Donation request expired due to non-response."
  },  
  {
    "_id": "4",
    "date": "2023-11-05",
    "status": "accepted",
    "id": "D004",
    "details": "Provided medical supplies including bandages and medicines."
  }
]
  
const ngoDetailsList =  [
    { "name": "Helping Hands Foundation" },
    { "name": "Hope for All" },
    { "name": "NA" },
    { "name": "Care and Share" }
  ]


const DonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const [ngos, setNgos] = useState([])
  const [expanded, setExpanded] = useState({}); // Track expanded rows
  const navigate = useNavigate();
  // Fetch donation history
  // useEffect(() => {
  //   const fetchDonations = async () => {
  //     try {
  //       const response = await axios.get(`${backend_url}/donor/viewpastdonations`,
  //         {
  //           headers: {
  //             'Content-Type': "application/json"
  //           },
  //           withCredentials: true
  //         }
  //       ); // Adjust API endpoint
  //       setDonations(response.data.requests_array)
  //       setNgos(response.data.ngoDetailsList)
  //       console.log(donations)
  //     } catch (error) {
  //       console.error("Error fetching donation history:", error);
  //     }
  //   };
  //   fetchDonations();
  // }, []);

  setDonations(requests_array)
  setNgos(ngoDetailsList)
  // Toggle expanded state for each row
  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">My Donation History</h1>

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
              {donations.map((donation, index) => (
                <React.Fragment key={donation._id}>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3">{donation.status === "expired" ? "NA" : ngos[index].name}</td>
                    <td className="p-3">{donation.status === "expired" ? "NA" : donation.date}</td>
                    <td
                      className={`p-3 font-semibold ${donation.status === "accepted" ? "text-green-600" : "text-red-600"
                        }`}
                    >
                      {donation.status}
                    </td>
                    <td className="p-3">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={() => navigate("/Donor/PHExtra")}
                      >
                        {expanded[index] ? "Hide Details" : "View More"}
                      </button>
                    </td>
                  </tr>
                  {expanded[index] && (
                    <tr className="bg-gray-100">
                      <td colSpan="4" className="p-3 text-gray-700">
                        <p><strong>Donation ID:</strong> {donation.id}</p>
                        <p><strong>Details:</strong> {donation.details || "No additional details"}</p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No past donations found.</p>
      )}
    </div>
  );
};

export default DonationHistory;