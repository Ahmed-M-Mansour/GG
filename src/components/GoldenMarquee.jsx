import Marquee from "react-fast-marquee";
import { logoes } from "../data/golden.data";

function GoldenMarquee() {
 
  return (
    <Marquee gradientWidth={25} pauseOnHover>
      <div className="flex  items-center lg:py-10 md:py-10 py-5 first:mr-20 gap-x-20 mb-8">
        {logoes.map((img, i) => {
          return (
            <a key={i} href={img.website? img.website: "https://www.google.com"} target="_blank" rel="noreferrer">
            <img
              alt={img.alt}
              src={img.imgUrl}
              key={i}
              size="xxl"
              width={100}
              height={40}
            />
            </a> 
          );
        })}
      </div>
    </Marquee>
  );
}

export default GoldenMarquee;
