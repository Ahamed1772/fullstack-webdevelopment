const page = async ({params}: {params: {all: string[]}}) => { 
    const {all} = await params;
    console.log(all);
  return (
    <div>
        <h1>{all}</h1>
        <ul>
            {
                all.map((point) => (
                    <li key={point}>{point}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default page