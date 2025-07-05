import { easeOut } from "motion";
import "./globals.css";
 
//import {motion} from "motion/react"; while using react not for nextjs
import * as motion from "motion/react-client" //for nextjs

//animation -->x,y,rotateX,rotateY,rotate,skewX,skewY,skew,scaleX,scaleY,scale

const home = () => {
    return (
      <div className="flex space-x-2">
        <motion.div className="box" initial={{x:0}} animate={{x: 200}} transition={{delay:3, duration:2, ease:'easeInOut'}}/> 
        {/* key frames  --> [start,end] */}
        <motion.div className="box" animate={{scale: [2,3,4,5,6,5,4,3,2,1]}} transition={{duration:4}} /> 
        <motion.div className="box" animate={{backgroundColor: ["yellow","red"]}} transition={{delay:2,duration:4,ease:"easeIn",repeat:Infinity}}/>
        {
          [...Array(3)].map((_,index) => (
            <motion.div className="w-8 h-8 bg-red-600 rounded-full" animate={{y:[0,-15,0]}} transition={{duration:5, repeat:Infinity, repeatDelay:index * 0.8}} />
          ))
        }
      </div>
    )
}

export default home;