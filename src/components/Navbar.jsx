import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/golden.data";
import goldenLogo from "../data/goldenlogo.png"

export default function GoldenNavbar() {
  const [openNav, setOpenNav] = useState(false);


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLinks.map((item) => (
        <>
          {item.subLinks === null ? (
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
              key={item.id}
            >
              <Link
                className="flex items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:underline hover:underline-offset-8  hover:duration-300 "
                to={item.routerLink}
                key={item.id}
                as="li"
                variant="small"
                color="blue-gray"
              >
                {item.name}
              </Link>
            </Typography>
          ) : (
            <Menu key={item.id}>
              <MenuHandler>
                <Typography className=" cursor-pointer" variant="gradient">
                  {item.name}
                </Typography>
              </MenuHandler>
              <MenuList>
                <Link to={`/products`}>
                  <MenuItem key={item.subLinks[0]}>{item.subLinks[0]}</MenuItem>
                </Link>
                <Link to={`/products/valves`}>
                  <MenuItem key={item.subLinks[1]}>{item.subLinks[1]}</MenuItem>
                </Link>
                <Link to={`/products/pneumatic`}>
                  <MenuItem key={item.subLinks[2]}>{item.subLinks[2]}</MenuItem>
                </Link>
                <Link to={`/products/instrumentation`}>
                  <MenuItem key={item.subLinks[3]}>{item.subLinks[3]}</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          )}
        </>
      ))}
    </ul>
  );

  return (
    <Navbar fullWidth className=" py-2 px-4 lg:px-8 lg:py-4">
      <div className=" flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <Avatar
              src={goldenLogo}
              alt="Golden Group"
              size="md"
            />
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        {/* <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block"
          onClick={() => {
            window.location.href =
              "https://api.whatsapp.com/send/?phone=201090591715&text=&type=phone_number&app_absent=0";
          }}
        >
          <span>Message Us</span>
        </Button> */}
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block"
          onClick={() => {
            window.location.href =
              "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=my@goldengroup-eg.com&subject=Hi-There&body=my-email-body";
          }}
        >
          <span>Message Us</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button
          variant="gradient"
          size="sm"
          fullWidth
          className="mb-2"
          onClick={() => {
            window.location.href =
              "https://api.whatsapp.com/send/?phone=201090591715&text=&type=phone_number&app_absent=0";
          }}
        >
          <span>Message Us</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
