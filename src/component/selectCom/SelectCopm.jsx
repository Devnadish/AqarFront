import React from "react";
import glb from "../../component/globalCpm";
function SelectCopm({ Xlabel, data ,  dirLabel="column",Xrefrence}) {
 
  return (
    <>
      <glb.InputContainer dirLabel={dirLabel} >
        <glb.TXTLabel>{Xlabel}</glb.TXTLabel>

        <glb.CustomSelectDiv>
        <glb.SeclectOption ref={Xrefrence}>
          {data.map((el) => {
            return (
              <React.Fragment key={el.id}>
                <option value={el.value} >{el.label}</option>
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
