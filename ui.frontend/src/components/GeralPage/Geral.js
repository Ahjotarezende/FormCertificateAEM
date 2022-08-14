import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";


export const GeralPage = ({ smalltextbs}) => {
  
  return(
    <h2>{smalltextbs}</h2>
  )
 
};


GeralPage.defaultProps = {
    smalltextbs: "Insert Text Here"
}
  
export default MapTo("reactapp/components/geralpage")(GeralPage);
