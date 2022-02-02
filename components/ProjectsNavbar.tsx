import React, { FunctionComponent } from 'react';
import { Category } from '../type';

const NavItem:FunctionComponent<{value:Category | 'all', handlerFilterCategory:Function, active:string}> = ({value,handlerFilterCategory, active}) => {
  let className="font-semibold capitalize cursor-pointer hover:text-green";
  if(active === value) className += " text-green";
  return (
    
  <li className={className} onClick={()=> handlerFilterCategory(value)}>
    {value}
  </li>
  );
};

const ProjectsNavbar: FunctionComponent<{handlerFilterCategory:Function, active:string}> = (props) => {
  return (
  <div className="flex px-3 py-2 space-x-2 overflow-x-auto list-none">
    <NavItem value="all" {...props}/>
    <NavItem value="sanity" {...props}/>
    <NavItem value="firebase" {...props}/>
    <NavItem value="tailwind" {...props}/>
    <NavItem value="nextjs" {...props}/>
  </div>
  );
};

export default ProjectsNavbar;
