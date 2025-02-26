import { Card } from "@/components/ui/card";
import Admincard from "../my_components/Admin";

export default function page() {
  return (
    <div className="min-h-screen w-screen mt-16 ">
      <h1 className="text-3xl  pt-10 pb-4 pl-4 sm:pl-16 ">Admins</h1>
      <Admincard/>
    </div>
  );
}
