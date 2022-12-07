import React, { useEffect, useRef } from "react";
import Style from "./AppHeeaderStyle";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

let useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

function Sidemenu({ open, setOpen, setDarkMode, darkMode }) {
  let domNode = useClickOutside(() => {
    setOpen(false);
  });
  return (
    <Style.SideMenu ref={domNode}>
      {/* ---------- BackIcon ---------- */}
      <Style.BackIconMenuWraper
        menuDir="col"
        onClick={() => {
          setOpen(false);
        }}
      >
        <AiOutlineMenuUnfold />
        <Style.MenuItem menuDir="col"> عودة</Style.MenuItem>
      </Style.BackIconMenuWraper>

      {/* <Style.Logo>logo</Style.Logo> */}
      <Style.Menu menuDir="col">
        <Style.MenuItemWraper>
          <AiOutlineHome />
          <Style.MenuItem menuDir="col">الرئسية</Style.MenuItem>
        </Style.MenuItemWraper>

        <Style.MenuItemWraper>
          <MdOutlineLocalOffer />
          <Style.MenuItem menuDir="col">العروض</Style.MenuItem>
        </Style.MenuItemWraper>

        <Style.MenuItemWraper>
          <FiPhoneCall />
          <Style.MenuItem menuDir="col">تواصل</Style.MenuItem>
        </Style.MenuItemWraper>
      </Style.Menu>
      <Style.Item menuDir="col" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <MdModeNight /> : <MdLightMode />}
        {darkMode ? (
          <Style.MenuItem menuDir="col">النهاري</Style.MenuItem>
        ) : (
          <Style.MenuItem menuDir="col">اليلي</Style.MenuItem>
        )}
      </Style.Item>
    </Style.SideMenu>
  );
}

export default Sidemenu;
