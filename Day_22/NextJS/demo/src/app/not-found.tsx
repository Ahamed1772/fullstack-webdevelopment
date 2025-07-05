"use client"
import { useRouter } from "next/navigation";
import "./globals.css";
const notFound = () => {
    const router = useRouter();
    const click = () => {
        router.push('/')
    }
  return (
    <div className="flex justify-center items-center h-screen">
        <h1 className="text-red-700">Sorry bro Page Not found</h1>
        <button className="bg-green-500" onClick={click}>back</button>
    </div>
  )
}

export default notFound