import Valid from "../public/valid.jpg";
import Image from "next/image";
const page = () => {
    const source = "https://plus.unsplash.com/premium_photo-1750279792408-7843d9873390?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
  return (
    <div>
        <h1>Internal Image</h1>
        <Image src={Valid} alt="Nature image"/>
        <h1>External Image</h1>
        <Image width={400} height={400} src={source} alt="Nothing" />
    </div>
  )
}

export default page