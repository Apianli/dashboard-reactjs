import React, { useState } from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt, UilBars} from "@iconscout/react-unicons";
import { motion } from 'framer-motion';



const Sidebar = () => {

    const [selected, setSelected] = useState(0)
    const [expanded, setExpanded] = useState(true)

    const sidebarVariants = {
        true: {
           Left: '0' 
        },
        false: {
            Left: '-60%'
        }
    }

  return (
    <>
        <div onClick={() => setExpanded(!expanded)} className="bars" style={expanded ? {Left : '60%'} : {Left:'5%'}}>
                <UilBars />
        </div>
        <motion.div 
            className='Sidebar'
            variants={sidebarVariants}
            animate={window.innerWidth <= 768 ? `${expanded}` : ""}
            >
        <div className='Logo'>
            <img src={Logo} alt="" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>
        <div className='menu'>
           {SidebarData.map((item, index) => {
               return (
                   <div 
                    className={selected === index ? "menuItem active" : "menuItem" }
                    key={index}
                    onClick={() => setSelected(index)}
                    >
                       <item.icon/>
                       <span>
                           {item.heading}
                       </span>
                   </div>
               )
           })}
           <div className='menuItem'>
               <UilSignOutAlt />
           </div>
        </div>
    </motion.div>
    </>
  );
};

export default Sidebar
