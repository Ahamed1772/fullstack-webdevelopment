const page = async({params}: {params: {user: string}}) => {
    const {user} = await params;
    console.log(user);
  return (
    <div>
        <h1>Info about {user}</h1>
    </div>
  )
}

export default page