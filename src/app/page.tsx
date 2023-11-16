"use client";

import { useEffect, useState } from "react";

import { socket } from "@/lib/socket";
import { Button } from "@/components/ui/button";

const CheckBrowser = () => {
    if (typeof window === "undefined") return;

    if (
        !("mediaDevices" in navigator) ||
        !("getUserMedia" in navigator.mediaDevices)
    )
        alert(
            "Your browser does not support WebRTC, you cant really use our app :("
        );
};

const RequestMedia = async () => {
    if (typeof window === "undefined") return;
    const device = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    });
};

export default function Home() {
    CheckBrowser();
    RequestMedia();

    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        socket.connect();

        socket.on("connect", () => setIsConnected(true));
        socket.on("disconnect", () => setIsConnected(false));

        return () => {
            socket.off("connect");
            socket.off("disconnect");
        };
    }, []);

    return <section>{isConnected && <JoinButton />}</section>;
}

const JoinButton = () => {
    return <Button size="lg">Join</Button>;
};
