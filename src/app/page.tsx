"use client";

import { useEffect, useState } from "react";

import { socket } from "@/lib/socket";

export default function Home() {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        socket.on("connect", () => setIsConnected(true));
        socket.on("disconnect", () => setIsConnected(false));

        return () => {
            socket.off("connect");
            socket.off("disconnect");
        };
    }, []);

    return <main>{isConnected ? "Connected!" : "Not connected!"}</main>;
}
