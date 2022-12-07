import React from "react";
import cpm from "./AppfooterCpm";


import { AiFillPhone } from "react-icons/ai";
import { GrSnapchat } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FcPhone } from "react-icons/fc";

import {  toast } from 'react-toastify';

import data from "./data.json";
import { lightBlue } from "@mui/material/colors";

function AppFooter() {
  const copySnapshot = () => {
    navigator.clipboard.writeText(data.snapshot);
    toast.success("تم حفظ سناب شت في الحافظة")
  };

  const copyInstgram = () => {
    navigator.clipboard.writeText(data.Instgram);
    toast.success("تم حفظ الانستجرام في الحافظة")
  };

  return (
    <cpm.Container>
      <cpm.IconWarper onClick={copySnapshot}>
        <GrSnapchat color="yellow"/>
      </cpm.IconWarper>
      <cpm.IconWarper onClick={copyInstgram}>
        <AiFillInstagram color="#e00bf3"/>
      </cpm.IconWarper>
      <cpm.IconWarper>
        <cpm.Wa stroke="white" strokeWidth=".3"/>
      </cpm.IconWarper>
      <cpm.PhoneMenuLink href={`tel:${data.phone}`}>
        <cpm.IconWarper>
          <FcPhone   />
        </cpm.IconWarper>
      </cpm.PhoneMenuLink>
    </cpm.Container>
  );
}

export default AppFooter;
