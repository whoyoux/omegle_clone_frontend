import { Socket, io } from "socket.io-client";

const URL =
    process.env.NODE_ENV === "production"
        ? "https://server-4xwtz.ondigitalocean.app"
        : "http://localhost:5000";

const globalForSocket = globalThis as unknown as { socket: Socket };

const createNewIO = () => {
    console.log("Creating new socket.io instance");
    return io(URL, { autoConnect: false });
};

export const socket = globalForSocket.socket || createNewIO();

if (process.env.NODE_ENV !== "production") globalForSocket.socket = socket;
