import { redirect } from "next/navigation"
const page = () => {
    redirect('/page/new-page')
  return (
    <div>
        <h1>Old Page</h1>
    </div>
  )
}

export default page