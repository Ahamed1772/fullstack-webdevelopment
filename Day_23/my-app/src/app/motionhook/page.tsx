'use client'
import {motion, useMotionValue, useMotionValueEvent} from "motion/react";
// const home = () => {
//     const x = useMotionValue(100);
//     return (
//         <motion.div className="box" style={{ x }} />
//     )
// }

const home = () => {
    const x = useMotionValue(100);
    
    useMotionValueEvent(x,'animationStart',() => {
        console.log("Animation started on x")
    });
    
    useMotionValueEvent(x,'change',(latest) => {
        console.log(`x changed to ${latest}`)
    });

    return (
        <motion.div drag className="box" style={{ x }}  />
    )
}

export default home;