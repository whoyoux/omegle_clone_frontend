"use client";

import { Button } from "@/components/ui/button";
import { useSocket } from "@/components/socket-provider";
import VideoPlayer from "@/components/video-player";
import { useEffect, useRef } from "react";

export default function Home() {
    const { isConnected, stream } = useSocket();

    const myVideo = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        myVideo.current!.srcObject = stream;
    }, [stream]);

    return (
        <section>
            {isConnected && <JoinButton />}
            <VideoPlayer stream={stream} />
        </section>
    );
}

const JoinButton = () => {
    return <Button size="lg">Join</Button>;
};
