import * as motion from "motion/react-client";
import "../globals.css";
const home = () => {
    return (
        <div>
            {/* <motion.div className="w-40 h-40 bg-amber-600 rounded-lg" whileHover={{scale: 1.8,rotate:10}} /> */}
            {/* <motion.div className="w-40 h-40 bg-green-600" whileTap={{scale:2.0,backgroundColor:'yellow'}} /> */}
            {/* <motion.div className="w-40 h-40 bg-yellow-600" drag whileDrag={{backgroundColor:'pink',scale:1.5}} /> */}
            {/* <motion.div className="box" whileHover={{scale:1.2,rotate:10}} transition={{type:'spring',stiffness:1000}}/> */}
            <motion.div className="box"
            whileDrag={{backgroundColor:'pink',scale:1.1}}
            drag
            dragConstraints={{top:-50,bottom:50,left:-50,right:50}}
            dragElastic={0.2}
            />
        </div>
    )
}

export default home;