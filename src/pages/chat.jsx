// import React, { useState } from "react";
// import { FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

// const ChatPage = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "You", text: "Hello! Is the food ready?" },
//     { id: 2, sender: "NGO", text: "Yes, we have packed it for pickup." },
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = () => {
//     if (input.trim() === "") return;
//     setMessages([...messages, { id: messages.length + 1, sender: "You", text: input }]);
//     setInput("");
//   };

//   const handleFinalDelivery = () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const { latitude, longitude } = position.coords;
//       setMessages([
//         ...messages,
//         { id: messages.length + 1, sender: "You", text: `Final Delivery Confirmed! 📍 Location: (${latitude}, ${longitude})` },
//       ]);
//     });
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       {/* Profile Bar */}
//       <div className="bg-blue-500 text-white p-4 flex items-center shadow-md">
//         <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
//         <h2 className="text-lg font-semibold">NGO Chat</h2>
//       </div>

//       {/* Chat Section */}
//       <div className="flex-1 p-4 overflow-y-auto space-y-3">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`p-3 rounded-lg max-w-xs ${
//               msg.sender === "You" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       {/* Message Input Bar */}
//       <div className="p-4 bg-white flex items-center shadow-md">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-1 p-2 border rounded-lg outline-none"
//         />
//         <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//           <FaPaperPlane />
//         </button>
//         <button onClick={handleFinalDelivery} className="ml-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 flex items-center">
//           <FaMapMarkerAlt className="mr-1" /> Final Delivery
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;


import { useState, useEffect } from "react";
import { useSocket } from "../context/Socket.jsx"; // Import the socket hook

const Chat = ({ donorId, ngoId, userId }) => {
    const socket = useSocket(); // Get the global socket instance
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [image, setImage] = useState(null);
    const roomId = `${donorId}_${ngoId}`

    useEffect(() => {
        if (!socket) return; // Ensure socket is available before using it

        socket.emit("startChat", { donorId, ngoId });
        socket.emit("getMessages", { roomId });

        socket.on("loadMessages", (msgs) => {
            setMessages(msgs);
        });

        socket.on("receiveMessage", (data) => {
            setMessages((prev) => [...prev, data]);
        });

        socket.on("deliveryCompleted", () => {
            alert("Delivery completed, chat has ended.");
            socket.disconnect();
        });

        return () => {
            socket.off("receiveMessage");
            socket.off("loadMessages");
            socket.off("deliveryCompleted");
        };
    }, [socket, roomId]); // Depend on socket to ensure it's ready

    // Convert image to Base64
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result); // Store Base64 image
            };
        }
    };

    const sendMessage = () => {
        if (!socket) return;
        if (message.trim() === "" && !image) return;
        socket.emit("sendMessage", { roomId, message, senderId: userId, image });
        setMessage("");
        setImage(null);
    };

    const endDelivery = () => {
        if (!socket) return;
        socket.emit("endDelivery", { donorId, ngoId });
    };

    return (
        <div>
            <h3>Chat Room: {roomId}</h3>
            <div style={{ border: "1px solid black", height: "200px", overflow: "auto" }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        <p style={{ color: msg.senderId === userId ? "blue" : "green" }}>
                            {msg.senderId === userId ? "You" : "Them"}: {msg.message}
                        </p>
                        {msg.image && <img src={msg.image} alt="Chat Image" style={{ width: "200px" }} />}
                    </div>
                ))}
            </div>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {image && <img src={image} alt="Preview" style={{ width: "100px" }} />}
            <button onClick={sendMessage}>Send</button>
            <button onClick={endDelivery} style={{ background: "red", color: "white" }}>Complete Delivery</button>
        </div>
    );
};

export default Chat;