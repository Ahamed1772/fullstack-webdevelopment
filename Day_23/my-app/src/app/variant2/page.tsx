import * as motion from "motion/react-client";
import "../globals.css"
const variant = {
    initial: {scale:1,rotate:0,skew:0},
    hover: {scale:1.2,rotate:15,skew:"10deg",transition:{duration: 0.3}},
    click: {sclae:0.9,rotate:-15,transition:{duration: 0.3}}
}

const home = () => {
    return (
        <div>
            <motion.div className="w-40 h-40 bg-red-700 rounded-lg" 
            variants={variant}
            initial="initial"
            whileHover="hover"
            whileTap="click"
            />
        </div>
    )
}

export default home;