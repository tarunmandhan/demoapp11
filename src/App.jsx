import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";


function App(){
    return(
        <>
         <h1 className="heading_style"> Top 5 NETFLIX Series </h1>

         <Card 
            imgsrc={Sdata[0].imgsrc}
            tittle={Sdata[0].tittle}
            sname= {Sdata[0].sname}
            href=  {Sdata[0].href}
         />

         <Card 
            imgsrc={Sdata[1].imgsrc}
            tittle={Sdata[1].tittle}
            sname= {Sdata[1].sname}
            href=  {Sdata[1].href}
         />

         <Card 
            tittle={Sdata[2].tittle}
            imgsrc={Sdata[2].imgsrc}
            sname= {Sdata[2].sname}
            href=  {Sdata[2].href}
         />

         <Card 
            imgsrc={Sdata[3].imgsrc}
            tittle={Sdata[3].tittle}
            sname= {Sdata[3].sname}
            href=  {Sdata[3].href}
         />

         <Card 
            imgsrc={Sdata[4].imgsrc}
            tittle={Sdata[4].tittle}
            sname= {Sdata[4].sname}
            href=  {Sdata[4].href}
         />

         
      </>
    )
};

export default App;