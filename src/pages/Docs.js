import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import GoldenNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import HorizontalDocs from "../components/HorizontalDocs";

function Docs() {
  return (
    <>
      <GoldenNavbar />
      <HorizontalDocs />
      <Footer />
    </>
  );
}

export default Docs;
