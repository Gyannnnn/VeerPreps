import { Card } from "@/components/ui/card";
import Admincard from "../my_components/Admin";

export default function page() {
  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center ">
      <div className="w-[90vw] min-h-screen  mt-14 pb-10">
        <h1 className="text-4xl pt-10 pl-4">Admins</h1>
        <div className=" flex flex-wrap justify-center items-center sm:pt-20 pt-10  gap-10">
          <Admincard />
        </div>
      </div>
    </div>
  );
}
