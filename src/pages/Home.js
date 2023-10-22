import React from "react";
import Navbar from "../components/Navbar";

import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-green w-full pt-12 home">
        <div className="text-left font-extrabold text-teal text-8xl ml-16 mt-80">
          <h1> Care </h1>
          <h1> Compassion </h1>
          <h1> Conservation </h1>
        </div>

        <div className="cards">
          <Card
            heading={"Book Appoinment"}
            imageUrl={"book-appointment"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />

          <Card
            heading={"Online Consultation"}
            imageUrl={"online-consultation"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />

          <Card
            heading={"Home Visit"}
            imageUrl={"home-visit"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
      </section>
      <section className="bg-teal w-full h-screen relative rounded-l-3xl rounded-r-3xl -mt-6">
        <div className="banner w-full h-52 bg-green text-teal top-2/4 absolute py-4 px-8">
          <h3 className="font-semibold text-4xl">Welcome to the</h3>
          <h2 className="font-semibold text-7xl mt-2">
            Stars Vet Animal & Bird Clinic
          </h2>
          <p className="m-4">
            Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
        </div>
      </section>
      <section className="w-full h-screen">
        <div className="heading text-8xl font-bold">
          <p>
            <span className="text-green">Exotic Pets</span> We Treat
          </p>
        </div>
        <p className="w-1/2 mx-auto text-base mt-8 font-thin"> We take pride in being your top choice as pet doctors. Our expertise extends beyond cats and dogs; we specialize in exotic veterinary care, catering to a wide range of unique and small-sized pets.</p>
        <div className="flex flex-row justify-center w-full mt-20 flex-wrap gap-4 px-10">
          <AnimalCard heading ={"Reptiles"} 
          description = {"Our expertise extends to caring for all reptiles, from bearded dragons to snakes, ensuring exceptional treatment for your scaly companions."}imageUrl = {"reptile"}/>

          <AnimalCard heading ={"Rabbits"} 
          description = {"With extensive knowledge, experience, and skill, we excel in maintaining the health of rabbits, surpassing mere carrot-based care."}
          imageUrl = {"rabbit"}/>

          <AnimalCard heading ={"Birds"} 
          description = {"Our expertise extends to caring for all reptiles, from bearded dragons to snakes, ensuring exceptional treatment for your scaly companions."}
          imageUrl = {"bird"}/>

          <AnimalCard heading ={"Guinea Pigs"} 
          description = {"Stars Vet specializes in guinea pigs, providing superior care, treatment, and support to ensure optimal health for your beloved companions."}
          imageUrl = {"guineaPig"}/>

          <AnimalCard heading ={"Fish"} 
          description = {"Stars Vet offers a comprehensive array of services, including fish surgery, catering to fish of diverse shapes and sizes."}
          imageUrl = {"fish"}/>

          <AnimalCard heading ={"Amphibians"} 
          description = {"Having trouble finding a vet for your frog or axolotl? Look no more. Our skilled veterinarians offer advanced care for all amphibians."}
          imageUrl = {"amphibian"}/>
        </div>
      </section>
    </>
  );
}

function Card({ heading, imageUrl, description }) {
  return (
    <div className="card">
      <div className="header">
        <h3>{heading}</h3>
        <div className="header-icon relative">
          <img
            src={require(`../images/${imageUrl}.svg`)}
            alt="icon"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 "
          />
        </div>
      </div>
      <div className="description flex flex-col justify-between h-3/5">
        <p className="block">{description}</p>
        <a href="#" className="font-semibold">
          Know More
        </a>
      </div>
    </div>
  );
}

function AnimalCard({heading,description, imageUrl}){
  return(
    <>
    <div className="reptile-card relative">
      <div className="h-full w-3/5 text-left pr-6">
        <h2 className="text-3xl font-semibold">{heading}</h2>
        <div className="flex flex-col justify-between h-3/4">
          <p className="mt-2 text-xs">{description}</p>
          <a href="#" className="font-semibold">More information</a>
        </div>
      </div>
      <div className="h-full w-2/5">
      <img
            src={require(`../images/${imageUrl}.png`)}
            alt="icon"
            className="absolute top-0 -right-6 h-80"
          />
        <div className="circle"></div>
      </div>
    </div>
    </>
  );
}