import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1 className="text-5xl">Home</h1>

      <Link href="/dialogTests?showDialog=y" className="text-3xl underline">Go to dialog Tests with OPEN Modal</Link>
      <Link href="/dialogTests?showDialog=n" className="text-3xl underline">Go to dialog Tests with HIDDEN Modal</Link>

    </>
  )
}
