
const Greet = ({timeOfDay}) => {
    return (timeOfDay > 12) ? <h1>Good Morning!</h1> : <h1>Good Afternoon!</h1>
}

export default Greet;