import './App.css';
import { useEffect, useState } from 'react';
import userAvatar from '../src/assets/user-avatar.png';
import socialIcons from '../src/assets/login-icons.PNG'
import listIcon from '../src/assets/list-icon.PNG';

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
      })}
    }
    console.log("userAvail==>",userAvailability)
  return (
    <div className="App">
      <div id="header"></div>
      <br />
      <div id="all">
        <div id="one">
          <span>All</span>
        </div>
        <div id="two">
          <span>People</span>
        </div>
        <div id="three">
          <span>Startups</span>
        </div>
      </div>
        <h2>Sort by</h2>

        <div id="top-third-div">
          <div id="relevance">
            <span>Relevance</span>
          </div>
          <div id="popularity">
            <span>Popularity</span>
          </div>
          <div id="newness">
            <span>Newness</span>
          </div>
          <div id="random">
            <span>Random</span>
          </div>
          <div id="name">
            <span>Name</span>
          </div>
      </div>
      <br />
      <input type="text" placeholder="Search by name, username, zipcode, address" style={{width: 300}} onChange={(e)=> setInputValue(e.target.value)}/>
      <button onClick={()=> searchUser()}>Search</button>
      <br/><br/>
      {!display ? 
      <>
      
      {data.map((item,i)=>{
        return (
          <div key={i} id="main-div">
          <ul id="user-info">
          <li id="img-list"><img src={userAvatar} id="user-avatar"/></li>
          <div id="name-email">
          <li id="username"> {item.username}</li>
          <li id="email">{item.email}</li>
          <li id="company">Company</li>
          </div>
          </ul>
          </div>
          )
        })}
        </>
        :
        <div id="user-found">
            <h2>User Found</h2>
            <img src={userAvatar} id="user-avatar"/>
            <ul id="user-availability">
            <li><b>Name: </b> {userAvailability.name}</li>
            <li><b>Username: </b> {userAvailability.username}</li>
            <li><b>Zipcode: </b> {userAvailability.zipcode}</li>
            <li><b>Street: </b> {userAvailability.street}</li>
            <li><b>Suite: </b> {userAvailability.suite}</li>
            <li><b>City: </b> {userAvailability.city}</li>
            </ul>
          </div>
        }
        <div id="footer">
          <h2 id="logo-text">Logo</h2>
          <img src={socialIcons} id="social-icons"/>
          <ul id="footer-list">
            <li><img src={listIcon} style={{height:12}}/> About Us</li>
            <li id="blog"><img src={listIcon} style={{height:12}}/> Blog</li>
            <li id="contact-us"><img src={listIcon} style={{height:12}}/> Contact Us</li>
            <div id="last-list">
              <li><img src={listIcon} style={{height:12}}/> Members</li>
              <li id="more"><img src={listIcon} style={{height:12}}/> More</li>
            </div>
          </ul>
        </div>
    </div>
  );
}

export default App;
