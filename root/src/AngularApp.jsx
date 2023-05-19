import React, { useEffect, useRef } from "react";
import {mount} from "angularApp/angular-components";

const AngularAppModule = () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log("Mountung angular")
    mount();  
  }, []);   
  return <app-root></app-root>;
};

export default AngularAppModule;