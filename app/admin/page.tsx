import { Card } from "@/components/ui/card";
import Admincard from "../my_components/Admin";

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-duration:0.5s] [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-duration:0.5s] [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-duration:0.5s]"></div>
      </div>
    </div>
  );
}
