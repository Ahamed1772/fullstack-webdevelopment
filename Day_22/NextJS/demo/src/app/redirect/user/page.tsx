import { redirect } from "next/navigation"
const page = () => {
    redirect('/redirect/about');
  return (
    <div>
        <h1>User</h1>
    </div>
  )
}

export default page