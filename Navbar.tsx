import * as React from 'react';
import { menuItems } from '../menuItems';
import MenuitemsPage from './MenuItems';


interface INavbarProps {
  items: Item;
}
interface Item {
  title: string;
  url: string;
  submenu:[]
}
const Navbarpage: React.FunctionComponent<INavbarProps> = ({items}) => {
   
 
  return (
    <>

      <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <>
            <MenuitemsPage
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
            </>
          );
        })}
      </ul>
    </nav> 
    </>

  );
}

export default Navbarpage;