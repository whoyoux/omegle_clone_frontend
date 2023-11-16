import { socket } from "@/lib/socket";

const DebugInfo = () => {
    return (
        <div className="w-full sticky top-[100vh] px-4 md:px-10 py-6 bg-primary md:text-xl font-medium">
            ID: {socket.id}
        </div>
    );
};

export default DebugInfo;
