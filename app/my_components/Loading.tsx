import Image from "next/image"



export default function Suspense() {
  return (
    <div >
        <Image src="/loader/ld1.gif" alt="loading" width={100} height={500} />
    </div>
  )
}
