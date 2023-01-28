import React from "react";
import GoldenNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  LockClosedIcon,
  ServerIcon,
  DevicePhoneMobileIcon, 
  InboxArrowDownIcon, 
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  HomeModernIcon
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "T: ",
    description:
      "(202) 23506756",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Address: ",
    description:
      "4 Mahmoud Ghoniem St.Nasr City, Cairo, Egypt. 11371",
    icon: BuildingLibraryIcon,
  },
  {
    name: "Email: ",
    description:
      "my@goldengroup-eg.com",
    icon: InboxArrowDownIcon,
  },
];
function Contacts() {
  return (
    <>
      <GoldenNavbar />
      <section>
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Reach For Us
                  </p>
                  <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                    Faster
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
                              {/* The Card Section */}
              <div className="card flex-shrink-0 w-full max-w-sm shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  bg-base-100 lg:ml-12">
                <div className="card-body flex items-center justify-center ">
                  <div className="form-control mt-6">
                    <button className="btn btn-primary my-2 gap-2"
                     onClick={() => {
                      window.location.href =
                        "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=my@goldengroup-eg.com&subject=Hi-There&body=my-email-body";
                    }}
                    >
                      SEnd Message With Email
                    </button>
                    <button className="btn btn-success my-2 gap-2" 
                     onClick={() => {
                      window.location.href =
                        "https://api.whatsapp.com/send/?phone=201090591715&text=&type=phone_number&app_absent=0";
                    }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                      SEnd Message With WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contacts;
