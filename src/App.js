import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [data,setData] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [userAvailability, setUserAvailability] = useState({});
  const [display,setDisplay] = useState(false);
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((response) => setData(response));
  }, [])

    const searchUser = () => {
      console.log(inputValue)
      {data.map((item,i)=>{
        if(item.name == inputValue || item.username == inputValue || item.address.zipcode == inputValue || item.address.street == inputValue || item.address.suite == inputValue || item.address.city == inputValue || item.address.geo.lat == inputValue || item.address.geo.lng == inputValue){
          
          setUserAvailability({
            name: item.name,
            username: item.username,
            zipcode :item.address.zipcode,
            street : item.address.street,
            suite: item.address.suite,
            city: item.address.city
          })
          setDisplay(true);
        }
        else{
          // alert("invalid")
        }
      })}
    }
    console.log("userAvail==>",userAvailability)
  return (
    <div className="App">
      {/* <h1>Hello Project</h1> */}
      <input type="text" placeholder="Search by name, username, zipcode, address" style={{width: 300}} onChange={(e)=> setInputValue(e.target.value)}/>
      <button onClick={()=> searchUser()}>Search</button>
      {!display ? 
      <>
      {data.map((item,i)=>{
        return (
          <div key={i}>
          <ul style={{listStyle:"none"}}>
          <li>Name: {item.name}</li>
          <li>Username: {item.username}</li>
          </ul>
          </div>
          )
        })}
        </>
        :
        <>
            <h2>User Found</h2>
            <ul style={{listStyle:"none"}}>
            <li>{userAvailability.name}</li>
            <li>{userAvailability.username}</li>
            <li>{userAvailability.zipcode}</li>
            <li>{userAvailability.street}</li>
            <li>{userAvailability.suite}</li>
            <li>{userAvailability.city}</li>
            </ul>
          </>
        }
    </div>
  );
}

export default App;
