import React from "react";

const ListMenu = props => {
  console.log(props.menus);
  return (
    <div>
      {props.menus.submenu ? (
        <div className="dropdown">
          <a className="lien dropbtn " href={props.menus.link}>
            {props.menus.text}
          </a>
          <ul className=" dropdown-content">
            {props.menus.submenu.map(el => (
              <li className="drop">{el}</li>
            ))}
          </ul>
        </div>
      ) : (
        <a className={ props.menus.active ? "lien blue" : "lien"} href={props.menus.link}>
          {props.menus.text}
        </a>
      )}
    </div>
  );
};

export default ListMenu;
