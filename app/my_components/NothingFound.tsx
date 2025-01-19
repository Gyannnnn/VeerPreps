import Link from "next/link";
import Image from "next/image";

export default function NothingFound() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
      <div className="w-screen h-full text-3xl flex flex-col  items-center justify-center">
        <h1>Nothing Found !</h1>
        <Link
          className="max-sm:text-xl sm:text-sm text-blue-600  flex flex-col items-center justify-center hover:underline underline-offset-2"
          target="_blank"
          href={"https://forms.gle/RZQEFb9Y4a9yQnYNA"}
        >
          {" "}
          <h1> Send Your Pyqs</h1>
          <Image
            src="/loader/alert.gif"
            height={30}
            width={50}
            alt="alert"
          ></Image>
        </Link>
      </div>
    </div>
  );
}
