// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const NgoDonationHistory = () => {
//   const [donations, setDonations] = useState([]);

//   // Fetch donation history for the NGO
//   useEffect(() => {
//     const fetchDonations = async () => {
//       try {
//         const response = await axios.get("/api/ngo-donation-history"); // Adjust API endpoint
//         setDonations(response.data);
//       } catch (error) {
//         console.error("Error fetching donation history:", error);
//       }
//     };

//     fetchDonations();
//   }, []);

//   return (
//     <div className="p-8 bg-blue-50 min-h-screen">
//       <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Donations Received</h1>

//       {donations.length > 0 ? (
//         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-blue-200 text-gray-700 uppercase text-sm">
//                 <th className="p-3 text-left">Donor Name</th>
//                 <th className="p-3 text-left">Date</th>
//                 <th className="p-3 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {donations.map((donation, index) => (
//                 <tr key={index} className="border-b hover:bg-blue-50">
//                   <td className="p-3">{donation.status === "expired" ? "NA" : donation.donorName}</td>
//                   <td className="p-3">{donation.status === "expired" ? "NA" : donation.date}</td>
//                   <td
//                     className={`p-3 font-semibold ${
//                       donation.status === "accepted" ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     {donation.status}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p className="text-center text-gray-500 text-lg">No donations received yet.</p>
//       )}
//     </div>
//   );
// };

// export default NgoDonationHistory;

import React, { useEffect, useState } from "react";
import axios from "axios";

const NgoDonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const [expanded, setExpanded] = useState({});

  // Fetch NGO donation history
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get("/api/ngo-donation-history"); // Adjust API endpoint
        setDonations(response.data);
      } catch (error) {
        console.error("Error fetching donation history:", error);
      }
    };
    fetchDonations();
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Donations Received</h1>

      {donations.length > 0 ? (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-200 text-gray-700 uppercase text-sm">
                <th className="p-3 text-left">Donor Name</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <React.Fragment key={index}>
                  <tr className="border-b hover:bg-blue-50">
                    <td className="p-3">{donation.status === "expired" ? "NA" : donation.donorName}</td>
                    <td className="p-3">{donation.status === "expired" ? "NA" : donation.date}</td>
                    <td
                      className={`p-3 font-semibold ${
                        donation.status === "accepted" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {donation.status}
                    </td>
                    <td className="p-3">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={() => toggleExpand(index)}
                      >
                        {expanded[index] ? "Hide Details" : "View More"}
                      </button>
                    </td>
                  </tr>
                  {expanded[index] && (
                    <tr className="bg-blue-100">
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
        <p className="text-center text-gray-500 text-lg">No donations received yet.</p>
      )}
    </div>
  );
};

export default NgoDonationHistory;
