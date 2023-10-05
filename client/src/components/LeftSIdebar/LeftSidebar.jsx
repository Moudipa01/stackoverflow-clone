import React from 'react'
import './LeftSidebar.css'
import PublicIcon from '@mui/icons-material/Public';
import {NavLink} from 'react-router-dom'
const LeftSidebar = () => {
  return (
    <div>
      <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className="side-nav-links" activeClass='active'>
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
              <div><p>PUBLIC</p></div>
              <NavLink to='/Questions' className="side-nav-links" activeClass='active' style={{paddingLeft:"40px"}}>
                <PublicIcon style={{color:"black"}}/>
                <p style={{paddingLeft:"10px"}}>Question</p>
              </NavLink>
              <NavLink to='/Tags' className='side-nav-links' activeClass='active' style={{paddingLeft:"40px"}}>
                <p>Tags</p>
              </NavLink>
              <NavLink to='/Tags' className='side-nav-links' activeClass='active' style={{paddingLeft:"40px"}}>
                <p>Users</p>
              </NavLink>
            </div>
        </nav>

      </div>
    </div>
  )
}

export default LeftSidebar
