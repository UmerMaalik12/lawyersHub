import hammer from "@/Images/wooden-gavel.jpg";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import paperPlane from "@/Images/paperplane.png";
const Slider = () => {
  return (
    <>
      <div className="border-2 border-black h-auto">
        <div
          style={{ backgroundImage: `url(${hammer.src})` }}
          className="grid  grid-cols-2  h-96 bg-cover bg-center bg-no-repeat  flex"
        >
          <div></div>
          <div className="top-[30%] left-[55%] absolute flex flex-col ">
            <h1 className="font-medium font-playfair font-serif text-[45px] h-full">
              Easy Legal Help
            </h1>
            <h3 className="font-normal font-playfair font-serif text-[20px]">
              Lawyer's Hub provide a gateway for lawyers and clients.
            </h3>
            {/* <button className='bg-black text-white w-[20%] self-center mt-6 rounded-lg h-[30px]'>Book Now</button>
             */}
            <button className=" flex items-center justify-center py-2 relative left-[20%] rounded-full bg-black mt-6 text-white text-sm  w-[22%]">
              Book Now
              <Image
                src={paperPlane}
                alt="link"
                height={12}
                width={12}
                className="ml-1"
              ></Image>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
