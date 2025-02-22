// // // // // // // import React from "react";

// // // // // // // const Geotag = () => {
// // // // // // //   const statuses = [
// // // // // // //     { label: "NGO Destination", completed: true },
// // // // // // //     { label: "On the Way", completed: true },
// // // // // // //     { label: "Almost There", completed: false },
// // // // // // //     { label: "Reached Donor", completed: false },
// // // // // // //   ];

// // // // // // //   const images = [
// // // // // // //     "/images/delivery1.jpg",
// // // // // // //     "/images/delivery2.jpg",
// // // // // // //     "/images/delivery3.jpg",
// // // // // // //     "/images/delivery4.jpg",
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
// // // // // // //       {/* Order Tracking Progress */}
// // // // // // //       <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
// // // // // // //         <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
// // // // // // //           Order Tracker
// // // // // // //         </h2>
// // // // // // //         <div className="flex justify-between items-center relative">
// // // // // // //           {statuses.map((status, index) => (
// // // // // // //             <div key={index} className="relative flex flex-col items-center">
// // // // // // //               <div
// // // // // // //                 className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-sm font-bold ${
// // // // // // //                   status.completed ? "bg-green-500" : "bg-gray-300"
// // // // // // //                 }`}
// // // // // // //               >
// // // // // // //                 {index + 1}
// // // // // // //               </div>
// // // // // // //               <p className="text-sm mt-2 font-semibold text-gray-700">
// // // // // // //                 {status.label}
// // // // // // //               </p>
// // // // // // //               {index < statuses.length - 1 && (
// // // // // // //                 <div
// // // // // // //                   className={`absolute top-5 left-1/2 w-24 h-1 ${
// // // // // // //                     status.completed ? "bg-green-500" : "bg-gray-300"
// // // // // // //                   }`}
// // // // // // //                 ></div>
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Image Section with Multitasking Woman */}
// // // // // // //       <div className="relative mt-12 w-full max-w-3xl flex flex-col items-center">
// // // // // // //         <h2 className="text-xl font-bold text-gray-800 mb-6">
// // // // // // //           Waiting for the images...
// // // // // // //         </h2>
// // // // // // //         <div className="relative w-64 h-64 bg-pink-300 rounded-full flex items-center justify-center shadow-lg">
// // // // // // //           <div className="w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center">
// // // // // // //             <div className="text-3xl font-bold text-white">👩‍🍳</div>
// // // // // // //           </div>
// // // // // // //           {/* Arms with Images */}
// // // // // // //           {images.map((img, index) => (
// // // // // // //             <div
// // // // // // //               key={index}
// // // // // // //               className={`absolute w-20 h-20 rounded-lg shadow-lg overflow-hidden border-2 border-white ${
// // // // // // //                 index === 0 ? "-top-10 -left-10 rotate-12" : ""
// // // // // // //               } ${index === 1 ? "-top-10 -right-10 -rotate-12" : ""}
// // // // // // //               ${index === 2 ? "-bottom-10 -left-10 -rotate-12" : ""}
// // // // // // //               ${index === 3 ? "-bottom-10 -right-10 rotate-12" : ""}`}
// // // // // // //             >
// // // // // // //               <img
// // // // // // //                 src={img}
// // // // // // //                 alt={`Delivery ${index + 1}`}
// // // // // // //                 className="w-full h-full object-cover"
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Geotag;
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // const Geotag = () => {
// // // // // //   // Order Tracking Steps
// // // // // //   const statuses = [
// // // // // //     "NGO Destination",
// // // // // //     "On the Way",
// // // // // //     "Almost There",
// // // // // //     "Reached Donor",
// // // // // //   ];
// // // // // //   const [currentStep, setCurrentStep] = useState(1);

// // // // // //   useEffect(() => {
// // // // // //     const interval = setInterval(() => {
// // // // // //       setCurrentStep((prev) => (prev < statuses.length ? prev + 1 : prev));
// // // // // //     }, 3000); // Update every 3 sec
// // // // // //     return () => clearInterval(interval);
// // // // // //   }, []);

