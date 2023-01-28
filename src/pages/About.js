import React from "react";
import GoldenNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoldenAbout from "../components/GoldenAboutSec";

function About() {
  return (
    <>
      <GoldenNavbar />
      <section className="container mx-auto my-12 lg:p-4">
        {/* <div class="grid grid-rows-3 grid-flow-col gap-4">
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
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
          </div>
          <div class="col-span-2 ...">
            <Typography>
              Material Tailwind is an easy to use components library for
              Tailwind CSS and Material Design. It provides a simple way to
              customize your components, you can change the colors, fonts,
              breakpoints and everything you need.
            </Typography>
          </div>
          <div class="row-span-2 col-span-2 ...">03</div>
        </div> */}

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Golden Group
              <span className="badge badge-success gap-2 ml-1 ">History</span>
            </h3>
            <p className="mt-1 lg:px-6 lg:py-2 text-md text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus volutpat urna sed ultricies. Integer in hendrerit leo.
              Morbi mattis tristique libero, et pretium dui. Proin elit ligula,
              volutpat non porta nec, sollicitudin eget ipsum. Integer in nisl
              vel leo ullamcorper finibus vitae ut est. Nullam dignissim luctus
              posuere. Curabitur non turpis efficitur, hendrerit ligula at,
              mollis neque. Maecenas a elit consectetur, malesuada lorem vel,
              volutpat enim. Quisque congue porttitor lobortis. Pellentesque
              nisi enim, viverra quis vulputate sed, vehicula eu lorem.
              Phasellus sed rutrum nibh, ac ornare arcu. Praesent rutrum laoreet
              ante sit amet aliquet. Praesent a augue mauris. In at ex lacinia,
              maximus lectus nec, mollis orci. Mauris in tincidunt dui. Quisque
              et ligula tincidunt, ornare nisl quis, auctor dolor.
            </p>
            <hr />
            <p className="mt-1 lg:px-6 lg:py-2 text-md text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus volutpat urna sed ultricies. Integer in hendrerit leo.
              Morbi mattis tristique libero, et pretium dui. Proin elit ligula,
              volutpat non porta nec, sollicitudin eget ipsum. Integer in nisl
              vel leo ullamcorper finibus vitae ut est. Nullam dignissim luctus
              posuere. Curabitur non turpis efficitur, hendrerit ligula at,
              mollis neque. Maecenas a elit consectetur, malesuada lorem vel,
              volutpat enim. Quisque congue porttitor lobortis. Pellentesque
              nisi enim, viverra quis vulputate sed, vehicula eu lorem.
              Phasellus sed rutrum nibh, ac ornare arcu. Praesent rutrum laoreet
              ante sit amet aliquet. Praesent a augue mauris. In at ex lacinia,
              maximus lectus nec, mollis orci. Mauris in tincidunt dui. Quisque
              et ligula tincidunt, ornare nisl quis, auctor dolor.
            </p>
          </div>
        </div>

        <GoldenAbout />
      </section>
      <Footer />
    </>
  );
}

export default About;
