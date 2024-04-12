"use client";

import { socket as SocketIO } from "@/lib/socket";
import {
    MutableRefObject,
    Ref,
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

type SocketContextType = {
    myId: string | null;
    isConnected: boolean;
    stream: MediaStream | null;
};

const SocketContext = createContext<SocketContextType>({
    myId: null,
    isConnected: false,
    stream: null,
});

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
const GetMedia = async () => {
    const device = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    });

    return device;
};

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const [myId, setMyId] = useState<string | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [stream, setStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        const socket = SocketIO.connect();

        CheckBrowser();

        GetMedia().then((currentStream) => {
            setStream(currentStream);
        });

        socket.connect();

        socket.on("connect", () => {
            setIsConnected(true);
            setMyId(socket.id);
        });
        socket.on("disconnect", () => {
            setIsConnected(false);
            setMyId(null);
        });

        return () => {
            socket.off("connect");
            socket.off("disconnect");
        };
    }, []);

    return (
        <SocketContext.Provider value={{ myId, isConnected, stream }}>
            {children}
        </SocketContext.Provider>
    );
};

const useSocket = () => {
    const props = useContext(SocketContext);

    return props;
};

export { SocketProvider, useSocket };
