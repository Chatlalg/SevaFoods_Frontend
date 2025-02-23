import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend_url } from "../../../constants.js";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
const ActiveDonations = () => {
  const [donations, setDonations] = useState([]);
  const [ngos, setNgos] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const cookies = Cookies.get();
    const token = cookies.access_token;
    try {
      if (!token) throw new Error("Unauthorized user");
    } catch (error) {
      console.log(error);
      navigate("/donate");
    }
    const fetchDonations = async () => {
      try {
        const response = await axios.get(
          `${backend_url}/donor/viewpastdonations`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        console.log("API Response:", response.data); // Debugging

        // Ensure donations is properly extracted
        setDonations(response.data.requests_array || []);

        // Store NGOs in an object
        const ngoMap = {};
        if (Array.isArray(response.data.ngoDetailsList)) {
          response.data.ngoDetailsList.forEach((ngo) => {
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        My Active Donations
      </h1>

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
                  <td className="p-3">
                    {donation.status === "expired"
                      ? "NA"
                      : ngos[donation.ngoId] || "Unknown"}
                  </td>
                  <td className="p-3">
                    {donation.status === "expired" ? "NA" : donation.date}
                  </td>
                  <td
                    className={`p-3 font-semibold ${donation.status === "accepted" ? "text-green-600" : "text-red-600"}`}
                  >
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
        <p className="text-center text-gray-500 text-lg">
          No active donations found.
        </p>
      )}
    </div>
  );
};

export default ActiveDonations;
