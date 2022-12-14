import React from "react";
import glb from "../../component/globalCpm";

// setXdefaultValue
function SelectCopm({ Xlabel, data ,  dirLabel="column",Xrefrence,setSelectId,SelectId}) {

  const handleChane=(e)=>{
    setSelectId(e.target.value)
   
  }

  return (
    <>
      <glb.InputContainer dirLabel={dirLabel}>
        <glb.TXTLabel>{Xlabel}</glb.TXTLabel>
     
        <glb.CustomSelectDiv>
          <glb.SeclectOption
            ref={Xrefrence}
            value={SelectId}
            onChange={(e) => handleChane(e)}
          >
              
            {data?.map((el) => {
             
              return (
                <React.Fragment key={el.id}>
                    <option value={el.id}>{el.label}</option>
                </React.Fragment>
              );
            })}
          </glb.SeclectOption>
          <span className="CustomSelectArrow"></span>
        </glb.CustomSelectDiv>
      </glb.InputContainer>
    </>
  );
}

export default SelectCopm;
