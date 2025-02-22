import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DonationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [donation, setDonation] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    // Fetch donation details from backend
    fetch(`/api/donations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDonation(data);
        setDistance(data.distance); // Assuming backend returns distance
      })
      .catch((err) => console.error("Error fetching donation details:", err));
  }, [id]);

  if (!donation) {
    return <div className="text-center text-gray-600 mt-10">Loading donation details...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-4">{donation.title}</h2>
        <img src={donation.image} alt={donation.title} className="w-full h-60 object-cover rounded-lg mb-4" />
        <p className="text-gray-700 mb-2"><strong>Type of Food:</strong> {donation.foodType}</p>
        <p className="text-gray-700 mb-2"><strong>Quantity:</strong> {donation.quantity}</p>
        <p className="text-gray-700 mb-2"><strong>Pickup Location:</strong> {donation.location}</p>
        <p className="text-gray-700 mb-4"><strong>Distance:</strong> {distance} km</p>
        
        {/* Google Maps Embed */}
        <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
          <iframe
            title="Google Maps"
            className="w-full h-full"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(donation.location)}`}
            allowFullScreen
          ></iframe>
        </div>
        
        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          onClick={() => navigate(`/accept-donation/${id}`)}
        >
          Accept Donation
        </button>
      </div>
    </div>
  );
};

export default DonationDetails;
