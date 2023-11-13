import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import advice from "../images/advice.svg";
import doctor from "../images/doctor.svg";
import hospital from "../images/hospital.svg";
import bandage from "../images/bandage.svg";
import knife from "../images/knife.svg";
import vaccine from "../images/vaccine.svg";
import pad from "../images/writing_pad.svg";
import blob_service from "../images/blob_service.svg";
import blob_mam_service from "../images/mam.png";
import image from "../images/personIcon.png";
// import required modules
import { Autoplay, Pagination, Navigation} from "swiper/modules";


import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  var reviews = [
    {
      name: "Rao Pets Delhi",
      date: "5 months ago",
      title: "Genuine and Reliable Vet",
      description:
        "If you are looking for a genuine and reliable vet !! There you are , Dr Rituja is well educated well knowledgeable and humble person. I am from delhi and here is no exotic pet vet available. My frnd gave her reference and She did the surgery for my bird, and kept under observation ! Returned me as we were expecting ! All the best Stars Vet team.",
      img: image,
    },
    {
      name: "Rao Pets Delhi",
      date: "5 months ago",
      title: "Genuine and Reliable Vet",
      description:
        "If you are looking for a genuine and reliable vet !! There you are , Dr Rituja is well educated well knowledgeable and humble person. I am from delhi and here is no exotic pet vet available. My frnd gave her reference and She did the surgery for my bird, and kept under observation ! Returned me as we were expecting ! All the best Stars Vet team.",
      img: image,
    },
    {
      name: "Rao Pets Delhi",
      date: "5 months ago",
      title: "Genuine and Reliable Vet",
      description:
        "If you are looking for a genuine and reliable vet !! There you are , Dr Rituja is well educated well knowledgeable and humble person. I am from delhi and here is no exotic pet vet available. My frnd gave her reference and She did the surgery for my bird, and kept under observation ! Returned me as we were expecting ! All the best Stars Vet team.",
      img: image,
    },
  ];

  const [happyAnimalSlides, setHappyAnimalSlides] = useState(5);

  const sliderRef = useRef(null);
  let mouseDown = false;
  let startX, scrollLeft;

  useEffect(() => {
    const startDragging = (e) => {
      mouseDown = true;
      startX = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft = sliderRef.current.scrollLeft;
    };

    const stopDragging = (e) => {
      mouseDown = false;
    };

    const move = (e) => {
      e.preventDefault();
      if (!mouseDown) {
        return;
      }
      const x = e.pageX - sliderRef.current.offsetLeft;
      const scroll = x - startX;
      sliderRef.current.scrollLeft = scrollLeft - scroll;
    };

    // Add the event listeners
    if (sliderRef.current) {
      sliderRef.current.addEventListener("mousemove", move, false);
      sliderRef.current.addEventListener("mousedown", startDragging, false);
      sliderRef.current.addEventListener("mouseup", stopDragging, false);
      sliderRef.current.addEventListener("mouseleave", stopDragging, false);
    }

    const updateSlidesPerView = () => {
      const viewportWidth = window.innerWidth;

      if (viewportWidth >= 1280) {
        setHappyAnimalSlides(6);
      } else if (viewportWidth >= 1000) {
        setHappyAnimalSlides(5);
      } else if (viewportWidth >= 768) {
        setHappyAnimalSlides(4);
      } else if (viewportWidth >= 600) {
        setHappyAnimalSlides(3);
      } else if (viewportWidth >= 480) {
        setHappyAnimalSlides(2);
      } else {
        setHappyAnimalSlides(1);
      }
    };

    // Initial update
    updateSlidesPerView();

    // Event listener for window resize
    window.addEventListener("resize", updateSlidesPerView);

    // Cleanup event listeners when the component unmounts
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("mousemove", move, false);
        sliderRef.current.removeEventListener(
          "mousedown",
          startDragging,
          false
        );
        sliderRef.current.removeEventListener("mouseup", stopDragging, false);
        sliderRef.current.removeEventListener(
          "mouseleave",
          stopDragging,
          false
        );
      }

      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const happyPetsFilenames = [
    "1",
    "4",
    "8",
    "2",
    "9",
    "5",
    "6",
    "10",
    "7",
    "11",
  ];

  return (
    <>
      <Navbar />
      <section className="bg-green w-full pt-12 home relative" id="home">
        <div className="home-header text-left font-extrabold text-teal text-8xl ml-16 max-md:ml-12 bottom-20 absolute z-[1]">
          <h1> Care </h1>
          <h1> Compassion </h1>
          <h1> Conservation </h1>
        </div>
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="backdrop h-full w-full opacity-60 z-0 object-cover landscape-video"
        >
          <source src={require("../videos/landscape.mp4")} type="video/mp4" />
        </video>
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="backdrop h-full w-full opacity-60 z-0 object-cover potrait-video"
        >
          <source src={require("../videos/potrait.mp4")} type="video/mp4" />
        </video>
        <div className="cards">
          <Card
            heading={"Book Appoinment"}
            imageUrl={"book-appointment"}
            description={
              "We offer Professional, Reliable and Convenient healthcare services for your beloved pet. Book an appointment on your preferred date and time through our online portal"
            }
            link={"https://calendly.com/starsvet/appointment/"}
          />

          <Card
            heading={"Online Consultation"}
            imageUrl={"online-consultation"}
            description={
              "Your exotic and companion animals Vet is just a click away. Book a hassle-free appointment for online consultation."
            }
            link={"https://calendly.com/starsvet/online-consultation/"}
          />

          <Card
            heading={"Home Visit"}
            imageUrl={"home-visit"}
            description={
              "Enjoy our professional and emergency healthcare service at the comfort of your home. Schedule a home visit today!"
            }
            link={"https://calendly.com/starsvet/home-visit/"}
          />
        </div>
      </section>
      <section
        id="banner"
        className="bg-teal w-full h-[42rem] relative rounded-tl-3xl rounded-tr-3xl -mt-6 banner-content"
      >
        <div className="banner w-full h-52 bg-green text-teal mb-28 bottom-0 left-1/2 transform -translate-x-1/2 absolute py-4 px-8 flex flex-col justify-center items-center">
          <h3 className="font-semibold text-4xl">Welcome to the</h3>
          <h2 className="font-semibold text-7xl mt-2">
            Stars Vet Animal & Bird Clinic
          </h2>
          <p className="m-4">
            Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
        </div>
      </section>
      <section id="speciesWeTreat" className="w-full">
        <div className="text-8xl font-bold">
          <p className="animal-heading">
            <span className="text-green">Exotic & Companion Pets</span> <br />
            We Treat
          </p>
          <p className="animal-description w-1/2 mx-auto text-base mt-8 font-thin">
            We take pride in being your top choice as pet doctors. Our expertise
            extends beyond cats and dogs; we specialize in exotic veterinary
            care, catering to a wide range of unique and small-sized pets.
          </p>
        </div>
        <div className="grid-animal-desc flex flex-row justify-center mx-auto w-4/5 my-12 flex-wrap gap-4 px-6 max:px-2 max-2xl:w-full">
          
          <AnimalCard
            heading={"Dogs & Cats"}
            description={
              "Having trouble finding a vet for your dog or cat ? Look no more. Our skilled veterinarians offer advanced care for your companions."
            }
            imageUrl={"dogAndCat"}
          />

          <AnimalCard
            heading={"Birds"}
            description={
              "Our specialized care extends to all avian species, guaranteeing exceptional treatment for your feathered friends."
            }
            imageUrl={"bird"}
          />

          <AnimalCard
            heading={"Rabbits"}
            description={
              "With extensive knowledge, experience, and skill, we excel in maintaining the health of rabbits, surpassing mere carrot-based care."
            }
            imageUrl={"rabbit"}
            link={"species/rabbit"}
          />

          <AnimalCard
            heading={"Reptiles"}
            description={
              "Our expertise extends to caring for all reptiles, from bearded dragons to snakes, ensuring exceptional treatment for your scaly companions."
            }
            imageUrl={"reptile"}
            link={"species/reptile"}
          />

          <AnimalCard
            heading={"Guinea Pigs"}
            description={
              "Stars Vet specializes in guinea pigs, providing superior care, treatment, and support to ensure optimal health for your beloved companions."
            }
            imageUrl={"guineaPig"}
          />

          <AnimalCard
            heading={"Turtle"}
            description={
              "Stars Vet offers a comprehensive array of services, including fish surgery, catering to fish of diverse shapes and sizes."
            }
            imageUrl={"turtle"}
          />
        </div>
        <div className="slider-animal-desc w-full my-12">
          <Swiper
            rewind={true}
            spaceBetween={30}
            centeredSlides={true}
            style={{
              "--swiper-navigation-color": "#06a37e",
              "--swiper-pagination-color": "#06a37e",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-[80%]  flex flex-row justify-center h-[20rem]"
          >
            <SwiperSlide>
              <AnimalCard
                heading={"Dogs & Cats"}
                description={
                  "Having trouble finding a vet for your frog or axolotl? Look no more. Our skilled veterinarians offer advanced care for all amphibians."
                }
                imageUrl={"dogAndCat"}
                className="m-auto mt-6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimalCard
                heading={"Birds"}
                description={
                  "Our expertise extends to caring for all reptiles, from bearded dragons to snakes, ensuring exceptional treatment for your scaly companions."
                }
                imageUrl={"bird"}
                className="m-auto mt-6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimalCard
                heading={"Rabbits"}
                description={
                  "With extensive knowledge, experience, and skill, we excel in maintaining the health of rabbits, surpassing mere carrot-based care."
                }
                imageUrl={"rabbit"}
                className="m-auto mt-6"
                link={"species/rabbit"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimalCard
                heading={"Reptiles"}
                description={
                  "Our expertise extends to caring for all reptiles, from bearded dragons to snakes, ensuring exceptional treatment for your scaly companions."
                }
                imageUrl={"reptile"}
                link={"species/reptile"}
                className="m-auto mt-6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimalCard
                heading={"Guinea Pigs"}
                description={
                  "Stars Vet specializes in guinea pigs, providing superior care, treatment, and support to ensure optimal health for your beloved companions."
                }
                imageUrl={"guineaPig"}
                className="m-auto mt-6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AnimalCard
                heading={"Turtle"}
                description={
                  "Stars Vet offers a comprehensive array of services, including fish surgery, catering to fish of diverse shapes and sizes."
                }
                imageUrl={"turtle"}
                className="m-auto mt-6"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section id="whyChooseUs">
        <div className="mt-32 max-md:mt-[6rem]">
          <div className="heading text-8xl font-bold">
            <p className="animal-heading">
              Why <span className="text-green">Choose</span> Us?
            </p>
            <p className="animal-description w-1/2 mx-auto text-base mt-8 font-thin">
              We take pride in being your top choice as pet doctors. Our
              expertise extends beyond cats and dogs; we specialize in exotic
              veterinary care, catering to a wide range of unique and
              small-sized pets.
            </p>
          </div>
          <div className="why-vector my-20 max-lg:my-12 max-md:my-11">
            <div className="wh-vector w-80 max-lg:w-[]">
              <img
                className="h-28 max-xl:h-24 max-lg:h-24 max-md:h-20 max-sm:h-16"
                src={doctor}
                alt=""
              />
              <p className="vector-description w-3/5 font-semibold my-4 text-xl max-xl:text-lg max-lg:text-base max-md:text-base max-sm:text-sm">
                Expert pet care by qualified team
              </p>
            </div>
            <div className="wh-vector w-80 max-lg:w-[]">
              <img
                className="h-28 max-xl:h-24 max-lg:h-24 max-md:h-20 max-sm:h-16"
                src={hospital}
                alt=""
              />
              <p className="vector-description w-3/5 font-semibold my-4 text-xl max-xl:text-lg max-lg:text-base max-md:text-base max-sm:text-sm">
                State-of-the art facilities
              </p>
            </div>
            <div className="wh-vector w-80">
              <img
                className="h-28 max-xl:h-24 max-lg:h-24 max-md:h-20 max-sm:h-16"
                src={advice}
                alt=""
              />
              <p className="vector-description w-3/5 font-semibold my-4 text-xl max-xl:text-lg max-lg:text-base max-md:text-base max-sm:text-sm">
                Advice on nutirition and husbandry
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="ourServices">
        <div className="mt-32 max-md:mt-[6rem]">
          <div className="heading text-8xl font-bold">
            <p className="animal-heading">
              Our <span className="text-green">Services</span>
            </p>
            <p className="animal-description w-1/2 mx-auto text-base mt-8 font-thin">
              We take pride in being your top choice as pet doctors. Our
              expertise extends beyond cats and dogs; we specialize in exotic
              veterinary care, catering to a wide range of unique and
              small-sized pets.
            </p>
          </div>
          <div className="services_block">
            <div className="services_left">
              <div className="services_left_item">
                <div className="services_left_content">
                  <p className="services_left_header">Healthcare Packages</p>
                  <p className="services_left_middle">
                    The initial months with a new pet can be overwhelming.
                    Hence, we have designed packages ensuring peace of mind and
                    top-notch veterinary care for your new companion.
                  </p>
                  <p className="services_left_link">Learn more &gt;</p>
                  <img src={vaccine} alt="" />
                </div>
              </div>
              <div className="services_left_item">
                <div className="services_left_content">
                  <p className="services_left_header">
                    Sterilization (Desexing)
                  </p>
                  <p className="services_left_middle">
                    Sterilization, also referred to as desexing or neutering,
                    plays a crucial role in preventing potential issues that may
                    arise in your pet's future.
                  </p>
                  <p className="services_left_link">Learn more &gt;</p>
                  <img src={bandage} alt="" className="bandage_img" />
                </div>
              </div>
              <div className="services_left_item">
                <div className="services_left_content">
                  <p className="services_left_header ">General Health Check</p>
                  <p className="services_left_middle">
                    The initial months with a new pet can be overwhelming.
                    Hence, we have designed packages ensuring peace of mind and
                    top-notch veterinary care for your new companion.
                  </p>
                  <p className="services_left_link">Learn more &gt;</p>
                  <img src={pad} alt="" />
                </div>
              </div>
              <div className="services_left_item">
                <div className="services_left_content">
                  <p className="services_left_header">
                    Surgery and Anaesthesia
                  </p>
                  <p className="services_left_middle">
                    Although all surgeries and anesthesia carry inherent risks,
                    we prioritize providing the utmost care to minimize them for
                    your beloved pet.
                  </p>
                  <p className="services_left_link">Learn more &gt;</p>
                  <img src={knife} alt="" />
                </div>
              </div>
            </div>
            <div className="services_right">
              <div>
                <img src={blob_service} alt="" />
                <img
                  src={blob_mam_service}
                  alt=""
                  className="services_right_img2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="meetOurPets">
        <div className="mt-32 max-md:mt-[6rem]">
          <div className="heading text-8xl font-bold">
            <p className="animal-heading">
              Meet our <span className="text-green">Happy Pets</span>
            </p>
          </div>
        </div>
        <div className="w-full h-[30rem] max-xl:h-96 max-lg:mt-12  mt-16 pl-2 flex items-center">
          <Swiper
            slidesPerView={happyAnimalSlides}
            rewind={true}
            className="h-fit"
          >
            {happyPetsFilenames.map((filename, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-96 w-[98%] max-xl:h-80 max-lg:h-72 max-md:h-80 max-xl:rounded-sm rounded-md shadow-md"
                  style={{
                    backgroundImage:
                      `url(` +
                      require(`../images/gallery/${filename}.jpeg`) +
                      `)`,
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section id="testimonials">
        <div className="mt-32 max-md:mt-[6rem]">
          <div className="heading text-8xl font-bold mb-10">
            <p className="animal-heading">
              <span className="text-green">Testimonials</span>
            </p>
          </div>
          <div className="CustomerReviewCards pl-48" ref={sliderRef}>
            {reviews.map((review, index) => (
                <CustomerReviewCards
                  name={review.name}
                  date={review.date}
                  title={review.title}
                  description={review.description}
                  img={review.img}
                  key={review.id}
                />
            ))}
          </div>
        </div>
      </section>
      <section id="visitUs" className="w-full map py-10 max-xl:py-8">
        <div className="heading text-8xl font-bold mt-32 max-md:mt-[6rem]">
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

function Card({ heading, imageUrl, description, link }) {
  return (
    <div className="card">
      <div className="header">
        <h3>{heading}</h3>
        <div className="header-icon relative">
          <img
            src={require(`../images/${imageUrl}.svg`)}
            alt="icon"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9"
          />
        </div>
      </div>
      <div className="description flex flex-col justify-between">
        <p className="block">{description}</p>
        <a href={link} className="font-semibold hover:font-bold cur" target="_blank">
          Know More
        </a>
      </div>
    </div>
  );
}

function AnimalCard({ heading, description, imageUrl, className, link }) {
  return (
    <>
      <div className={`reptile-card relative ${className}`}>
        <div className="h-full w-3/5 text-left pr-2">
          <h2 className="text-3xl font-semibold">{heading}</h2>
          <div className="flex flex-col justify-between h-3/4">
            <p className="mt-2 text-xs">{description}</p>
            <Link to={link} className="font-semibold h-10">
              More information
            </Link>
          </div>
        </div>
        <div className="h-full w-2/5">
          <img
            src={require(`../images/${imageUrl}.png`)}
            alt="icon"
            className="absolute top-0 -right-7 h-80"
          />
          <div className="circle"></div>
        </div>
      </div>
    </>
  );
}

function CustomerReviewCards(props) {
  return (
    <div className="review mx-auto">
      <div className="review_header">
        <div className="review_photo">
          <img src={props.img} alt="" />
        </div>
        <div className="review_header_text">
          <div className="review_header_name">{props.name}</div>
          <div className="review_header_date">{props.date}</div>
        </div>
      </div>
      <div className="review_content">
        <div className="review_title">{props.title}</div>
        <div className="review_description">{props.description}</div>
      </div>
    </div>
  );
}
