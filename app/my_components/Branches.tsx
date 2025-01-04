import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function () {
  return (
    <Link href="/pyqs" className="hover:cursor-pointer">
      <Card className="w-52 h-52">
        <h1>Branches</h1>
      </Card>
    </Link>
  );
}
