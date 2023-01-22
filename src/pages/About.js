import React from "react";
import GoldenNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typography } from "@material-tailwind/react";

function About() {
  return (
    <>
      <GoldenNavbar />
      <section className="container mx-auto my-12 p-4">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3 ...">
            <div
              class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                class="max-w-xs"
                alt="Louvre"
              />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}
                ></div>
              </a>
            </div>
          </div>
          <div class="col-span-2 ...">
          <Typography>
      Material Tailwind is an easy to use components library for Tailwind CSS
      and Material Design. It provides a simple way to customize your
      components, you can change the colors, fonts, breakpoints and everything
      you need.
    </Typography>
          </div>
          <div class="row-span-2 col-span-2 ...">03</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
