export const navLinks = [
  { id: 1, name: "About Us", subLinks: null, routerLink: "/aboutus" },
  { id: 2, name: "Divisions", subLinks: null, routerLink: "/divisions" },
  {
    id: 3,
    name: "Products",
    subLinks: ["Overview", "Valves", "Pneumatic", "Instrumentation"],
    routerLink: "/products",
  },
  { id: 4, name: "Services", subLinks: null, routerLink: "/services" },
  { id: 5, name: "Solutions", subLinks: null, routerLink: "/solutions" },

  { id: 6, name: "Contact Us", subLinks: null, routerLink: "/contacts" },
  { id: 7, name: "Docs", subLinks: null, routerLink: "/docs" },
];
// ------------------------------------------------------------//

export const productsContainer = [
  {
    id: 1,
    name: "Valves",
    routerLink: "/products/valves",
    imgUrl:
      "https://images.unsplash.com/photo-1582642880428-3e2c04ad14ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    subCategories: [
      { id: 1, name: "Batterfly Valves", routerLink: "/products/valves/batterfly" },
      { id: 2, name: "Angle Valves", routerLink: "/products/valves/angle" },
      { id: 3, name: "Ball Valves", routerLink: "/products/valves/ball" },
      { id: 4, name: "VIP Valves", routerLink: "/products/valves/vip" },
      { id: 5, name: "Control Valves", routerLink: "/products/valves/control" },
      { id: 6, name: "Control Valves Accessories", routerLink: "/products/valves/control-accessories" },
      { id: 7, name: "Solenoid Valves", routerLink: "/products/valves/solenoid" },
      { id: 8, name: "Dust Valves", routerLink: "/products/valves/dust" },
    ],
  },
  {
    id: 2,
    name: "Pneumatic",
    routerLink: "/products/pneumatic",
    imgUrl:
      "https://images.unsplash.com/photo-1414357809080-e19d8f805245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    subCategories: [
      { id: 1, name: "Pneumatic Systems", routerLink: "/products/pneumatic/systems" },
      { id: 2, name: "Pneumatic Cylinders", routerLink: "/products/pneumatic/cylinders" },
      { id: 3, name: "Pneumatic Valves", routerLink: "/products/pneumatic/valves" },
      { id: 4, name: "Service Units", routerLink: "/products/pneumatic/service-units" },
      { id: 5, name: "Automatic Drains", routerLink: "/products/pneumatic/automatic-drains" },
      { id: 6, name: "Logic Elemnts", routerLink: "/products/pneumatic/logic-elemnts" },
      { id: 7, name: "Hoses & Fitings", routerLink: "/products/pneumatic/hoses-fitings" },
      { id: 8, name: "Compressed Air-Operated Product", routerLink: "/products/pneumatic/compressed-air-operated-product" },
    ],
  },
  {
    id: 3,
    name: "Instrumentation",
    routerLink: "/products/instrumentation",
    imgUrl:
      "https://www.pumpsandsystems.com/sites/default/files/0614/pressure-instrumentation.jpg",
    subCategories: [
      { id: 1, name: "Pressure", routerLink: "/products/instrumentation/pressure" },
      { id: 2, name: "Temperature", routerLink: "/products/instrumentation/temperature" },
      { id: 3, name: "Level", routerLink: "/products/instrumentation/level" },
      { id: 4, name: "Flow", routerLink: "/products/instrumentation/flow" },
      { id: 5, name: "Metal Detector", routerLink: "/products/instrumentation/metal-detector" },
      { id: 6, name: "Sensors", routerLink: "/products/instrumentation/sensors" },
      { id: 7, name: "Recorders", routerLink: "/products/instrumentation/recorders" },
    ],
  },
];

// ------------------------------------------------------------//
export const valves = [
  { id: 1, name: "Batterfly Valves" },
  { id: 2, name: "Angle Valves" },
  { id: 3, name: "Ball Valves" },
  { id: 4, name: "VIP Valves" },
  { id: 5, name: "Control Valves" },
  { id: 6, name: "Globe Valves Accessories" },
  { id: 7, name: "Solenoid Valves" },
  { id: 8, name: "Dust Valves" },
];
// ------------------------------------------------------------//

