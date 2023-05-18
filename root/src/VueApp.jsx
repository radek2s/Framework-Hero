import React, { useEffect, useRef } from "react";
import VueApplication from 'vueApp/vue-components'

const VueAppModule = () => {
    // const [isVisible, setVisible] = useState(false)
    // useEffect(() => {
    //     console.log("Mounted React")
    //     setVisible(true)
    //     return () => {console.log("Removed react"); setVisible(false)}
    // }, [])
//   const ref = useRef(null);
//   useEffect(() => {
//     mount();  
//   }, []);   
//   return <div id="app"></div>;
return <VueApplication/>

//   return <VueApplication/>;
};

export default VueAppModule;