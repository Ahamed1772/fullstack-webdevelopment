import Link from "next/link";
const home = () => {
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
    const Totalmovie = movies.length;
    const Totalrating = (
        movies.reduce((sum, movie) => sum + movie.rating,0) / Totalmovie
    ).toFixed(1);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Total Movies:{Totalmovie}</p>
            <p>Total Rating:{Totalrating}</p>
            <ul>
                {
                    movies.map((movie) => (
                        <li key={movie.id}>
                        <Link href={`/home/movies/${movie.id}`}>{movie.title}</Link>
                        <p>{movie.rating}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default home;