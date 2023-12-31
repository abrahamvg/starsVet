import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Reptile() {
  const services = [
    "General health check-up",
    "Blood test and DNA blood sexing",
    "Beak and Nail Trimming",
    "Eye treatment and Surgery",
    "Beak replacement and wing transplant [imping]",
    "Nutrition and housing guidelines",
    "X-Ray, Anaesthesia and surgery with hospitalization",
    "Desexing",
    "Pathological lab testing and faecal testing",
    "Chlamydia and lead testing",
    "Breeding and chronic egg-laying",
  ];
  return (
    <>
      <Navbar />
      <section className="w-full relative">
        <div className="h-[44rem] max-lg:h-[42rem] max-md:h-[36rem] max-sm:h-[32rem]">
          <div className="mt-4 absolute -top-32 -left-10 z-1 max-xl:-left-[24rem] max-lg:-top-48 max-md:-top-72 max-lg:-left-[40rem] max-sm:-top-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1920"
              height="739"
              viewBox="0 0 1920 739"
              fill="none"
              className="h-full"
            >
              <g filter="url(#filter0_i_436_187)">
                <path
                  d="M1920 411.447C1725.7 544.694 1443.87 698.57 1188.1 732.833C789.541 786.223 297.768 474.284 0 514.396V0H1920V411.447Z"
                  fill="#06A37E"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_436_187"
                  x="0"
                  y="0"
                  width="1920"
                  height="756"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="17" />
                  <feGaussianBlur stdDeviation="67" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0147647 0 0 0 0 0.247222 0 0 0 0 0.191985 0 0 0 0.18 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_436_187"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="absolute top-56 left-1/2 -translate-x-1/2 text-teal flex flex-col items-center max-lg:top-44 max-lg:w-3/5 max-md:top-36 max-md:w-4/5 max-sm:top-32">
            <h1 className=" text-9xl font-semibold max-lg:text-8xl max-sm:text-[5rem] max-[400px]:text-[4rem]">
              Birds
            </h1>
            <p className=" w-4/5 text-lg max-lg:text-base mt-8 leading-5 max-md:mt-6 max-md:text-sm max-sm:w-full max-sm:text-[0.8rem] max-sm:leading-4">
              Searching for a vet who can treat your most loved pet bird, search
              no more. We are here!!
            </p>
            <a
              href="#"
              target="_blank"
              className="bg-caribbeanGreen px-4 py-3 rounded-md mt-8 text-xl max-md:text-base max-md:px-3 max-md:py-2 max-sm:mt-6 max-[400px]:mt-4"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center">
          <h3 className="text-6xl text-green font-medium w-3/5 tracking-tight max-2xl:text-5xl max-xl:w-4/5 max-md:text-4xl max-sm:text-3xl">
            Providing The Best Veterinary Service For Your Pet Bird
          </h3>
          <p className=" w-[60%] my-8 text-lg leading-6 font-light max-2xl:text-base max-xl:text-sm max-xl:mt-6 max-xl:w-4/5 max-md:text-sm max-sm:text-[0.75rem] max-sm:leading-4">
            Stars Vet is one of the best avian and exotic animal hospital and we
            treat from finches to macaws, parrots and every species of birds out
            there.
          </p>
        </div>
        <div className="px-28 my-16 flex flex-row justify-between items-center max-2xl:px-20 max-xl:px-12 max-xl:my-32 max-lg:flex-col max-md:px-8 max-md:my-[6rem] max-sm:p-6 max-md:mt-8">
          <div>
            <h3 className="hidden font-bold max-xl:text-6xl max-lg:block max-lg:text-center max-md:text-6xl mx-auto max-sm:text-5xl">
              Why <span className="text-green"> Choose </span>
              Us ?
            </h3>
            <img
              src={require(`../../images/species/Birds/birds.png`)}
              className="mx-auto relative -top-5 h-[38rem] -rotate-[5deg] max-2xl:h-[28rem] max-xl:h-[24rem] max-lg:top-0 max-lg:mt-4 max-lg:h-[28rem] max-md:h-80 max-sm:h-72 max-[400px]:h-64"
              alt=""
            />
          </div>
          <div className="w-[50%] pl-[2.5%] flex flex-col items-start text-left max-xl:w-3/5 max-lg:text-center max-lg:w-full max-lg:items-center">
            <h3 className="text-[4rem] -ml-6 font-bold max-2xl:text-6xl max-xl:text-5xl max-lg:hidden">
              Why <span className="text-green">Choose </span> Us ?
            </h3>
            <ul className="list-[circle] mt-4 text-lg leading-8 font-light max-xl:text-[1rem] max-xl:leading-8  max-lg:p-4 max-lg:rounded-md max-lg:text-left max-md:text-base max-sm:text-sm max-md:leading-7 max-sm:leading-6 max-sm:px-2 max-[400px]:p-4 max-[400px]:leading-5 max-[400px]:text-[0.85rem]">
              {services.map((service) => (
                <li className="max-md:mb-2"> {service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="px-32 flex flex-row justify-between items-center max-2xl:px-20 max-xl:px-12 max-lg:flex-col max-md:px-8">
          <div className="w-[50%] flex flex-col items-start text-left max-lg:text-center max-lg:items-center max-lg:w-full">
            <h3 className="text-[4rem] font-bold leading-[5rem] max-2xl:text-[4rem] max-2xl:leading-[4rem] max-xl:text-[2.75rem] max-xl:leading-10 max-lg:text-5xl max-sm:text-[2.25rem]">
              Reptiles Vet <br />
              <span className="text-green text-[5.5rem] max-2xl:text-7xl max-xl:text-6xl max-lg:text-7xl max-lg:w-full max-sm:text-5xl">
                That Care{" "}
              </span>
            </h3>
            <p className="w-4/5 mt-2 text-lg leading-6 font-light max-2xl:mt-4 max-2xl:text-base max-xl:w-4/5 max-lg:my-8 max-lg:leading-5 max-sm:text-[0.75rem] max-sm:w-full max-sm:leading-4">
              Birds are delicate creatures and require special care when they’re
              not well. Stars Vet is specialized in avian species and have an
              experienced team with great knowledge and dedication to care for
              your loved ones.
            </p>
          </div>
          <div> 
            <img
              src={require(`../../images/mam.png`)}
              className="relative -top-5 h-[32rem] max-xl:h-[24rem] max-lg:top-0 max-md:h-80 max-sm:h-72"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="visitUs" className="w-full map py-10 max-xl:py-8">
        <div className="heading text-8xl font-bold mt-32 max-lg:mt-28 max-md:mt-[6rem]">
          <h2 className="animal-heading">
            <span className="text-green">Visit</span> Us At
          </h2>
        </div>
        <iframe
          title="Google Maps"
          loading="eager"
          allowFullScreen={true}
          src={
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.0258090517577!2d75.751973!3d26.902676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e2327609c5%3A0x86bf91c39ce4aee!2sStars%20Vet%20Animal%20and%20Bird%20Clinic!5e0!3m2!1sen!2sus!4v1698785660456!5m2!1sen!2sus"
          }
          className="mapsGoogle"
        ></iframe>
      </section>
      <Footer />
    </>
  );
}