// // // // // //   // Image Flipping Effect
// // // // // //   const images = [
// // // // // //     "/images/delivery1.jpg",
// // // // // //     "/images/delivery2.jpg",
// // // // // //     "/images/delivery3.jpg",
// // // // // //     "/images/delivery4.jpg",
// // // // // //   ];
// // // // // //   const [currentImage, setCurrentImage] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     const imageInterval = setInterval(() => {
// // // // // //       setCurrentImage((prev) => (prev + 1) % images.length);
// // // // // //     }, 4000); // Flip image every 4 sec
// // // // // //     return () => clearInterval(imageInterval);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
// // // // // //       {/* Order Tracking Progress Bar */}
// // // // // //       <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
// // // // // //         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
// // // // // //           Order Tracker
// // // // // //         </h2>
// // // // // //         <div className="relative flex items-center">
// // // // // //           {/* Progress Line */}
// // // // // //           <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded-full">
// // // // // //             <div
// // // // // //               className="h-2 bg-green-500 rounded-full transition-all duration-500"
// // // // // //               style={{ width: `${(currentStep / statuses.length) * 100}%` }}
// // // // // //             ></div>
// // // // // //           </div>
// // // // // //           {/* Steps */}
// // // // // //           {statuses.map((status, index) => (
// // // // // //             <div key={index} className="relative flex flex-col items-center w-1/4">
// // // // // //               <div
// // // // // //                 className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold transition-all ${
// // // // // //                   index < currentStep ? "bg-green-500" : "bg-gray-300"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {index + 1}
// // // // // //               </div>
// // // // // //               <p className="text-sm mt-2 font-semibold text-gray-700">{status}</p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Image Flipping Section */}
// // // // // //       <div className="relative mt-12 w-72 h-96 flex items-center justify-center">
// // // // // //         <h2 className="absolute -top-8 text-xl font-bold text-gray-800">
// // // // // //           Waiting for the images...
// // // // // //         </h2>
// // // // // //         <div className="relative w-64 h-80 bg-white shadow-lg rounded-xl overflow-hidden">
// // // // // //           <AnimatePresence mode="wait">
// // // // // //             <motion.img
// // // // // //               key={currentImage}
// // // // // //               src={images[currentImage]}
// // // // // //               alt="Delivery"
// // // // // //               className="absolute w-full h-full object-cover rounded-xl"
// // // // // //               initial={{ rotateY: 90, opacity: 0 }}
// // // // // //               animate={{ rotateY: 0, opacity: 1 }}
// // // // // //               exit={{ rotateY: -90, opacity: 0 }}
// // // // // //               transition={{ duration: 0.8 }}
// // // // // //             />
// // // // // //           </AnimatePresence>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Geotag;
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // const Geotag = () => {
// // // // //   // Order Tracking Steps
// // // // //   const statuses = [
// // // // //     "NGO Destination",
// // // // //     "On the Way",
// // // // //     "Almost There",
// // // // //     "Reached Donor",
// // // // //   ];
// // // // //   const [currentStep, setCurrentStep] = useState(1);

// // // // //   useEffect(() => {
// // // // //     const interval = setInterval(() => {
// // // // //       setCurrentStep((prev) => (prev < statuses.length ? prev + 1 : prev));
// // // // //     }, 3000); // Update every 3 sec
// // // // //     return () => clearInterval(interval);
// // // // //   }, []);

