import * as React from 'react';
import { useState } from 'react';
import MenuItems from './MenuItems';

interface IDropdownmenuProps {
  submenus:[],
  depthLevel:number,
  dropdown:Boolean
}

const DropdownPage: React.FunctionComponent<IDropdownmenuProps> = ({ submenus,depthLevel,dropdown }:any) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  return(<>
  {/* <ul
      className={`dropdown ${dropdownClass} ${ dropdown ? 'show' : ''
      }`}
    >
      {submenus.map((submenu: any, index: any) => (
        <MenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul> */}
  </>) ;
};

export default DropdownPage;
