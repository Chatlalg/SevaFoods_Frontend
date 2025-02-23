import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { backend_url } from "../../constants.js";
import { useLocation } from "react-router-dom";
// Sample donor experiences with images
const donations = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Helping a Local Shelter",
    experience:
      "It was heartwarming to see smiles on everyone's faces when we delivered fresh meals. The gratitude was beyond words.",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1663040178972-ee1d45d33899?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Community Feast",
    experience:
      "Organizing a food drive was fulfilling. Seeing the community come together to support each other was inspiring.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1608555855762-2b657eb1c348?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    title: "Helping Children in Need",
    experience:
      "Delivering food to an orphanage made me realize how a small act of kindness can make a huge impact.",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    title: "Support During Crisis",
    experience:
      "During floods, we provided food packets to affected families. Their resilience and hope were truly humbling.",
  },
  {
    id: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Spreading Joy",
    experience:
      "Handing out meals to strangers made me realize the power of kindness and community support.",
  },
];

const DonorInfo = () => {
  const [flipped, setFlipped] = useState({});
  const navigate = useNavigate();
  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [coordinates, setCoordinates] = useState([]);

  const getLocation = async (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((loc) => {
        const latitude = loc.coords.latitude;
        const longitude = loc.coords.longitude;
        // console.log(latitude,longitude)
        setCoordinates([latitude, longitude]);
      });
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const foodType = e.target[0].value;
    const foodQuantity = e.target[1].value;
    const donationDetails = e.target[2].value;
    // console.log(foodType);
    // console.log(foodQuantity);
    // console.log(donationDetails);
    // console.log(coordinates);
    
    const response = await axios.post(
      `${backend_url}/donor/donate`,
      { foodType, foodQuantity, coordinates, donationDetails },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    alert("Food donation registered")
  };
  
  useEffect(() => {
    // console.log("useEffect")
    const cookies = Cookies.get();
    // console.log(cookies.access_token)
    const token = cookies.access_token;
    try {
      if (!token) {
        // alert("Unauthorized user!")
        throw new Error("Unauthorized user");
      }
    } catch (error) {
      console.log(error);
      // navigate("/completeProfile")
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      {/* Donor Gallery */}
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
        Our Donation Journey
      </h2>

      <div className="overflow-hidden">
        {/* Moving Row 1 (Right) */}
        <motion.div
          className="flex space-x-4 mb-4"
          animate={{ x: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {donations.map((donation) => (
            <motion.div
              key={donation.id}
              className="relative w-[200px] h-[250px] shadow-md rounded-lg cursor-pointer"
              onClick={() => toggleFlip(donation.id)}
            >
              <div
                className={`absolute w-full h-full transition-transform duration-700 transform-style-3d ${flipped[donation.id] ? "rotate-y-180" : ""}`}
              >
                {/* Front Side - Image */}
                <div className="absolute w-full h-full backface-hidden">
                  <img
                    src={donation.image}
                    alt={donation.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Back Side - Experience */}
                <div className="absolute w-full h-full bg-green-500 text-white p-4 rounded-lg transform rotate-y-180 backface-hidden flex flex-col items-center justify-center">
                  <h3 className="text-md font-semibold">{donation.title}</h3>
                  <p className="text-xs mt-2">{donation.experience}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Moving Row 2 (Left) */}
        <motion.div
          className="flex space-x-4"
          animate={{ x: ["100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {donations.map((donation) => (
            <motion.div
              key={donation.id + "bottom"}
              className="relative w-[200px] h-[250px] shadow-md rounded-lg cursor-pointer"
              onClick={() => toggleFlip(donation.id)}
            >
              <div
                className={`absolute w-full h-full transition-transform duration-700 transform-style-3d ${flipped[donation.id] ? "rotate-y-180" : ""}`}
              >
                {/* Front Side - Image */}
                <div className="absolute w-full h-full backface-hidden">
                  <img
                    src={donation.image}
                    alt={donation.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Back Side - Experience */}
                <div className="absolute w-full h-full bg-green-500 text-white p-4 rounded-lg transform rotate-y-180 backface-hidden flex flex-col items-center justify-center">
                  <h3 className="text-md font-semibold">{donation.title}</h3>
                  <p className="text-xs mt-2">{donation.experience}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Food Donation Form */}
      <div className="max-w-lg mx-auto mt-16 p-8 bg-white rounded-xl shadow-xl transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Donate Food
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Fill in the details below to donate food.
        </p>

        <button
          onClick={getLocation}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Provide Location
        </button>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Type of Food"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            placeholder="Quantity (e.g., 10 meals, 5kg rice)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          {/* <input type="text" placeholder="Pickup Location" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required /> */}
          <textarea
            placeholder="Additional Information (optional)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonorInfo;