export const pneumatic = [
  {
    id: 1,
    name: "Pneumatic Systems",
    imgUrl:
      "https://library.automationdirect.com/wp-content/uploads/2019/02/ADC_PneumaticGroup.jpg",
  },
  {
    id: 2,
    name: "Pneumatic Cylinders",
    imgUrl:
      "https://www.airwork-pneumatic.com/wp-content/uploads/2021/11/Airwork_pneumatic_cylinders_and_actuators_grippers_handling.png",
  },
  {
    id: 3,
    name: "Pneumatic Valves",
    imgUrl:
      "https://www.airwork-pneumatic.com/wp-content/uploads/2021/11/Airwork_pneumatic_valves_manual_solenoid_islands_mechanical_accessories_auxiliares.png",
  },
  {
    id: 4,
    name: "Service Units",
    imgUrl:
      "https://www.pro-lift-montagetechnik.com/WebRoot/Store15/Shops/78156040/54BE/28FF/C5DC/A278/B8AE/C0A8/2BBC/FE2E/00602_Druckluft_Wartungseinheit-1-Zoll-jpg_ml.jpg",
  },
  {
    id: 5,
    name: "Automatic Drains",
    imgUrl:
      "https://res.cloudinary.com/rsc/image/upload/b_auto,c_pad,dpr_1.0,f_auto,h_758,q_auto,w_1350/c_pad,h_758,w_1350/F2341993-01?pgw=1&pgwact=1",
  },
  {
    id: 6,
    name: "Logic Elemnts",
    imgUrl: "https://www.newark.com/productimages/large/en_US/34B3508-40.jpg",
  },
  {
    id: 7,
    name: "Hoses & Fitings",
    imgUrl: "https://infinitypipesystems.com.au/wp-content/uploads/NSC-SM.jpg",
  },
  {
    id: 8,
    name: "Compressed Air-Operated Product",
    imgUrl: "https://m.media-amazon.com/images/I/51zLIPBiDtL.jpg",
  },
];
// ------------------------------------------------------------//

export const instrumentation = [
  {
    id: 1,
    name: "Pressure",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/MAXIMATOR-High-Pressure-Manometer-01a.jpg/1200px-MAXIMATOR-High-Pressure-Manometer-01a.jpg",
  },
  {
    id: 2,
    name: "Temperature",
    imgUrl:
      "https://assets.omega.com/images/test-and-measurement-equipment/temperature/thermometers/B_S_DIALTEMP_l.jpg",
  },
  {
    id: 3,
    name: "Level",
    imgUrl:
      "https://indratel.com.au/wp-content/uploads/2020/07/instrument-chamber.jpg",
  },
  {
    id: 4,
    name: "Flow",
    imgUrl:
      "https://csi.imgix.net/products/instrumentation-flow-meters.jpg?auto=compress&crop=focalpoint&domain=csi.imgix.net&fit=crop&fm=jpg&fp-x=0.5&fp-y=0.5&h=340&ixlib=php-3.3.1&w=500&s=799eee1a08ee682e64ea3864d55ab6f0",
  },
  {
    id: 5,
    name: "Metal Detector",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0270/1859/products/467493_580x.jpg?v=1663397722",
  },
  {
    id: 6,
    name: "Sensors",
    imgUrl:
      "https://www.vaughn-associates.com/wp-content/uploads/2013/11/UltraSensors.png",
  },
  {
    id: 7,
    name: "Recorders",
    imgUrl:
      "https://assets.new.siemens.com/siemens/assets/api/uuid:4d8fbcf2-0093-4213-a727-09d5f99892e1/width:1125/crop:0,143:0,14413:0,7:0,70285/quality:high/usa---sirec-d300.png",
  },
];
// ------------------------------------------------------------//

export const divisionsContent = [
  {
    id: 1,
    name: "Teachnical Solutions",
    imgUrl:
      "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1016968886_pdrdaj.jpg",
    desc: "",
  },
  {
    id: 2,
    name: "Reverse Engineering",
    imgUrl:
      "https://www.qualitymag.com/ext/resources/Issues/2022/September/Software-Analysis/QM0922-FEAT-Software-p1FT-reverse-engineering.jpg?1662121798",
    desc: "",
  },
  {
    id: 3,
    name: "Logistics ",
    imgUrl:
      "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/logistics.png",
    desc: "",
  },
];
// ------------------------------------------------------------//

export const services = [
  {
    label: "Teachnical Support",
    value: "Teachnical_Support",
    desc: `Through our mechanical and electrical engineers , we study with our customer their technical problems to recommend the best solution using up to date technology. `,
    imgUrl:
      "https://www.beacontelecom.com/wp-content/uploads/2020/07/TechSupportImage.jpeg",
    servicesText: [
      {
        id: 1,
        text: "Through our mechanical and electrical engineers , we study with our customer their technical problems to recommend the best solution using up to date technology.", 
      }, 
      {
        id: 2,
        text: "Also we do commissioning and start up for all the instrumentation we supply to our customers if needed.",

      }, 
      {
        id: 3,
        text: "We do replacement on our responsibility.",
      }
    ],
  },
  {
    label: "Training",
    value: "Training",
    desc: `We do training for our Customers , Partners , Distributors, We also do training for our tech. and sales stuff to help them accumulating experience, We have a good tech. library (Soft & Hard) which can assist our customers , stuff in different fields. `,
    imgUrl:
      "https://qualityacademy.org/wp-content/uploads/2020/09/in-house-training-course.jpg",
  },
  {
    label: "Stock Availability",
    value: "Stock_Availability",
    desc: `To serve our customer in convenient way to keep a strong stock from the most famous items , Like pneumatic components , photo cells , temp. controllers , control valves , field instruments, and so on.`,
    imgUrl:
      "https://www.deskera.com/care/content/images/2020/09/mark-timberlake-t5U8j97pI_o-unsplash.jpg",
  },
];

