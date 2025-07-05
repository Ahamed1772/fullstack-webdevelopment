'use client'
import { useMotionValue,useTransform,motion } from "motion/react";
const home = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0);
    const backgroundColor = useTransform(x,[-100,100],["#ff0000","#00ff00"])
    return (
        <motion.div 
         drag 
         className="bg-red-600 text-5xl"
         style={{ x, y, backgroundColor}} 
        />
    )
}

export default home;