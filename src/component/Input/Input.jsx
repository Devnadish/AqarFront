import React from "react";
import glb from "../../component/globalCpm";
export function Input({
  Xlabel,
  Xtype ,
  Xid,
 Xrefrence,
  XdefalutValue,
  Xplaceholder,
  disable = false,
  dirLabel="column",
  xhidden  
}) {
 
  return (
    <>
      <glb.InputContainer dirLabel={dirLabel}>
        <glb.TXTLabel>{Xlabel}</glb.TXTLabel>

        <glb.Input
          type={Xtype}
          width="100%"
          placeholder={Xplaceholder}
          disabled={disable}
          ref={Xrefrence}
          hidden={xhidden}
        />
      </glb.InputContainer>
    </>
  );
}

Input.defaultProps = {
  Xlabel: "khalid",
  Xtype: "text",
  Xid: "",
  // Xref: "",
  XdefalutValue: "",
  Xplaceholder: "",
  xhidden : false
};

/* ------------------------- */
export function InputText({
  Xlabel,
  Xtype,
  Xid,
  Xrefrence,
  XdefalutValue,
  Xplaceholder,
  disable = false,
  Xrows,
  dirLabel="column"
  
}) {
  return (
    <>
      <glb.InputContainer dirLabel="column">
        <glb.TXTLabel>{Xlabel}</glb.TXTLabel>

        <glb.InputTextarea
          type={Xtype}
          width="100%"
          placeholder={Xplaceholder}
          disabled={disable}
          rows={Xrows}
          ref={Xrefrence}
        />
      </glb.InputContainer>
    </>
  );
}

Input.defaultProps = {
  Xlabel: "khalid",
  Xtype: "text",
  Xid: "",
  Xref: "",
  XdefalutValue: "",
  Xplaceholder: "",
};

// export default Input;

export function FileInput({
  Xlabel,
  Xtype ,
  Xid,
 Xrefrence,
  XdefalutValue,
  Xplaceholder,
  disable = false,
  dirLabel="column",
  xhidden  ,
  xfileChange
}) {
 
  return (
    <>
      <glb.InputContainer dirLabel={dirLabel}>
        <glb.TXTLabel>{Xlabel}</glb.TXTLabel>

        <glb.Input
          type={Xtype}
          width="100%"
          placeholder={Xplaceholder}
          disabled={disable}
          ref={Xrefrence}
          hidden={xhidden}
          onChange={xfileChange}
        />
      </glb.InputContainer>
    </>
  );
}

FileInput.defaultProps = {
  Xlabel: "khalid",
  Xtype: "text",
  Xid: "",
  // Xref: "",
  XdefalutValue: "",
  Xplaceholder: "",
  xhidden : false
};

