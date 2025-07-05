const product = async({params}: {params: {slug: string[]}}) => {
    const {slug}  = await params;
    return (
        <div>
            <ul>
                {
                    slug.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default product;