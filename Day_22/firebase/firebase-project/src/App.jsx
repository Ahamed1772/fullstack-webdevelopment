import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db,auth,storage } from "./config/firebase";
import { getDocs,collection,addDoc,doc,deleteDoc,updateDoc } from "firebase/firestore";
import { ref,uploadBytes } from "firebase/storage";
const app = () => {
    const [movieList,setMovieList] = useState([]);
    const movieCollectionRef = collection(db,"movies");

    //addmovies
    const [newMovieTitle,setnewMovieTitle] = useState("");
    const [newMovieDate,setnewMovieDate] = useState("");
    const [isNewMovieOscar,setMovieOscar] = useState(false);

    //storage state
    const [initialState,setState] = useState(null);
    //update movies
    const [updateItem,setNewItem] = useState("");
    //get data
     const getMovieList = async() => {
        try {
          const data = await getDocs(movieCollectionRef);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          console.log(filteredData);
          console.log(data);
          setMovieList(filteredData);
        } catch (error) {
          console.log(error)
        }
      }

    useEffect(() => {
      getMovieList();
    },[])
    //create or add
    const createMovie = async() => {
      try {
        await addDoc(movieCollectionRef,{
          title: newMovieTitle,
          date: newMovieDate,
          receivedOscar: isNewMovieOscar,
          userId:auth?.currentUser?.uid,
        });
        getMovieList()
      } catch (error) {
        console.error(error)
      }
    }

    //delete
    const deleteMovie = async(id) => {
      const movieDoc = doc(db,"movies",id);
      await deleteDoc(movieDoc);
      getMovieList();
    }

    //update
    const updateData = async(id) => {
      const movieDoc = doc(db,"movies",id);
      await updateDoc(movieDoc,{title: updateItem});
      getMovieList();
    }

    //uplaod file
    const uploadFile = async() => {
      if(!initialState) return;
      const filesFolderRef = ref(storage,`projectFiles/${initialState.name}`);
      try {
        await uploadBytes(filesFolderRef,initialState);
      } catch (error) {
        console.error(error)
      }
    }
    return (
      <div>
        <Auth />
        <div>
          <input type="text" placeholder="Movie Title" onChange={(e) => setnewMovieTitle(e.target.value)}/>
          <input type="number" placeholder="Release Date" onChange={(e) => setnewMovieDate(e.target.value)} />
          <label htmlFor="checkbox">Received an Oscar</label>
          <input type="checkbox" id="checkbox" checked={isNewMovieOscar} onChange={(e) => setMovieOscar(e.target.checked)}/>
          <button onClick={createMovie}>submit</button>
        </div>
        {
          movieList.map((movie) => (
            <div key={movie.id}>
              <h1 style={{color: movie.receivedOscar? "green": "red"}}>{movie.title}</h1>
              <h1>ReleaseDate: {movie.date}</h1>
              <button onClick={() => deleteMovie(movie.id)}>Delete</button>
              <input type="text" onChange={(e) => setNewItem(e.target.value) } />
              <button onClick={() => updateData(movie.id)}>update</button>
            </div>
          ))
        }
        <div>
          <input type="file" onChange={(e) => setState(e.target.files[0])}  />
          <button onClick={uploadFile}>upload</button>
        </div>
      </div>
    )
}

export default app;


