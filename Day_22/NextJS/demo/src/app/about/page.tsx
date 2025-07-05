"use client"
import { useRouter } from "next/navigation"
const page = () => {
    const router = useRouter();
    const back = () => {
        router.back();
    }
  return (
    <div>
        <h1>About Page</h1>
        <button onClick={() => back()}>back</button>
    </div>
  )
}

export default page