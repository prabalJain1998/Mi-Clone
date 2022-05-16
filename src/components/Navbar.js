import React from 'react'
import "../styles/nav.css"
import logo from "../data/data.json"


const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19.475 20.15 13.225 13.9Q12.475 14.525 11.5 14.875Q10.525 15.225 9.55 15.225Q7.125 15.225 5.463 13.562Q3.8 11.9 3.8 9.5Q3.8 7.1 5.463 5.437Q7.125 3.775 9.525 3.775Q11.925 3.775 13.6 5.437Q15.275 7.1 15.275 9.5Q15.275 10.55 14.9 11.525Q14.525 12.5 13.925 13.175L20.2 19.45ZM9.55 14.225Q11.525 14.225 12.9 12.863Q14.275 11.5 14.275 9.5Q14.275 7.5 12.9 6.137Q11.525 4.775 9.55 4.775Q7.55 4.775 6.175 6.137Q4.8 7.5 4.8 9.5Q4.8 11.5 6.175 12.863Q7.55 14.225 9.55 14.225Z"/></svg>
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
          <a href = "/"><img id = "logoImage" src = {logo} alt = "Not"/></a>
          </div>

          <a className="navlinks" href = "/redmiphones">redmi Phones</a>
          <a className="navlinks" href = "/miphones">Mi Phones</a>
          <a className="navlinks" href = "/tv">TV</a>
          <a className="navlinks" href = "/laptops">Laptops</a>
          <a className="navlinks" href = "/home">Home</a>
          <a className="navlinks" href = "/lifestyle">Fitness and Lifestyle</a>
          <a className="navlinks" href = "/audio">Audio</a>
          <a className="navlinks" href = "/accessories">Accessories</a>


          <div className = "searchBox">
              <input type = "text" name = "Search" placeholder="Search Products"/>
              {searchIcon}
          </div>
        </div>
  )
}

export default Navbar