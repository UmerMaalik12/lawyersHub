import Navbar from "@/Components/navbar";
import "tailwindcss/tailwind.css";
import Slider from "@/Components/SliderWithButton";
import Card from "@/Components/Card";
import Sidebar from "@/Components/sidebar"
export default function Home() {
  return (
    <>
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Slider></Slider>
        </div>
        <div className="h-auto grid space-x-1 container mx-auto grid-cols-3 max-w-[70%] mt-[-50px] bg-white">
          <div>
            <Card></Card>
          </div>
          <div>
            <Card></Card>
          </div>
          <div>
            <Card></Card>
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          <h1 className="font-normal font-playfair font-serif text-[50px] self-center ">How It Works!</h1>
         
         
        
        </div>
        <Sidebar></Sidebar>
        
      </div>
    </>
  );
}