// // // // //   // Falling Fruits Animation for Image Reveal
// // // // //   const images = [
// // // // //     { src: "/images/delivery1.jpg", fruit: "🍎" },
// // // // //     { src: "/images/delivery2.jpg", fruit: "🍊" },
// // // // //     { src: "/images/delivery3.jpg", fruit: "🍇" },
// // // // //     { src: "/images/delivery4.jpg", fruit: "🍌" },
// // // // //   ];
// // // // //   const [currentImage, setCurrentImage] = useState(0);
// // // // //   const [showImage, setShowImage] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const imageInterval = setInterval(() => {
// // // // //       setShowImage(false);
// // // // //       setTimeout(() => {
// // // // //         setCurrentImage((prev) => (prev + 1) % images.length);
// // // // //         setShowImage(true);
// // // // //       }, 800);
// // // // //     }, 4000); // Change every 4 sec
// // // // //     return () => clearInterval(imageInterval);
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-200 p-6">
// // // // //       {/* Order Tracking Progress Bar */}
// // // // //       <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
// // // // //         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
// // // // //           Order Tracker
// // // // //         </h2>
// // // // //         <div className="relative flex items-center">
// // // // //           {/* Progress Line */}
// // // // //           <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded-full">
// // // // //             <div
// // // // //               className="h-2 bg-green-500 rounded-full transition-all duration-500"
// // // // //               style={{ width: `${(currentStep / statuses.length) * 100}%` }}
// // // // //             ></div>
// // // // //           </div>
// // // // //           {/* Steps (Centered Dots) */}
// // // // //           {statuses.map((status, index) => (
// // // // //             <div key={index} className="relative flex flex-col items-center w-1/4">
// // // // //               <div
// // // // //                 className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold transition-all absolute transform -translate-y-1/2 ${
// // // // //                   index < currentStep ? "bg-green-500" : "bg-gray-300"
// // // // //                 }`}
// // // // //               >
// // // // //                 {index + 1}
// // // // //               </div>
// // // // //               <p className="text-sm mt-6 font-semibold text-gray-700">{status}</p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Falling Fruits Image Reveal */}
// // // // //       <div className="relative mt-12 w-72 h-96 flex items-center justify-center">
// // // // //         <h2 className="absolute -top-8 text-xl font-bold text-gray-800">
// // // // //           Waiting for the images...
// // // // //         </h2>
// // // // //         <div className="relative w-64 h-80 bg-white shadow-lg rounded-xl overflow-hidden">
// // // // //           <AnimatePresence mode="wait">
// // // // //             {!showImage && (
// // // // //               <motion.div
// // // // //                 key={`fruit-${currentImage}`}
// // // // //                 className="absolute w-full text-center text-6xl"
// // // // //                 initial={{ y: -200, opacity: 1 }}
// // // // //                 animate={{ y: 0, opacity: 1 }}
// // // // //                 exit={{ scale: 2, opacity: 0 }}
// // // // //                 transition={{ duration: 0.8 }}
// // // // //               >
// // // // //                 {images[currentImage].fruit}
// // // // //               </motion.div>
// // // // //             )}
// // // // //             {showImage && (
// // // // //               <motion.img
// // // // //                 key={`image-${currentImage}`}
// // // // //                 src={images[currentImage].src}
// // // // //                 alt="Delivery"
// // // // //                 className="absolute w-full h-full object-cover rounded-xl"
// // // // //                 initial={{ scale: 0.2, opacity: 0 }}
// // // // //                 animate={{ scale: 1, opacity: 1 }}
// // // // //                 exit={{ scale: 2, opacity: 0 }}
// // // // //                 transition={{ duration: 0.8 }}
// // // // //               />
// // // // //             )}
// // // // //           </AnimatePresence>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Geotag;

// // // // import React from "react";

// // // // const Geotag = () => {
// // // //   // Order Tracking Steps
// // // //   const statuses = [
// // // //     "NGO Destination",
// // // //     "On the Way",
// // // //     "Almost There",
// // // //     "Reached Donor",
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-200 p-6">
// // // //       {/* Order Tracking Progress Bar */}
// // // //       <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
// // // //         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
// // // //           Order Tracker
// // // //         </h2>
// // // //         <div className="relative flex items-center">
// // // //           {/* Progress Line */}
// // // //           <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded-full">
// // // //             <div
// // // //               className="h-2 bg-green-500 rounded-full transition-all duration-500"
// // // //               style={{ width: "75%" }} // Assuming 75% progress
// // // //             ></div>
// // // //           </div>
// // // //           {/* Steps (Centered Dots) */}
// // // //           {statuses.map((status, index) => (
// // // //             <div key={index} className="relative flex flex-col items-center w-1/4">
// // // //               <div
// // // //                 className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold transition-all absolute transform -translate-y-1/2 ${
// // // //                   index < 3 ? "bg-green-500" : "bg-gray-300"
// // // //                 }`}
// // // //               >
// // // //                 {index + 1}
// // // //               </div>
// // // //               <p className="text-sm mt-6 font-semibold text-gray-700">{status}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Image Cards Section */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
// // // //         {[1, 2, 3].map((num) => (
// // // //           <div key={num} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm">
// // // //             <img src={`/images/delivery${num}.jpg`} alt="Delivery" className="w-full h-48 object-cover"/>
// // // //             <div className="p-4">
// // // //               <h5 className="text-lg font-bold">Delivery Update {num}</h5>
// // // //               <p className="text-gray-600 mt-2">
// // // //                 This is a wider card with supporting text below as a natural lead-in to additional content.
// // // //               </p>
// // // //               <p className="text-sm text-gray-500 mt-2">Last updated 3 mins ago</p>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Geotag;

