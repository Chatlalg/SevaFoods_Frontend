import { useState, useEffect, useRef, useContext } from "react";
import { createContext } from "react";
import { io } from "socket.io-client";

const HOST = "http://localhost:3000"

const SocketContext = createContext(null);// Creates a context to store the socket instance.
export const useSocket = () => {//A custom hook that provides access to the socket anywhere in the app.
    return useContext(SocketContext);
}

export const SocketProvider = ({ children }) => {
    const socket = useRef(null);

    useEffect(() => {
        socket.current = io(HOST, {
            withCredentials: true,
        });
        socket.current.on("connect", () => {
            console.log("Connected to socket server");
        });
        return () => {
            socket.current.disconnect();
        }
    }, []);
    return (
        <SocketContext.Provider value={socket.current}>
            {children}
        </SocketContext.Provider>
    )
}
