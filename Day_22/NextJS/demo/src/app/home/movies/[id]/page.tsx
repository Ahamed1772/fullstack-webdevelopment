"use client";
import { useRouter } from "next/navigation";
interface MovieProps {
    params: {
        id: string
    }
}
const MovieDetails = ({params} : MovieProps) => {
    const router = useRouter();
    const back = () => {
        router.back();
    }
     const movies = [
        {
            id:"1",
            title: "Interstellar",
            rating: 9.0
        },{
            id:"2",
            title: "Batman",
            rating: 9.7
        },{
            id:"3",
            title: "Prestige",
            rating: 9.3
        },{
            id:"4",
            title: "Momento",
            rating: 8.9
        }
    ]
    const movie = movies.find((m) => m.id == params.id)
    return (
        <div>
            <h1>{movie?.title}</h1>
            <h1>{movie?.rating}</h1>
            <button onClick={() => back()}>back</button>
        </div>
    )
}

export default MovieDetails;