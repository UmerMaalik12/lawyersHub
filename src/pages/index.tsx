import Navbar from "@/Components/navbar";
import "tailwindcss/tailwind.css";
import Slider from "@/Components/SliderWithButton";
import Card from "@/Components/Card";
import Sidebar from "@/Components/sidebar"
import Easyness from '@/Images/easyness.png'
import conectivity from '@/Images/connectivity.png'
import understanding from '@/Images/understanding.png'
export default function Home() {
  const KeyFeature=[{
    'img':Easyness,
    'name':"Easyness",
    "description":"Proceess of hiring a laywer cannot be much easier now."
  },{
    'img':conectivity,
    'name':"Conectivity",
    "description":"Easy to connect with a lawyer of your choice."
  },{
    'img':understanding,
    'name':"Better Understanding",
    "description":"A better understanding betwwen Client and Lawyer"
  }]
  return (
    <>
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Slider></Slider>
        </div>
        <div className="h-auto gap-2 mx-auto flex w-3/4 mt-[-50px]">
          {KeyFeature?KeyFeature.map((entry)=>(
            <Card outerClass={`bg-sky-950 `} Description={entry.description} name={entry.name} img={entry.img} titleSize={"text-2xl"} descSize={"text-sm"}></Card>
          )):null}      
        </div>
        <div className="mt-5 flex flex-col">
          <h1 className="font-normal font-playfair font-serif text-[50px] self-center ">How It Works!</h1>
        </div>
        <Sidebar></Sidebar>
        
      </div>
    </>
  );
}
