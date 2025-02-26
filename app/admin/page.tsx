import { Card } from "@/components/ui/card";
import Admincard from "../my_components/Admin";

export default function page() {
  return (
    // <div className="min-h-screen w-screen mt-16 pb-6">
    //   <h1 className="text-3xl  pt-10 pb-4 pl-4 sm:pl-16 ">Admins</h1>
    //   <Admincard/>
    // </div>
    <div className="flex justify-center items-center h-screen bg-transparent">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-[bounce_0.5s_infinite_alternate] [animation-delay:-0.45s]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-[bounce_0.5s_infinite_alternate] [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-[bounce_0.5s_infinite_alternate] [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-[bounce_0.5s_infinite_alternate]"></div>
      </div>
    </div>
  );
}
