// const VideoPlayer = ({ stream }: { stream: MediaStream }) => {
//     return ;
// };

import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useRef } from "react";

type VideoPlayerProps = {
    stream: MediaStream | null;
    className?: string;
};

const VideoPlayer = ({ stream, className }: VideoPlayerProps) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!stream)
            ref.current!.src =
                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
        else ref.current!.srcObject = stream;
    }, [stream]);

    return (
        <video
            playsInline
            autoPlay
            ref={ref}
            className={cn("max-w-xl rounded-md", className)}
        >
            <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" />
        </video>
    );
};

export default VideoPlayer;