// // // import React, { useState } from "react";
// // // import { FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

// // // const ChatOrderTracker = () => {
// // //   const [messages, setMessages] = useState([
// // //     { id: 1, sender: "You", text: "Hello! Is the food ready?" },
// // //     { id: 2, sender: "NGO", text: "Yes, we have packed it for pickup." },
// // //   ]);
// // //   const [input, setInput] = useState("");

// // //   const sendMessage = () => {
// // //     if (input.trim() === "") return;
// // //     setMessages([...messages, { id: messages.length + 1, sender: "You", text: input }]);
// // //     setInput("");
// // //   };

// // //   const handleFinalDelivery = () => {
// // //     navigator.geolocation.getCurrentPosition((position) => {
// // //       const { latitude, longitude } = position.coords;
// // //       setMessages([
// // //         ...messages,
// // //         { id: messages.length + 1, sender: "You", text: `Final Delivery Confirmed! 📍 Location: (${latitude}, ${longitude})` },
// // //       ]);
// // //     });
// // //   };

// // //   // Order Tracking Steps
// // //   const statuses = ["NGO Destination", "On the Way", "Almost There", "Reached Donor"];

// // //   return (
// // //     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
// // //       {/* Order Tracking Progress Bar */}
// // //       <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg mb-6">
// // //         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Order Tracker</h2>
// // //         <div className="relative flex items-center">
// // //           <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded-full">
// // //             <div className="h-2 bg-green-500 rounded-full transition-all duration-500" style={{ width: "75%" }}></div>
// // //           </div>
// // //           {statuses.map((status, index) => (
// // //             <div key={index} className="relative flex flex-col items-center w-1/4">
// // //               <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold transition-all absolute transform -translate-y-1/2 ${index < 3 ? "bg-green-500" : "bg-gray-300"}`}>{index + 1}</div>
// // //               <p className="text-sm mt-6 font-semibold text-gray-700">{status}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Chat Section */}
// // //       <div className="w-full max-w-2xl flex flex-col h-96 bg-white rounded-lg shadow-lg">
// // //         <div className="bg-blue-500 text-white p-4 flex items-center shadow-md">
// // //           <h2 className="text-lg font-semibold">NGO Chat</h2>
// // //         </div>
// // //         <div className="flex-1 p-4 overflow-y-auto space-y-3">
// // //           {messages.map((msg) => (
// // //             <div key={msg.id} className={`p-3 rounded-lg max-w-xs ${msg.sender === "You" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"}`}>{msg.text}</div>
// // //           ))}
// // //         </div>
// // //         <div className="p-4 bg-white flex items-center shadow-md">
// // //           <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="flex-1 p-2 border rounded-lg outline-none" />
// // //           <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
// // //             <FaPaperPlane />
// // //           </button>
// // //           <button onClick={handleFinalDelivery} className="ml-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 flex items-center">
// // //             <FaMapMarkerAlt className="mr-1" /> Final Delivery
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ChatOrderTracker;

// // import React, { useState } from "react";
// // import { FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

// // const ChatOrderTracker = () => {
// //   const [messages, setMessages] = useState([
// //     { id: 1, sender: "You", text: "Hello! Is the food ready?" },
// //     { id: 2, sender: "NGO", text: "Yes, we have packed it for pickup." },
// //   ]);
// //   const [input, setInput] = useState("");

// //   const sendMessage = () => {
// //     if (input.trim() === "") return;
// //     setMessages([...messages, { id: messages.length + 1, sender: "You", text: input }]);
// //     setInput("");
// //   };

