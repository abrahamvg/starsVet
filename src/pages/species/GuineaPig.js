import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Hello() {
  const services = [
    "Health check-up",
    "Desexing",
    "Surgery and medical problems",
    "Nutrition and housing guidelines",
    "Breeding advice",
    "Dental work and special dental X-Ray",
  ];
  return (
    <>
      <Navbar />
      <section className="w-full relative">
        <div className="h-[44rem] max-lg:h-[42rem] max-md:h-[36rem] max-sm:h-[32rem]">
          <div className="mt-4 absolute -top-32 -left-10 z-1 max-xl:-left-[24rem] max-lg:-top-48 max-md:-top-72 max-lg:-left-[40rem] max-sm:-top-80 max-[480px]:-top-72 max-[480px]:-left-[40rem]">
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
            <h1 className=" w-[50rem] text-9xl font-semibold max-lg:text-8xl max-sm:text-[5rem] max-[480px]:text-[4.5rem]">
              Guinea Pigs
            </h1>
            <p className=" w-[36rem] text-lg mt-6 max-lg:text-base max-xl:mt-4 leading-5 max-md:mt-2 max-md:text-sm max-sm:w-full max-sm:text-[0.8rem] max-[480px]:mt-[24px] max-[480px]:w-[19.5rem] max-sm:leading-4">
              Searching for a vet who can treat your pet guinea pig ? search no
              more, you’ve found us!
            </p>
            <a
              href="#"
              target="_blank"
              className="bg-caribbeanGreen px-4 py-3 rounded-md mt-8 text-xl max-md:text-base max-md:px-3 max-md:py-2 max-sm:mt-6"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center">
          <h3 className="text-6xl text-green font-medium w-3/5 tracking-tight max-2xl:text-5xl max-xl:w-4/5 max-md:text-4xl max-sm:text-3xl">
            Providing The Best Veterinary Service To Your Beloved Guinea Pig
          </h3>
          <p className=" w-[60%] my-8 text-lg leading-6 font-light max-2xl:text-base max-xl:text-sm max-xl:mt-6 max-xl:w-4/5 max-md:text-sm max-sm:text-[0.75rem] max-sm:leading-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            laboriosam quidem quisquam non excepturi perspiciatis corrupti, sed
            asperiores harum, magnam aperiam. Alias facilis similique esse quasi
            autem. Quibusdam, reiciendis omnis.
          </p>
        </div>
        <div className="px-28 my-4 mt-20 flex flex-row justify-between items-center max-2xl:px-20 max-xl:px-14 max-xl:my-12 max-lg:flex-col max-lg:my-28 max-md:px-8 max-md:my-[6rem]">
          <div>
            <h3 className="hidden font-bold max-xl:text-6xl max-lg:block max-md:w-4/5 max-md:text-[3rem] mx-auto max-sm:text-[2.75rem]">
              We’re <span className="text-green">Experts </span>
              in Guniea Pig Health
            </h3>
            <img
              src={require(`../../images/species/GuineaPig/guineaPig.png`)}
              className="w-4/5 h-auto max-2xl:w-full max-lg:w-auto mx-auto relative -top-5 max-2xl:h-[40rem] max-xl:h-[36rem] max-lg:rotate-[2deg] max-lg:top-0 max-lg:mt-4 max-lg:h-[28rem] max-md:h-80 max-sm:h-72"
              alt=""
            />
          </div>
          <div className="w-[50%] flex flex-col items-end text-right max-lg:text-center max-lg:w-full max-lg:items-center">
            <h3 className="text-[5rem] leading-[5rem] mb-8 font-bold max-2xl:text-7xl max-xl:text-6xl max-lg:hidden">
              We’re <span className="text-green">Experts </span>
              in Guniea Pig Health
            </h3>
            <p className="w-4/5 mt-2 text-lg leading-6 font-light max-2xl:text-base max-2xl:mt-4 max-xl:w-[90%] max-lg:w-3/5 max-md:w-4/5 max-sm:text-[0.75rem] max-sm:w-full max-sm:leading-4">
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
            <h3 className="text-6xl font-bold leading-[3.5rem] max-2xl:text-[3.25rem] max-2xl:leading-[3.25rem] max-xl:text-[2.75rem] max-xl:leading-10 max-sm:text-[2.25rem]">
              We Offer A Range Of Guinea Pig Veterinary Services
            </h3>
            <p className="w-4/5 mt-6 text-lg leading-6 font-light max-2xl:w-[90%] max-2xl:mt-4 max-2xl:text-base max-xl:w-full max-lg:w-4/5 max-lg:mb-8 max-lg:leading-6 max-lg:mt-8 max-md:w-4/5 max-sm:text-[0.75rem] max-sm:w-full max-sm:leading-4">
              Guinea pigs belong to the cavy family of rodents. Guinea pigs are
              herbivores and their teeth grow continuously. Their dentistry is
              managed by the constant grinding on food and of course, visits to
              us. With our wide range of services, we can ensure that your
              guinea pig is living the healthiest and happiest life that it can.
              Our team have a special interest and experience with exotic and
              unusual pets, especially guinea pigs.
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
        <div className="w-3/5 mx-auto flex flex-row flex-wrap justify-center gap-4 mt-12 max-xl:w-4/5 max-lg:mt-8 max-md:w-full">
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
