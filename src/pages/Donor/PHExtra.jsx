import React, { useEffect, useState } from "react";
import axios from "axios";

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const [selectedDonation, setSelectedDonation] = useState(null);

  // useEffect(() => {
  //   const fetchDonations = async () => {
  //     try {
  //       const response = await axios.get("/api/donation-history"); // Adjust API endpoint
  //       setDonations(response.data);
  //     } catch (error) {
  //       console.error("Error fetching donation history:", error);
  //     }
  //   };
  //   fetchDonations();
  // }, []);

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
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{donation.status === "expired" ? "NA" : donation.ngoName}</td>
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
                      onClick={() => setSelectedDonation(donation)}
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
        <p className="text-center text-gray-500 text-lg">No past donations found.</p>
      )}

      {/* Modal for View More */}
      {selectedDonation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Donation Details</h2>
            <p><strong>Date:</strong> {selectedDonation.date}</p>
            <p><strong>Status:</strong> {selectedDonation.status}</p>
            <p><strong>Food Items:</strong> {selectedDonation.details || "No additional details"}</p>

            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <img src={selectedDonation.image1 || "/placeholder.jpg"} className="rounded-lg shadow-md" alt="Food Item 1" />
              <img src={selectedDonation.image2 || "/placeholder.jpg"} className="rounded-lg shadow-md" alt="Food Item 2" />
              <img src={selectedDonation.image3 || "/placeholder.jpg"} className="rounded-lg shadow-md" alt="Food Item 3" />
            </div>

            {/* Close Button */}
            <button
              className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={() => setSelectedDonation(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationHistory;
