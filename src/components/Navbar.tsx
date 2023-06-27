import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

export function Navbar() {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    return (
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2" onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
            <img src={logo} alt="logo" className="h-12 object-contain cursor-pointer" />
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => {
              return <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium`}>
                <a href={`#${link.id}`}
                  onClick={() => setActive(link.title)}
                >{link.title}</a>
              </li>
            })}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => {
                  return <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}>
                    <a href={`#${link.id}`}
                      onClick={() => {setActive(link.title); setToggle(!toggle)}}
                    >{link.title}</a>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}