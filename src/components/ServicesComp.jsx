import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography
  } from "@material-tailwind/react";
import { services } from "../data/golden.data";
function ServicesComp() {
  
  return (
    <div className=" mx-auto p-6 container my-12 pb-10 mt-12 shadow-md ">
      <Typography
        variant="h1"
        className="pt-8 pb-4 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r  from-yellow-300 to-yellow-900 "
      >
        Services
      </Typography>

      <Tabs value="Teachnical_Support" className="lg:pb-4" >
      <TabsHeader>
        {services.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="lg:p-12">
        {services.map(({ value, desc }) => (
         <TabPanel key={value} value={value}>
         {desc}
       </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
     
    </div>
  );
}

export default ServicesComp;