// //   const handleFinalDelivery = () => {
// //     navigator.geolocation.getCurrentPosition((position) => {
// //       const { latitude, longitude } = position.coords;
// //       setMessages([
// //         ...messages,
// //         { id: messages.length + 1, sender: "You", text: `Final Delivery Confirmed! 📍 Location: (${latitude}, ${longitude})` },
// //       ]);
// //     });
// //   };

// //   // Order Tracking Steps
// //   const statuses = ["NGO Destination", "On the Way", "Almost There", "Reached Donor"];

// //   return (
// //     <div className="min-h-screen w-full bg-gray-100 p-10">
// //       {/* Order Tracking Progress Bar */}
// //       <div className="w-full bg-white p-6 rounded-lg shadow-lg mb-6">
// //         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Order Tracker</h2>
// //         <div className="relative flex items-center w-full">
// //           <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded-full">
// //             <div className="h-2 bg-green-500 rounded-full transition-all duration-500" style={{ width: "75%" }}></div>
// //           </div>
// //           {statuses.map((status, index) => (
// //             <div key={index} className="relative flex flex-col items-center flex-1">
// //               <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold transition-all absolute transform -translate-y-1/2 ${index < 3 ? "bg-green-500" : "bg-gray-300"}`}>{index + 1}</div>
// //               <p className="text-sm mt-6  font-semibold text-gray-700">{status}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Chat Section */}
// //       <div className="w-full flex flex-col h-screen bg-white rounded-lg shadow-lg">
// //         <div className="bg-blue-500 text-white p-5 flex items-center shadow-md">
// //           <h2 className="text-lg font-semibold">NGO Chat</h2>
// //         </div>
// //         <div className="flex-1 p-4 overflow-y-auto space-y-3">
// //           {messages.map((msg) => (
// //             <div key={msg.id} className={`p-3 rounded-lg max-w-xl ${msg.sender === "You" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"}`}>{msg.text}</div>
// //           ))}
// //         </div>
// //         <div className="p-4 bg-white flex items-center shadow-md">
// //           <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="flex-1 p-2 border rounded-lg outline-none" />
// //           <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
// //             <FaPaperPlane />
// //           </button>
// //           <button onClick={handleFinalDelivery} className="ml-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 flex items-center">
// //             <FaMapMarkerAlt className="mr-1" /> Final Delivery
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChatOrderTracker;


// import { useState, useEffect } from "react";
// import { useSocket } from "../context/SocketProvider"; // Import the socket hook

// const Chat = ({ donorId, ngoId, userId }) => {
//     const socket = useSocket(); // Get the global socket instance
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([]);
//     const [image, setImage] = useState(null);
//     const roomId = ${donorId}_${ngoId};

//     useEffect(() => {
//         if (!socket) return; // Ensure socket is available before using it

//         socket.emit("startChat", { donorId, ngoId });
//         socket.emit("getMessages", { roomId });

//         socket.on("loadMessages", (msgs) => {
//             setMessages(msgs);
//         });

//         socket.on("receiveMessage", (data) => {
//             setMessages((prev) => [...prev, data]);
//         });

//         socket.on("deliveryCompleted", () => {
//             alert("Delivery completed, chat has ended.");
//             socket.disconnect();
//         });

//         return () => {
//             socket.off("receiveMessage");
//             socket.off("loadMessages");
//             socket.off("deliveryCompleted");
//         };
//     }, [socket, roomId]); // Depend on socket to ensure it's ready

//     // Convert image to Base64
//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onloadend = () => {
//                 setImage(reader.result); // Store Base64 image
//             };
//         }
//     };

//     const sendMessage = () => {
//         if (!socket) return;
//         if (message.trim() === "" && !image) return;
//         socket.emit("sendMessage", { roomId, message, senderId: userId, image });
//         setMessage("");
//         setImage(null);
//     };

//     const endDelivery = () => {
//         if (!socket) return;
//         socket.emit("endDelivery", { donorId, ngoId });
//     };

