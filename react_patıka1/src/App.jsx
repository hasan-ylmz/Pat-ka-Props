import Users from "./Components/Users"
const friends = [
  {
    id:3213123,
    name:"Ahmet",
    surname:"Yılmaz",
  },
  {
    id:3413424,
    name:"Canan",
    surname:"Yalnız",
  },
  {
    id:4515143,
    name:"Cihan",
    surname:"Yılmaz",
  },
  {
    id:4616246,
    name:"Cemre",
    surname:"Demir",
  },
]

function App() {
 
  return (
    <>
           <Users 
           id={12313123} 
           name="Burak" 
           surname="Yılmaz" 
           isLogged={true} 
           friends = {friends}
           address={{
              city:"Sakarya",
              no:54001,
           }}
          />
           
    </>
  )
}

export default App
