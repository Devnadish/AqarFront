import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import Style from "./AppHeeaderStyle";
// import { AiOutlineMenuFold } from "react-icons/ai";
// import { AiOutlineMenuUnfold } from "react-icons/ai";
// import Sidemenu from "./Sidemenu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { MdFilterAlt } from "react-icons/md";
import LeftDrawer from "../drawer/LeftDrawer";

function AppHeader({ open, setOpen, darkMode, setDarkMode }) {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <>
      <Style.Container>
        <Style.Logo>logo</Style.Logo>
        <Style.Menu>
          {/*  --------------------------------------------*/}
          <Style.MenuLink to="/about">
            <AiOutlineHome />
            <Style.MenuTitle>الرئسية</Style.MenuTitle>
          </Style.MenuLink>
          {/*  --------------------------------------------*/}
          <Style.MenuLink to="/">
            <MdOutlineLocalOffer />
            <Style.MenuTitle>العروض</Style.MenuTitle>
          </Style.MenuLink>
          {/*  --------------------------------------------*/}
          <Style.MenuLink to="/contact">
            <MdOutlineContactPhone />
            <Style.MenuTitle>تواصل</Style.MenuTitle>
          </Style.MenuLink>
          <Style.MenuLink>

            <Style.MenuTitle menuDir="col" onClick={()=>{setOpenFilter(true)}}>
            <MdFilterAlt />
            {/* <Style.MenuTitle >تصفية</Style.MenuTitle> */}
            </Style.MenuTitle>
          </Style.MenuLink>
          {/*  --------------------------------------------*/}
          <Style.MenuItem onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <MdModeNight /> : <MdLightMode />}
          </Style.MenuItem>
        </Style.Menu>
        
      </Style.Container>
      {openFilter &&
      <LeftDrawer
        open={openFilter}
        setOpen={setOpenFilter}
        drawerWidth={200}
        anchor="left"
        drHight={"100vh"}
      >
         
      
      </LeftDrawer>
}
    </>
  );
}

export default AppHeader;
