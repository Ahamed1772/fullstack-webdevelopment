// import { createContext, useEffect, useReducer, useRef, useState } from "react"

// const ValidPassword = () => <h1>valid Password</h1>
// const InValidPassword  = () => <h1>Invalid Password</h1>

// // const Password = ({isValid}) => {
// //     return (isValid) ? <ValidPassword /> : <InValidPassword />
// // }

// // or 

// const Password = (props) => {
//     return (props.isValid) ? <ValidPassword /> : <InValidPassword />;
// }

// const Cart = () => {
//     const items = ["iphone","macbook","playstation","xbox"];
//     return (
//       <div>
//         {
//           (items.length > 0 && <h1>You have {items.length} in your cart</h1>)
//         }
//         <ul>
//           <h4>Items</h4>
//           {
//             items.map(items => (
//               <li>{items}</li>
//             ))
//           }
//         </ul>
//       </div>
//     )
// }
// import Weather from "../components/Weather"; 
// import UserStatus from "../components/UserStatus";
// import Greet from "../components/Greet";

// import "./index.css";
// import { FaCartArrowDown } from "react-icons/fa"
// const App = () => {
//   // const styles = {color: "pink", backgroundColor: "purple"}
//   return <div>
//     {/* <h1 style={{color: "red"}}>Hello World</h1> */}
//     {/* <h2 style={styles}>Hello World</h2> */}
//     {/* < FaCartArrowDown size={100} color="green"/> */}
//   </div>
// }

// export default App;

// const Button  = () => {
//     return <button onClick={() => alert("hello")}>Click</button>
// }

// const Paragraph = () => {
//     return <p onCopy={() => alert(" don't copy my content ")}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
//     Tempore laborum fugiat voluptatum animi distinctio alias esse pariatur odit nulla soluta.</p>
// }

// const Move = () => {
//     return <p onMouseOver={() => alert("mouse over")}>Lorem ipsum dolor sit amet 
//       consectetur, adipisicing elit. Blanditiis quisquam cupiditate non ab tenetur. 
//       Mollitia odio atque soluta in laudantium.</p>
// }

// const App = () => {
//     return <div>
//       <Button />
//       <Paragraph />
//       <Move />
//     </div>
// }

// export default App;



// // const App = () => {
// //     const [count,setCount] = useState(0);
// //     const Increment = () => {
// //         setCount(count + 1);
// //     }
// //     const Decrement = () => {
// //         setCount(count - 1);
// //     }
// //     return <div>
// //       <h1>{count}</h1>
// //       <button onClick={Increment}>+</button>
// //       <button onClick={Decrement}>-</button>
// //     </div>
// // }

// // export default App;


// const App = () => {
//     const [data,setData] = useState([
//       {id: 1, name:"spider-man", rating: 8.8},
//       {id: 2, name:"batman-man", rating: 9.5},
//       {id: 2, name:"inception", rating: 9.8},
//     ]);
//     const change = () => {
//       setData(data.map( (movie) => (movie.id === 1 ? {...data,title:"john wick 4"} : movie)));
//     }
//     return <div>
//       {
//         data.map(item => (
//           <ul >
//             <li key={Math.random()}>{item.name}</li>
//           </ul>
//         ))
//       }
//       <button onClick={change}>click</button>
//     </div>
// }

// export default App;

// import Addition from "../components/Addition";
// const App = () => {
//   const [count,setCount] = useState(0);
//   return <div>
//     <Addition count={count} handlechange={() => setCount(count + 1)} />
//   </div>
// }

// export default App;

// const App = () => {
//     const [count,setCount] = useState(() => {
//         const initialValue = 10;
//         return initialValue;
//     })
//     const change = () => {
//       // setCount(count + 1)
//       setCount((prevValue) => prevValue + 1)
//     }
//     return <div>
//       <h1>{count}</h1>
//       <button onClick={change}>click</button>
//     </div>
// }

// export default App;


// const App = () => {
//     const [name,setname] =  useState("");
//     const [item,setitem] = useState([]);
//     const change = (event) => {
//         const value = event.target.value;
//         setname(value);
//     }
//     const avaialble = () => {
//         setitem((prevValue) => {
//           return [...prevValue,name]
//         });
//         setname("");
//     }
//     return <div>
//       <input onChange={change} type="text" name="text" id="text" value={name} />
//       <ol>
//         {item.map(items => <li key={Math.random()}>{items}</li>)}
//       </ol>
//       <button onClick={avaialble}>click</button>
//     </div>
// }

