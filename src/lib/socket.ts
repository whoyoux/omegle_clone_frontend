import { io } from "socket.io-client";

const URL =
    process.env.NODE_ENV === "production"
        ? "https://server-4xwtz.ondigitalocean.app/"
        : "http://localhost:5000";

export const socket = io(URL);