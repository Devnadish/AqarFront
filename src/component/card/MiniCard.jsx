import React,{useState} from "react";
import cpm from "./cpm";
import CardHeader from "./header/CardHeader";
import CardFooter from "./footer/CardFooter";
import CardBody from "./body/CardBody";
import CardMenu from "./cardmenu/CardMenu";
import DiloagShow from  "../dailog/DiloagShow"
import ViewRequst from "../card/ViewRequst/ViewRequst"
import { RiCustomerServiceLine } from "react-icons/ri";



const MiniCard = ({ data}) => {
const [menu,setMenu]=useState(false)
const [open, setOpen] = useState(false);
  const [dailoTitle, setDailoTitle] = useState("");
   

  return (
    <>
      <cpm.Container type={data.type}>
        <cpm.ActionBtn onClick={() => setOpen(true)}>
          <RiCustomerServiceLine color="green" fontSize={"1.7rem"}/>
        </cpm.ActionBtn>
        <CardHeader setMenu={setMenu} title={data.header} type={data.type} />
        <CardBody image={data.img} detail={data.detail} id={data.id} />
        <CardFooter
          commentCounter={data.commentCounter}
          create={data.create}
          seeCounter={data.seeCounter}
          id={data.id}
        />
        {menu && <CardMenu menu={menu} setMenu={setMenu} />}
      </cpm.Container>

      {open && (
        <DiloagShow
          open={open}
          toggle={setOpen}
          title={"يسعدني خدمتك"}
          children={<ViewRequst data={data} />}
        />
      )}
    </>
  );
};

export default MiniCard;
