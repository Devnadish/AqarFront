import axios from "axios";
import { toast } from "react-toastify"
 export  const handleData = (e) => {
    e.preventDefault();
    const formData = new FormData(myform);
    formData.append("logoImage","imageLogo")
    const sendData = axios
      .post("http://localhost:3009/aqar/savenewinfo", {
        id: Refid.current.value,
        name: Refname.current.value,
        logoImage: imageLogo,
        heroimage: Refheroimage.current.value,
        phone: Refphone.current.value,
        herotext: Refherotext.current.value,
        herodeail: Refherodeail.current.value,
        email: Refemail.current.value,
        snapsot: Refsnapsot.current.value,
        whatapp: Refwhatapp.current.value,
        instgram: Refinstgram.current.value,
        adrs: Refadrs.current.value,
        lat: Reflat.current.value,
        att: Refatt.current.value,
        Reflocation: Refatt.current.value,
        formData:formData
      })
      .then(toast.info("بنجاح تم تاسيس المعلومات الاساسية للمنصة"));
  };