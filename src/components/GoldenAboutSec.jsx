
const products = [
    {
      id: 1,
      name: 'power Generation',
      href: '#',
      price: '$48',
      imageSrc: "https://insulcontechnical.com/wp-content/uploads/2021/02/powergeneration.jpg",
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Oil & Gas',
      href: '#',
      price: '$35',
      imageSrc: "https://www.mdresistor.com/wp-content/uploads/2020/12/Raffinerie-de-petrole-min.jpg",
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'petrochemicals',
      href: '#',
      price: '$89',
      imageSrc: "http://www.ncelenviro.org/app/uploads/2022/03/Petrochemical-Plant-scaled-e1646779554750.jpg",
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Cement',
      href: '#',
      price: '$35',
      imageSrc: "https://www.third-derivative.org/hubfs/Low-Carbon_Cement_Blog1Image.png",
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 2,
        name: 'Water & Sewage',
        href: '#',
        price: '$35',
        imageSrc: "https://media.istockphoto.com/id/505176828/photo/water-treatment-plant-at-sunset.jpg?s=612x612&w=0&k=20&c=TqbiqmeZcjlZeB2TLoWPrRIyVsYx2m8mZC4rMbNmsXc=",
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 1,
        name: 'Textile Industry',
        href: '#',
        price: '$48',
        imageSrc: "https://m.economictimes.com/thumb/msid-89193748,width-1200,height-900,resizemode-4,imgsize-99810/textile-istock.jpg",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 1,
        name: 'Firtilizer Industry',
        href: '#',
        price: '$48',
        imageSrc: "https://media.istockphoto.com/id/1313906862/photo/large-capacity-workshop-for-the-production-of-ammonia-of-a-petrochemical-plant-exterior-of.jpg?s=612x612&w=0&k=20&c=oApPS_wjzOEWvPAVtPPdpE_U8xibk7kCDoJlX_VX5O4=",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 1,
        name: 'Air & Sea Ports',
        href: '#',
        price: '$48',
        imageSrc: "https://hutchisonports.com/wp-content/uploads/2019/04/SEA-AIR_940X500.jpg",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 1,
        name: 'Agriculture & Irrigation',
        href: '#',
        price: '$48',
        imageSrc: "https://modernfarmer.com/wp-content/uploads/2015/07/water1-1200x600.jpg",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 1,
        name: 'Food & Beverage',
        href: '#',
        price: '$48',
        imageSrc: "https://www.msc.com/-/media/images/msc-cargo/sectors/food-and-beverages/msc21005158/msc21005158/msc21005158_s.jpg?w=1920&hash=6CDF49BA13D91552344F95FB2E76BA64",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 1,
        name: 'Pharmaceutical',
        href: '#',
        price: '$48',
        imageSrc: "https://emmainternational.com/wp-content/uploads/2021/09/Pharma_Test-Tube-Quality-Inspection-scaled.jpg",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 1,
        name: 'Metal & Heavy Industry',
        href: '#',
        price: '$48',
        imageSrc: "https://o-ring.info/catalog/categories/heavy-industry/eriks_heavy-industry-steel_1534775280.jpg",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 1,
        name: 'Rail Ways',
        href: '#',
        price: '$48',
        imageSrc: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-460676,resizemode-1,msid-81391435/industry/transportation/railways/passenger-fare-hike-must-to-push-indian-railways-on-reform-track.jpg",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 1,
        name: 'Pulp and Paper Industry',
        href: '#',
        price: '$48',
        imageSrc: "https://forsahub.com/wp-content/uploads/2022/02/paper-roll.jpg",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
  ]
  
  export default function GoldenAbout() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">  
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group lg:my-4">
                <div className="w-full h-full">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    // rounded-full bg-yellow-400
                    className="h-full w-full object-cover object-center group-hover:opacity-75 mask mask-circle"
                  />
                </div>
                <h3 className="mt-4 text-sm text-center text-gray-700">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

