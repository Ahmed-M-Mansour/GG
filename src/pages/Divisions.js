import React from "react";
import GoldenNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/GoldenMap";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { divisionsContent } from "../data/golden.data";

function Divisions() {
  return (
    <>
      <GoldenNavbar />
      <section className="container mx-auto">
        {divisionsContent.map((item) => {
          return (
            <Card className="my-12 p-6">
              <CardHeader className="relative lg:w-1/3 mx-auto p-6">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="h-full w-96 mx-auto" 
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  {item.name}
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to "Naviglio" where you can enjoy the
                  main night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center justify-between py-3"
              >
               
              </CardFooter>
            </Card>
          );
        })}
      </section>
      <Map />
      <Footer />
    </>
  );
}

export default Divisions;
