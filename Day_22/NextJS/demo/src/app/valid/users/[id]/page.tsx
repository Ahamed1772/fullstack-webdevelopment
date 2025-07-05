interface identity {
    params : {
        id: string
    }
}
//const users = ({params}: {params: {id: string}})
const users = ({params}: identity) => {
    const {id} = params;
    return (
        <div>
            <h1>User profile {id}</h1>
        </div>
    )
}

export default users;