import { movies } from "../db";

//get a  single data
export async function GET(_req: Request, {params}: {params: {id: string}}){
    const {id} = await params;
    const movie = movies.find((m) => m.id === Number(id));  //Number(id) or +id both are same
    return movie ? new Response(JSON.stringify(movie))
    :new Response("Movie not found", {status: 404})
}

//updata a single data
export async function PATCH(req: Request, {params}: {params: {id: string}}){
    const {id} = await params;
    const movie = movies.find((m) => m.id === +id);
    if(!movie){
        return new Response(JSON.stringify("movie not found"),{status:404});
    }

    try {
        const updatedMovie = await req.json();
        const index = movies.findIndex((m) => m.id === +id);
        movies[index] = {...movie,...updatedMovie};
        return new Response(JSON.stringify(movies[index]),{status: 200});
    } catch (error) {
        return new Response(JSON.stringify({error: "Failed to parse json"}),{status: 400});
    }
}


//delete a data 
export async function DELETE(req: Request,{params}: {params: {id: string}}){
    const {id} = await params;
    const movie = movies.find((m) => m.id === + id)
    const index = movies.findIndex((m) => m.id === +id);
    if (index === -1){
        return new Response(JSON.stringify({error: "movie not found"}),{status: 404})
    }
    movies.splice(index,1);
    return new Response(JSON.stringify({message: "movie successfully deleted"}),{status: 200});
}
