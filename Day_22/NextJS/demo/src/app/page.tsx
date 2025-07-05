// Link
// import Link from "next/link"
// const Home = () => {
//   return (
//     <div>
//       <Link href='/about' >About</Link>
//       <Link href='/contact' >contact</Link>
//     </div>
//   )
// }
// export default Home
//--------------------------------------------------------------------------------->
//use Router
"use client";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();
    console.log(router);
    const navigate = (page: string) => {
        router.push(page);
    }
    const refresh = () => {
        router.refresh();
    }
    return(
      <div>
        <h1>Home</h1>
        <button onClick={() => navigate('about')}>about</button>
        <button onClick={() => refresh()}>refresh</button>
      </div>
    )
}

export default Home;