/**
    - Teachnical solutions -- p 
    - Reverse engineering  -- p
    - Logistics            -- p
   */

export const carousalData = [
  {
    imgUrl:
      "https://www.cepal.org/sites/default/files/styles/1280x720/public/images/featured/18_0.jpg?itok=pukJ88_S",
    title: "vesion 1",
    pageUrl: "",
  },
  {
    imgUrl:
      "https://www.beekeeper.io/wp-content/uploads/2021/02/Manufacturing-Goals-FI.jpg",
    title: "vesion 2",
    pageUrl: "",
  },
  {
    imgUrl:
      "https://www.roxtec.com/optimized/share/contentassets/b076b4465fb041b181d278c17e6efde5/roxtec_owners.jpg",
    title: "vesion 3",
    pageUrl: "",
  },
];

export const trustedImgs = [
  "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e2c357a866a_Cameo%20svg.svg",
  "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e96657a8663_found%201.svg",
  "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e9ac37a866b_Verifiable.svg",
  "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e3e467a86a8_logo_spark-advisors.svg",
  "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e37017a8669_Patreon%20svg.svg",
  "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9ebd4c7a86a7_logo_skillshare.svg",
  "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9ef31a7a863c_glossgenius%201.svg",
  "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9e3f2e7a86a6_logo_olaplex.svg",
  "https://assets.website-files.com/637be80ebdeb9e668f7a84dc/637be80fbdeb9ea9247a86a5_logo_namely.svg",
];

export const logoes = [
  {
    id: 1,
    alt: "image1",
    imgUrl: "https://iili.io/HcPHlDB.png",
    website: "https://www.datalogic.com/eng/index.html",
  },
  {
    id: 2,
    alt: "image2",
    imgUrl: "https://iili.io/HcPH1oP.jpg",
    website: "https://www.parker.com/us/en/home.html",
  },
  {
    id: 3,
    alt: "image3",
    imgUrl: "https://iili.io/HcPHcNV.jpg",
    website: "",
  },
  {
    id: 4,
    alt: "image4",
    imgUrl: "https://iili.io/HcPHaAQ.jpg",
    website: "https://lesliecontrols.com/",
  },
  {
    id: 5,
    alt: "image5",
    imgUrl: "https://iili.io/HcPHEV1.gif",
    website: "https://tasigroup.com/cassel-inspection/",
  },
  {
    id: 6,
    alt: "image6",
    imgUrl: "https://iili.io/HcPHXUJ.md.jpg",
    website: "",
  },
  {
    id: 7,
    alt: "image7",
    imgUrl: "https://iili.io/HcPHGiF.jpg",
    website: "",
  },
  {
    id: 8,
    alt: "image8",
    imgUrl: "https://iili.io/HcPHWla.jpg",
    website: "",
  },
  {
    id: 9,
    alt: "image9",
    imgUrl: "https://iili.io/HcPHVKg.png",
    website: "",
  },
  {
    id: 10,
    alt: "image10",
    imgUrl: "https://iili.io/HcPHjHv.jpg",
    website: "",
  },
  {
    id: 11,
    alt: "image11",
    imgUrl: "https://iili.io/HcPHwRR.gif",
    website: "",
  },
  {
    id: 12,
    alt: "image12",
    imgUrl: "https://iili.io/HcPHODN.jpg",
    website: "",
  },
  {
    id: 13,
    alt: "image13",
    imgUrl: "https://iili.io/HcPHkxI.gif",
    website: "",
  },
  {
    id: 14,
    alt: "image14",
    imgUrl: "https://iili.io/HcPHvVt.png",
    website: "",
  },
  {
    id: 15,
    alt: "image15",
    imgUrl: "https://iili.io/HcPHUfn.gif",
    website: "",
  },
  {
    id: 16,
    alt: "image16",
    imgUrl: "https://iili.io/HcPHiOl.jpg",
    website: "",
  },
];

// https://freeimage.host/i/HcPHlDB   -- 1
// https://freeimage.host/i/HcPH1oP   -- 2
// https://freeimage.host/i/HcPHcNV   -- 3
// https://freeimage.host/i/HcPHaAQ   -- 4
// https://freeimage.host/i/HcPHEV1   -- 5
// https://freeimage.host/i/HcPHXUJ   -- 6
// https://freeimage.host/i/HcPHGiF   -- 7
// https://freeimage.host/i/HcPHWla   -- 8
// https://freeimage.host/i/HcPHVKg   -- 9
// https://freeimage.host/i/HcPHjHv   -- 10
// https://freeimage.host/i/HcPHwRR   -- 11
// https://freeimage.host/i/HcPHODN   -- 12
// https://freeimage.host/i/HcPHkxI   -- 13
// https://freeimage.host/i/HcPHvVt   -- 14
// https://freeimage.host/i/HcPHUfn   -- 15
// https://freeimage.host/i/HcPHiOl   -- 16
