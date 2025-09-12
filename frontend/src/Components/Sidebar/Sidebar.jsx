import React from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { LuUsersRound } from "react-icons/lu";
import { IoListOutline } from "react-icons/io5";
import { AiOutlinePercentage } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h1 className='sidebar-title'>ProAdmin</h1>

        <ul className='sidebar-links'>
            <li className='active'>
                <Link to="/products"><FiHome className='icon'/>Dashboard</Link>
            </li>
            <li><Link to="/products"><AiOutlineProduct className='icon'/>Products</Link></li>
            <li><Link to="/comments"><GoComment className='icon'/>Comments</Link></li>
            <li><Link to="/users"><LuUsersRound className='icon'/>Users</Link></li>
            <li><Link to="/orders"><IoListOutline className='icon'/>Orders</Link></li>
            <li><Link to="/offs"><AiOutlinePercentage className='icon'/>Offs</Link></li>
        </ul>
      
    </div>
  )
}

export default Sidebar
