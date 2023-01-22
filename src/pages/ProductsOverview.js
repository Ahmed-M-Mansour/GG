import React from "react";
import GoldenNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import { valves, pneumatic, instrumentation } from "../data/golden.data";
import { Link } from "react-router-dom";
import GoldenMarquee from "../components/GoldenMarquee";
import Map from "../components/GoldenMap";

function Products() {
  return (
    <>
      <GoldenNavbar />
      <div className="mainProducts container mx-auto my-12 py-6">
        {/* Valves Contents */}
        <Card className="w-full my-12">
          <CardBody className="text-center">
            <Link to={`/products/valves`} className="hover:underline"> 
            <Typography variant="h2" color="blue-gray" className="mb-2'">
              Valves
            </Typography>
            </Link>
            <ul class="grid lg:grid-cols-4  gap-4 p-6 list-disc">
              {valves.map((item) => {
                return (
                  <li className="text-left hover:underline" key={item.id}>
                    
                    <Link to={`/products`}> {item.name} </Link>
                  </li>
                );
              })}
            </ul>
          </CardBody>
          <div class="columns-3xs">
            <img
              class="w-full aspect-video "
              src="https://images.unsplash.com/photo-1620203853151-496c7228306c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80"
            />
            <img
              class="w-full aspect-square "
              src="https://images.unsplash.com/photo-1563456020159-b74d67e78c26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            />
            <img
              class="w-full aspect-video "
              src="https://images.unsplash.com/photo-1618840626133-54463084a141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            />
            <img
              class="w-full aspect-square "
              src="https://images.unsplash.com/photo-1539186607619-df476afe6ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <img
              class="w-full aspect-square "
              src="https://images.unsplash.com/photo-1620893282749-344e30ed377f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <img
              class="w-full aspect-video "
              src="https://images.unsplash.com/photo-1618840626133-54463084a141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            />
            <img
              class="w-full aspect-video "
              src="https://images.unsplash.com/photo-1624880403473-4244deee045a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            />
            <img
              class="w-full aspect-square "
              src="https://plus.unsplash.com/premium_photo-1661915091623-3025c240b0fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </Card>

        <Card className="w-full my-12">
          <CardBody className="text-center">
            <Link to={`/products/pneumatic`} className="hover:underline"> 
            <Typography variant="h2" color="blue-gray" className="mb-2">
              Pneumatic
            </Typography>
            </Link>
            <ul class="grid lg:grid-cols-4 gap-4 p-6 list-disc">
              {pneumatic.map((item) => {
                return (
                  <li className="text-left hover:underline" key={item.id}>
                    {" "}
                    <Link to={`/products`}> {item.name} </Link>{" "}
                  </li>
                );
              })}
            </ul>
          </CardBody>
          <div class="columns-3xs">
            <img
              class="w-full aspect-video "
              src="https://images.unsplash.com/photo-1414357809080-e19d8f805245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <img
              class="w-full aspect-square "
              src="https://images.unsplash.com/photo-1570155308259-f4480a5c3696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            />
            <img
              class="w-full aspect-video "
              src="https://library.automationdirect.com/wp-content/uploads/2019/02/ADC_PneumaticGroup.jpg"
            />
            <img
              class="w-full aspect-square "
              src="https://i.ytimg.com/vi/hmz1h5fk2bI/maxresdefault.jpg"
            />
            <img
              class="w-full aspect-square "
              src="https://65780692-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-M7yGVyBrcpSR8SDSikj%2Fuploads%2FW1XeQyQwKw9ZUTUbmw9E%2FScreen%20Shot%202021-12-30%20at%209.22.03%20PM.png?alt=media&token=ebe0196b-1f4a-44a2-ad79-d95b70d2d662"
            />
            <img
              class="w-full aspect-video "
              src="https://www.techbriefs.com/images/econa/fields/3/com_content_article/39566/md-0821-p6_fig1_primary-feature-item.jpg"
            />
            <img
              class="w-full aspect-video "
              src="https://storage.tameson.com/asset/Articles/general/pneumatics-banner-830.jpg"
            />
            <img
              class="w-full aspect-square "
              src="https://uploads-ssl.webflow.com/617bfbfccfd67c8d5ae89950/628b90e062ceeb82632ddf6f_pneumatic%20cylinder%20maintenance.jpg"
            />
          </div>
        </Card>

        <Card className="w-full my-12">
          <CardBody className="text-center">
            <Link to={`/products/instrumentation`} className="hover:underline"> 
            <Typography variant="h2" color="blue-gray" className="mb-2">
              Instrumentation
            </Typography>
            </Link>
            <ul class="grid lg:grid-cols-4 gap-4 p-6 list-disc">
              {instrumentation.map((item) => {
                return (
                  <li className="text-left hover:underline" key={item.id}>
                    {" "}
                    <Link to={`/products`}> {item.name} </Link>{" "}
                  </li>
                );
              })}
            </ul>
          </CardBody>
          <div class="columns-3xs">
            <img
              class="w-full aspect-video "
              src="http://matrixti.com/wp-content/uploads/2018/04/multidiscipline-engineering-.jpg"
            />
            <img
              class="w-full aspect-square "
              src="https://cache.careers360.mobi/media/presets/860X430/presets/860X430/article_images/2020/4/14/Instrumentation-and-Control-Engineering.webp"
            />
            <img
              class="w-full aspect-video "
              src="https://i0.wp.com/www.electricalvolt.com/wp-content/uploads/2022/03/Untitled-design-3.png?fit=940%2C788&ssl=1"
            />
            <img
              class="w-full aspect-square "
              src="https://verwater.com/sites/verwater.com/files/styles/6x3/public/header_images/Elektro%20Instrumentatie.jpg?itok=eyBj85XF&c=b4f11737123e4af64a404386965dc224"
            />
            <img
              class="w-full aspect-square "
              src="https://www.controlandinstrumentation.com/imz/fb/eng-pipe.jpg"
            />
            <img
              class="w-full aspect-video "
              src="https://flintcorp.com/wp-content/uploads/2022/11/Flint-importance-of-instrumentation-july-blog-2021-pic4.jpg"
            />
            <img
              class="w-full aspect-video "
              src="https://bavylontechsolutions.com/wp-content/uploads/2020/07/eandi-2-1024x683.png"
            />
            <img
              class="w-full aspect-square "
              src="https://www.sitrain-learning.siemens.com/dam/jcr:2641fd0c-6403-4688-8149-7b7f4c964f5f/kv-pi-services.jpeg"
            />
          </div>
        </Card>
      </div>

      <GoldenMarquee />
      <Map/> 

      <Footer />
    </>
  );
}

export default Products;
