import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1 className="text-5xl">Home</h1>
     <Link href="/dialogTests" className="text-3xl underline">Go to Dialog Tests</Link>
    </>
  )
}
