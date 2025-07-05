//metadata

export const metadata = {
    title: "Website",
    description: "This is made by a developer"
}

//font
import { Bebas_Neue } from "next/font/google";
const bebasFont = Bebas_Neue({
    subsets: ['latin'],
    weight: "400"
});

//custom css files
import styles from "./page.module.css";
const page = () => {
  return (
    <div>
        <h1 className={styles.title}>Hello world</h1>
        <p className={bebasFont.className}>Bebas font</p>
    </div>
  )
}

export default page