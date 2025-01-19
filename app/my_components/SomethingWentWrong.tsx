import Link from "next/link";
import Image from "next/image";

export default function SomethingWentWrong() {
  return (
    <div>
      <div className="h-[60vh] w-screen flex items-center justify-center bg-transparent  pt-14">
        <div className="w-screen h-full text-3xl flex flex-col  items-center justify-center">
          <Image
            src="/loader/wentwrong3.gif"
            height={100}
            width={100}
            alt="alert"
          ></Image>
          <h1>Something went wrong !</h1>
          <Link
            className="text-xl text-blue-600  flex flex-col items-center justify-center hover:underline underline-offset-2"
            
            href={"/admin"}
          >
            {" "}
            <h1> Contact Admin</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
