import React from 'react';
import {FaUserPlus, FaUserEdit,FaTasks, FaPortrait, FaSistrix, FaBell, FaUsers} from 'react-icons/fa';


const Dashboard = () => {
  return (
    <div className='body'>
      <section className='menu'>
        <div className='logo'>
        <img src="./images/CBE logo.png" alt="logo" />
        <h2>Welcome</h2>
        </div>
        <div className='items'>
            <li><FaUserPlus className='addusericon'/><a href='#'>Add User</a></li>
            <li><FaUserEdit className='editusericon'/><a href='#'>Edit User</a></li>
            <li><FaTasks className='reportsicon'/><a href='#'>Reports</a></li>
            <li><FaPortrait className='profileicon'/><a href='#'>Profile</a></li> 


        </div>
      </section>


      <section className='interface'>
        <div className='navigation'>
            <div className='n1'>
              <div className='search'>
                <FaSistrix classname='searchicon' />
                <input type='text' placeholder='search'/>

              </div>
            </div>
            <div className='profile'>
               <FaBell className='bellicon'/>
               </div>
        </div>
       
        < h3 className='dash'>DashBoard</h3>
        <div className='values'>
          <div className='val-box'>
            <FaUsers className='totalusers'/>
            <div>
              <h3>200</h3>
              <span>Total Users</span>
            </div>
          </div>

        </div>
      
      </section>
    </div>
    
  );
}

export default Dashboard;
