import React,{useState} from "react";
import cpm from "./Viewcpm";



function ViewRequst({ data }) {
  const [req,setReq]=useState("حدد طلبك لو سمحت ؟")
  const [reqFlag,setReqFlag]=useState(1)
  const handleReq=(typex) => {
      if (typex===1){  
        setReq(cur=>"طلب اتصال")
        setReqFlag(old=>1)
    }
      if (typex===2){setReq(cur=>"طلب معيانة")
      setReqFlag(old=>2)
    }
      if (typex===3){setReq(cur=>"عرض سعر نهائي")
      setReqFlag((old) => 3);
    }
 






  }



  return (
    <>
      {/* ----------------------------------------------------- */}
      <cpm.FieldSet>
        <cpm.ItemTxtWraper dsn="row">
          <cpm.FieldSet>
            <cpm.Text>رقم العرض</cpm.Text>
            <cpm.TextData>{data.id}</cpm.TextData>

            <cpm.HeaderTypeWarper type={data.type}>
              <cpm.TextData>{data.type}</cpm.TextData>
            </cpm.HeaderTypeWarper>
          </cpm.FieldSet>
        </cpm.ItemTxtWraper>
      </cpm.FieldSet>
      <cpm.TextData border="yes">{data.header}</cpm.TextData>
      {/* ----------------------------------------------------- */}
      <cpm.ItemTxtWraper></cpm.ItemTxtWraper>
      {/* ----------------------------------------------------- */}

      <cpm.FormContainer>
        <cpm.FormStyle>
          <cpm.FieldSet>
            <cpm.RequstTypeWrper
             
            >
              <cpm.Text>{req}</cpm.Text>

              <cpm.RadioDiv>
                <cpm.LabelText onClick={()=>handleReq(1)}>طلب اتصال</cpm.LabelText>
                <cpm.LabelText onClick={()=>handleReq(2)}>طلب معيانة</cpm.LabelText>
                <cpm.LabelText onClick={()=>handleReq(3)}>سعر نهائي</cpm.LabelText>
              </cpm.RadioDiv>
            </cpm.RequstTypeWrper>
          </cpm.FieldSet>

          <cpm.FieldSet>
            <cpm.InputText placeholder="الاسم" />
            <cpm.InputText type="number" placeholder="الجوال" />
          </cpm.FieldSet>
          <cpm.FieldSet>
            <cpm.InputText placeholder="الوقت" reqFlag={reqFlag} />
            <cpm.InputText placeholder="اليوم" reqFlag={reqFlag} />
          </cpm.FieldSet>
          <cpm.PriceInputText placeholder="السعر"  reqFlag={reqFlag}/>
          <cpm.InputTextarea placeholder="ملاحضات"  reqFlag={reqFlag}/>

        </cpm.FormStyle>
        <cpm.Btn>ارسال</cpm.Btn>
      </cpm.FormContainer>
    </>
  );
}

export default ViewRequst;