// export default App;
// import TodoList from "../components/TodoList";
// import Counter from "../components/Counter";
// import Profile from "../components/Profile";
// const App = () => {
//   return <div>
//     <Counter />
//     <TodoList />
//     <Profile />
//   </div>
// }

// export default App;

// import CopyText from "../components/CopyText";
// const App = () => {
//     return <div>
//       <CopyText />
//     </div>
// }
// import ColorSwitch from "../components/ColorSwitch";
// const App = () => {
//     return <div>
//       <ColorSwitch />
//     </div>
// }

// const App = () => {

//     const [value,setvalue] = useState(0)
//     useEffect(() => {
//         console.log("call useeffect");
//         document.title = `Increment ${value}`
//     },[])
//     return <div>
//       <p>{value}</p>
//       <button onClick={() => {setvalue(value + 1)}}>click</button>
//     </div>
// }


// const App = () => {
//     const [data,setData] = useState([]);
//     useEffect(() => {
//       async function getData() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const result = await response.json();
//         if (result) setData(result);
//       }
//       getData();
//     },[])

//     return <div>
//       <ul>
//         {data.map(todo => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
// }

// import BasicEffect from "../components/BasicEffect";
// import CounterEffect from "../components/CounterEffect";
// import FetchDataEffect from "../components/FetchDataEffect";

// const App = () => {
//     return <div>
//         <CounterEffect />
//         <BasicEffect />
//         <FetchDataEffect />
//     </div>
// }

// import ComponentA from "../components/ComponentA";
// export const Data = createContext();
// export const Data1 = createContext();
// const App = () => {
//     const name = "ahamed";
//     const age = 23;
//     return <div >
//       <Data.Provider value={name}>
//         <Data1.Provider value={age}>
//           <ComponentA />
//         </Data1.Provider>
//       </Data.Provider>
//     </div>
// }
// import UserContext from "../components/UserContext";
// import UpdateUser from "../components/UpdateUser";

// const App = () => {
//     return <div>
//       <UserContext />
//       <UpdateUser />
//     </div>
// }


//useReducer 
// const reducer = (state,action) => {
//     switch (action.type) {
//       case "increment":
//         return {...state, count: state.count + 1};
//       case "decrement":
//         return { ...state, count: state.count - 1}
//       case "reset":
//         return ({...state, count: 0});
//       default:
//         return state;
//     }
// }

// const initialState = { count: 0};
// const App = () => {
//     const [state,dispatch] = useReducer(reducer,initialState);
//     return <div>
//       <h1>{state.count}</h1>
//       <button onChange={() => dispatch({ type: "increment"})}>+</button>
//       <button onChange={() => dispatch({ type: "decrement"})}>-</button>
//       <button onChange={() => dispatch({ type: "reset" })}>reset</button>
//     </div>
// }


//useRef 

// const App = () => {
//     const inputValue = useRef(null);
//     const focuselement = () => {
//         inputValue.current.focus();
//         inputValue.current.value = "ibrahim";
//     }
//     return <div>
//       <input type="text" name="text" id="text" ref={inputValue} />
//       <button onClick={() => focuselement()}>click</button>
//     </div>
// }
// import FocusInput from "../components/FocusInput";
// const App = () => {
//     return <div>
//       <FocusInput />
//     </div>
// }


//custom hooks
// import useFetch from "../useFetch";
// const App = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
//     return <div>
//       { data && data.map((item) => {
//           return <h1 key={item.id}>{item.title}</h1>
//         })
//       }
//     </div>
// }


//unique Id 
// import UniqueId from "../components/UniqueId";

// const App = () => {
//     return <div>
//       <UniqueId />
//       <UniqueId />
//     </div>
// }

const Home = () => {
    return <div>
        <h1>Hello world</h1>
    </div>
}

const Contact = () => {
    return <div>
        <h1>Contact</h1>
    </div>
}

import {createBrowserRouter,RouterProvider} from "react-router-dom"
const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"/contact",
            element: <Contact></Contact>
        }
    ])
    return <div>
        <RouterProvider router={router} />
    </div>
}

export default App;