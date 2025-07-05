import * as motion from "motion/react-client";


const parentVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1,transition: { staggerChildren: 1}}
}

const childVariants = {
    hidden: {opacity: 0, y:20},
    visible: {opacity: 1, y:0}
}


const home = () => {
    return (
        <motion.div variants={parentVariants} initial='hidden' animate='visible' className="flex space-x-4">
            {
                [...Array(5)].map((_, index) => (
                    <motion.div className="w-15 h-15 bg-green-600 rounded-full" variants={childVariants}  key={index}/>
                ))
            }
        </motion.div>
    )
}

export default home;