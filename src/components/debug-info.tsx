"use client";

import { useSocket } from "@/components/socket-provider";

const DebugInfo = () => {
    const { myId } = useSocket();

    return (
        <div className="w-full sticky top-[100vh] px-4 md:px-10 py-6 bg-primary md:text-xl font-medium">
            ID: {myId}
        </div>
    );
};

export default DebugInfo;
