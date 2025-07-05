"use client";
import "../globals.css";
import {motion, scale} from "motion/react";
import { useState } from "react";
const variant = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity:1, sclae: 1},
    exit: {opacity:0, scale:0.5}
}
const home = () => {
    const [isvisible,setvisible] = useState(true);
    return (
        <div>
            <motion.div className="box" 
            variants={variant}
            initial="hidden"
            animate={isvisible ? "visible" : "hidden"}
            exit="exit"
            transition={{duration: 4}}
            onClick={() => setvisible(!isvisible)}
            />
        </div>
    )
}

export default home;