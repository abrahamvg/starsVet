import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Rabbit() {
  const services = [
    "Health check-up",
    "Desexing",
    "Surgery and medical problems",
    "Dentistry",
    "Nutrition and housing guidelines",
  ];
  return (
    <>
      <Navbar />
      <section className="w-full relative">
        <div className="h-[44rem]">
          <div className="mt-4 absolute -top-32 -left-10 z-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1920"
              height="739"
              viewBox="0 0 1920 739"
              fill="none"
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
          <div className="absolute top-56 left-1/2 -translate-x-1/2 text-teal flex flex-col items-center">
            <h1 className=" text-9xl font-semibold "> Rabbits</h1>
            <p className=" w-4/5 text-lg">
              Searching for a vet who can treat your pet rabbit? search no more,
              you’ve found us!
            </p>
            <a
              href="#"
              target="_blank"
              className="bg-caribbeanGreen px-4 py-3 rounded-md mt-8 text-xl"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center">
          <h3 className="text-6xl text-green font-medium w-3/5 tracking-tight max-2xl:text-5xl max-xl:w-4/5 max-md:text-4xl max-sm:text-3xl">
            Providing The Best Veterinary Service To Your Beloved Rabbit
          </h3>
          <p className=" w-[60%] my-8 text-lg leading-6 font-light max-2xl:text-base max-xl:text-sm max-xl:mt-6 max-xl:w-4/5 max-md:text-sm max-sm:text-[0.75rem] max-sm:leading-4">
            Keeping your rabbit healthy takes more than just a carrot; it
            requires knowledge and dedication. Furthermore, a rabbit vet who has
            a good hold on all rabbit related things. You can now relax as we
            ‘Stars Vet’ have immense experience and are specialised in taking
            care of rabbits.
          </p>
        </div>
        <div className="px-28 my-4 mt-20 flex flex-row justify-between items-center max-2xl:px-20 max-xl:px-12 max-xl:my-12 max-lg:flex-col max-lg:my-28 max-md:px-8 max-md:my-[6rem]">
          <div>
            <h3 className="hidden font-bold max-xl:text-6xl max-lg:block max-md:w-4/5 max-md:text-[3rem] mx-auto max-sm:text-[2.75rem]">
              Did You <span className="text-green max-md:text-7xl max-sm:text-6xl"> Know ?</span>
            </h3>
            <img
              src={require(`../../images/species/Rabbit/rabbit.png`)}
              className="mx-auto relative -top-5 h-[48rem] rotate-[20deg] max-2xl:h-[40rem] max-xl:h-[36rem] max-lg:rotate-[2deg] max-lg:top-0 max-lg:mt-4 max-lg:h-[28rem] max-md:h-80 max-sm:h-72"
              alt=""
            />
          </div>
          <div className="w-[50%] flex flex-col items-end text-right max-lg:text-center max-lg:w-full max-lg:items-center">
            <h3 className="text-[5rem] font-bold max-2xl:text-7xl max-xl:text-6xl max-lg:hidden">
              Did You <span className="text-green"> Know ?</span>
            </h3>
            <p className="w-4/5 mt-2 text-lg leading-6 font-light max-2xl:text-base max-xl:text-sm max-2xl:mt-4 max-lg:w-3/5 max-md:w-4/5 max-sm:text-[0.75rem] max-sm:w-full max-sm:leading-4">
              Rabbits are very notorious and expert in hiding their problems. A
              minute change in their behaviour should alarm you. Sooner the
              problem is diagnosed, faster the right medication and treatment
              can be prescribed which will give us better outcome.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="px-32 flex flex-row justify-between items-center max-2xl:px-20 max-xl:px-12 max-lg:flex-col max-md:px-8">
          <div className="w-[50%] flex flex-col items-start text-left max-lg:text-center max-lg:items-center max-lg:w-full">
            <h3 className="text-[4rem] font-bold leading-[5rem] max-2xl:text-[4rem] max-2xl:leading-[4rem] max-xl:text-[2.75rem] max-xl:leading-10 max-sm:text-[2.25rem]">
              Why Choose <br />
              <span className="text-green text-[5.5rem] max-2xl:text-7xl max-xl:text-6xl max-lg:w-full max-sm:text-5xl">
                Stars Vet ?
              </span>
            </h3>
            <p className="w-4/5 mt-2 text-lg leading-6 font-light max-2xl:mt-4 max-2xl:text-base max-xl:text-sm max-lg:w-3/5 max-lg:mb-8 max-lg:leading-5 max-md:w-4/5 max-sm:text-[0.75rem] max-sm:w-full max-sm:leading-4">
              Stars Vet has an experienced team and provides advanced rabbit
              care. From regular check-ups to nutrition and housing guidelines
              and everything in between, we are capable of doing all. We have
              wide range of food and toy products that are safe for rabbits.
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
      <section>
        <div className="heading text-8xl font-bold mt-32 max-lg:mt-28 max-md:mt-[6rem]">
          <h2 className="animal-heading">
            <span className="text-green">Services</span>
          </h2>
        </div>
        <div className="w-3/5 mx-auto flex flex-row flex-wrap justify-center gap-4 mt-12 max-xl:w-4/5 max-lg:mt-8 max-md:w-4/5">
          {services.map((service) => (
            <div className="font-semibold text-lg px-6 py-4 border-2 w-fit border-green rounded-md hover:bg-green hover:text-teal hover:cursor-default max-lg:px-3 max-lg:py-2 max-md:text-base max-sm:text-sm">
              {service}
            </div>
          ))}
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
