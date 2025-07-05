import { NextRequest } from "next/server";
import { movies } from "./db";


//Getting all data
// export async function GET(){
//     return Response.json(movies)
// }

//posting a data
// export async function POST(req: Request) {
//     let movie = await req.json();
//     console.log(movie);
//     const newMovie = {...movie};
//     movies.push(newMovie);
//     return new Response(JSON.stringify(newMovie));
// }

//filtering
export async function GET(req: NextRequest){
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");

    const filterMovies = query ? movies.filter((m) => m.name.toLowerCase().includes(query)) : movies;
    return new Response(JSON.stringify(filterMovies));
}