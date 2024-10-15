import { ReactNode, useState } from "react";
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import "./Aside.scss"

type MenuData = {
    linkName: string;
    link: string;
    icon: ReactNode;
}

type Props = {
    menuData: MenuData[];
}

export const AsideMenu = ({ menuData }: Props) => {

    const [showMenu, setShowmenu] = useState(false)


    const handleMenu = () => {

      if(showMenu === false) {
        setShowmenu(true)
      }   else ( setShowmenu(false))
    }

    return (
        <div className="aside-menu">
            <div className={`${showMenu ? 'develop' : 'logo'}`}>
                Logo
            <div className="topButton" >
            <p>Menu</p>
            <FaChevronDown onClick={handleMenu}  className={`${showMenu ? 'invert' : 'normal'}`}/>
            </div>
                <ul className="menu-items" >
                {menuData.map((item, index) => (
                    <li key={index} className="menu-item">
                        <Link to={item.link}>
                            {item.icon}
                            <span>{item.linkName}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
                 
            </div>
      

    );
};