//     return (
//         <div>
//             <h3>Chat Room: {roomId}</h3>
//             <div style={{ border: "1px solid black", height: "200px", overflow: "auto" }}>
//                 {messages.map((msg, index) => (
//                     <div key={index} style={{ marginBottom: "10px" }}>
//                         <p style={{ color: msg.senderId === userId ? "blue" : "green" }}>
//                             {msg.senderId === userId ? "You" : "Them"}: {msg.message}
//                         </p>
//                         {msg.image && <img src={msg.image} alt="Chat Image" style={{ width: "200px" }} />}
//                     </div>
//                 ))}
//             </div>
//             <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
//             <input type="file" accept="image/*" onChange={handleImageUpload} />
//             {image && <img src={image} alt="Preview" style={{ width: "100px" }} />}
//             <button onClick={sendMessage}>Send</button>
//             <button onClick={endDelivery} style={{ background: "red", color: "white" }}>Complete Delivery</button>
//         </div>
//     );
// };

// export default Chat;

import React, { useState, useEffect, useRef, useContext, createContext } from "react";
import { io } from "socket.io-client";
import { FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

const HOST = "http://localhost:5000"; // Change this to your actual backend URL

// Create and use the socket context
const SocketContext = createContext(null);
export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    const socket = useRef(null);

    useEffect(() => {
        socket.current = io(HOST, { withCredentials: true });
        socket.current.on("connect", () => console.log("Connected to socket server"));
        return () => socket.current.disconnect();
    }, []);

    return <SocketContext.Provider value={socket.current}>{children}</SocketContext.Provider>;
};

const ChatOrderTracker = ({ donorId, ngoId, userId }) => {
    const socket = useSocket();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [image, setImage] = useState(null);
    const roomId = `${donorId}_${ngoId}`;

    // Order Tracking Steps
    const statuses = ["NGO Destination", "On the Way", "Almost There", "Reached Donor"];

    useEffect(() => {
        if (!socket) return;
        socket.emit("startChat", { donorId, ngoId });
        socket.emit("getMessages", { roomId });

        socket.on("loadMessages", (msgs) => setMessages(msgs));
        socket.on("receiveMessage", (data) => setMessages((prev) => [...prev, data]));
        socket.on("deliveryCompleted", () => {
            alert("Delivery completed, chat has ended.");
            socket.disconnect();
        });

        return () => {
            socket.off("receiveMessage");
            socket.off("loadMessages");
            socket.off("deliveryCompleted");
        };
    }, [socket, roomId]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => setImage(reader.result);
        }
    };

    const sendMessage = () => {
        if (!socket || (message.trim() === "" && !image)) return;
        socket.emit("sendMessage", { roomId, message, senderId: userId, image });
        setMessage("");
        setImage(null);
    };

    const endDelivery = () => socket?.emit("endDelivery", { donorId, ngoId });

    return (
        <div className="min-h-screen w-full bg-gray-100 p-10">
            {/* Order Tracking Progress Bar */}
            <div className="w-full bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Order Tracker</h2>
                <div className="relative flex items-center w-full">
                    <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full transition-all duration-500" style={{ width: "75%" }}></div>
                    </div>
                    {statuses.map((status, index) => (
                        <div key={index} className="relative flex flex-col items-center flex-1">
                            <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold transition-all absolute transform -translate-y-1/2 ${index < 3 ? "bg-green-500" : "bg-gray-300"}`}>{index + 1}</div>
                            <p className="text-sm mt-6 font-semibold text-gray-700">{status}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Section */}
            <div className="w-full flex flex-col h-screen bg-white rounded-lg shadow-lg">
                <div className="bg-blue-500 text-white p-5 flex items-center shadow-md">
                    <h2 className="text-lg font-semibold">NGO Chat</h2>
                </div>
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                    {messages.map((msg, index) => (
                        <div key={index} className={`p-3 rounded-lg max-w-xl ${msg.senderId === userId ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"}`}>
                            {msg.message}
                            {msg.image && <img src={msg.image} alt="Chat Image" className="mt-2 w-48" />}
                        </div>
                    ))}
                </div>
                <div className="p-4 bg-white flex items-center shadow-md">
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." className="flex-1 p-2 border rounded-lg outline-none" />
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="ml-2" />
                    {image && <img src={image} alt="Preview" className="w-16 ml-2" />}
                    <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                        <FaPaperPlane />
                    </button>
                    <button onClick={endDelivery} className="ml-2 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
                        <FaMapMarkerAlt className="mr-1" /> Complete Delivery
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatOrderTracker;
