import { Link, useRouteError } from "react-router-dom";
import GoldenNavbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md  ">
          <h1 className="mb-5 text-5xl font-bold">404 Page </h1>
          <p className="mb-5 p-4 text-md">Please return to the correct page</p>
          <Link to={'/'}>
            <button className="btn btn-primary px-12">Go</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/*
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">404 Page </h1>
      <p className="mb-5">Please return to correct page</p>
      <button className="btn btn-primary" >Go</button>
    </div>
  </div>
</div>
*/
