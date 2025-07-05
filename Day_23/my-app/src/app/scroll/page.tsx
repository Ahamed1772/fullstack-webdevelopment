import * as motion from "motion/react-client";
const home = () => {
    return (
            <motion.div 
            className=" bg-red-500 absolute top-[400rem] rounded-lg"
            initial={{ scale: 0.5, opacity:0}} 
            whileInView={{
                scale:1.1,
                opacity: 1,
                y:-200
            }}
            transition={{ duration: 1}}
            >
                 <h1 className="text-green-700 text-center p-16">Hello world</h1> 
            </motion.div>
    )
}

export default home