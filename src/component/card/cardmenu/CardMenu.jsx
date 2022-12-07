import React, { useState, useEffect, useRef } from "react";
import global from "../../global/global";
import cpm from "./cpm";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiLandscapeLine } from "react-icons/ri";
import { MdOutlinePriceCheck } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import DiloagShow from "../../dailog/DiloagShow";
import ViewRequst from "../ViewRequst/ViewRequst"


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

function CardMenu({ menu, setMenu }) {
  const [open, setOpen] = useState(false);
  const [dailoTitle, setDailoTitle] = useState("");
  const [comp, setComp] = useState("");
  let domNode = useClickOutside(() => {
    setMenu(false);
  });

  const handleRequist = () => {
   
    setDailoTitle("طلب معاينة");
    setComp(
      <>
        <ViewRequst />
      </>
    );
    setOpen(true);
   
  };

  const handleCall = () => {
    setDailoTitle("طلب اتصال");
    setComp(
      <>
        <RequiestCall />
      </>
    );
    setOpen(true);
  };

  const handleLastprice = () => {
    setDailoTitle("عرض سعر نهائي");
    setComp(
      <>
        <RequiestLastPrice />
      </>
    );
    setOpen(true);
  };

  return (
    // <cpm.Container ref={domNode}>
    <>
    <div>
       <cpm.Container  >
      <cpm.MenuHeaderItemWrper
        open={menu}
        onClick={() => {
          setMenu(false);
        }}
      >
        <cpm.MenuIcon></cpm.MenuIcon>
        <IoMdArrowRoundBack />
        <cpm.MenuItem>عودة</cpm.MenuItem>
      </cpm.MenuHeaderItemWrper>
      <global.Hr />
      {/* ---------------------------------------- */}
      <cpm.MenuItemWrper onClick={()=>handleRequist()}>
        <cpm.MenuItem>طلب معاينة</cpm.MenuItem>
        <cpm.MenuIcon>
          <RiLandscapeLine />
        </cpm.MenuIcon>
      </cpm.MenuItemWrper>
      {/* ----------------------------------------  */}
      <cpm.MenuItemWrper onClick={handleCall}>
        <cpm.MenuItem>طلب اتصال</cpm.MenuItem>
        <cpm.MenuIcon>
          <BiPhoneCall />
        </cpm.MenuIcon>
      </cpm.MenuItemWrper>
      {/* ---------------------------------------- */}
      <cpm.MenuItemWrper onClick={handleLastprice}>
        <cpm.MenuItem>طلب سعر نهائي</cpm.MenuItem>
        <cpm.MenuIcon>
          <MdOutlinePriceCheck />
        </cpm.MenuIcon>
      </cpm.MenuItemWrper>

    </cpm.Container>
      </div>
    {open && (
        <DiloagShow
       
          open={open}
          toggle={setOpen}
          title={dailoTitle}
          children={comp}
        />
      )}
    </>
  );
}

export default CardMenu;

const RequiestCall = () => {
  return (
    <>
      <div>اتصال</div>
    </>
  );
};

const RequiestLastPrice = () => {
  return (
    <>
      <div>سعر نهائي</div>
    </>
  );
};
