import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { productsContainer } from "../data/golden.data";

function PorductsContainer() {
  return (
    <div className="container mx-auto my-12">
      <div className="flex justify-center items-center m-5 my-12 ">
        <Typography
          variant="h1"
          className="pt-8 pb-4 text-center bg-clip-text text-transparent bg-gradient-to-r  from-yellow-300 to-yellow-900 "
        >
          OUR PRODUCTS
        </Typography>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 my-6 px-4 lg:mx-8 m-4 ">
        {productsContainer.map((item) => {
          return (
            <Card className="w-96 my-6">
              <CardHeader color="blue" className="relative h-56">
                <img
                  src={item.imgUrl}
                  alt="img-blur-shadow"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Link className=" cursor-pointer transition-all ease-in-out hover:underline " to={item.routerLink}> 
                <Typography variant="h5" className="mb-6">
                  {item.name}
                </Typography>
                </Link>
                <ul class="list-none text-left">
                  {item.subCategories.map((item) => {
                    return (
                      <li className="cursor-pointer hover:text-teal-900  hover:underline  transition-all duration-75 ease-in-out ">
                        <Link to={item.routerLink}> {item.name} </Link>
                      </li>
                    );
                  })}
                </ul>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default PorductsContainer;
