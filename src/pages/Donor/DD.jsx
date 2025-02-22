import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RouteMap from "../../components/RoutesMap"; // Import the map component
import { backend_url } from "../../../constants";

const DonationDetails = () => {
    const navigate = useNavigate();
    const [donation, setDonation] = useState({});

    // useEffect(() => {
    //     // Fetch donation details
    //     const fetchDonationDetails = async () => {
    //         try {
    //             const response = await axios.get(`${backend_url}/donor/getRequestData`);
    //             setDonation(response.data);
    //         } catch (error) {
    //             console.error("Error fetching donation details:", error);
    //         }
    //     };
    //     fetchDonationDetails();
    // }, []);  

    if (!donation) {
        return <p className="text-center text-gray-600 mt-10">Loading donation details...</p>;
    }
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{donation.foodType}</h2>
                <p><strong>Date:</strong> {donation.date}</p>
                <p><strong>Status:</strong> {donation.status}</p>
                <p><strong>Food Items:</strong> {donation.foodItems}</p>

                {/* Images */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                    {donation.images.map((img, index) => (
                        <img key={index} src={img} alt="Food" className="w-full h-20 object-cover rounded-md" />
                    ))}
                </div>

                {/* Route Map */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Route to NGO</h3>
                    <RouteMap start={donation.ngoLocation} end={donation.donorLocation} />
                </div>

                {/* Back Button */}
                <button
                    className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default DonationDetails;
