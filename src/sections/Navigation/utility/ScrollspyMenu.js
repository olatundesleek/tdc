import React from "react";
import { Link as OnepageLink } from "react-scroll";
import { BiWallet } from "react-icons/bi";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

const ScrollspyMenu = ({ menuItems, load, logout, connection, ...props }) => {
  const addAllClasses = [""];
  const loadWallet = load;
  const myConnection = connection;
  if (props.className) {
    addAllClasses.push(props.className);
  }
  return (
    <ul className={addAllClasses.join(" ")}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
        >
    
        
           
             
             
                  <Link href={menu.path}>
                    <a>{menu.name}</a>
                  </Link>
             
             
    
   
          {menu.subItems !== undefined && (
            <ul key={index} className="dropdown">
              {menu.subItems.map((subItem, i) => (
                <li key={i}>
                  <Link href={subItem.path}>
                    <a>{subItem.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      {/* <li>
        <Box width={"100%"} textAlign="center" display={"flex"} justifyContent="center">
        {myConnection == true ? (
          <button className="nav__button" onClick={logout}>
            Logout{" "}
          </button>
        ) : (
          <button className="nav__button" onClick={loadWallet}>
            <BiWallet className="wallet" /> Connect Wallet{" "}
          </button>
        )}</Box>
      </li> */}
    </ul>
  );
};

export default ScrollspyMenu;
