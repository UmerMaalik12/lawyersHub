import hammer from "@/Images/wooden-gavel.jpg";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import paperPlane from "@/Images/paperplane.png";
const Card = () => {
  return (
    <>
      <div className="bg-sky-950 h-[300px] w-full">
        <div className=" items-center flex flex-col pt-10">
          <Image src={paperPlane} alt="link" height={50} width={50}></Image>
        </div>
        <div className=" items-center flex flex-col mt-5 text-[25px] font-serif font-bold text-white">
          <h1>Helping Business</h1>
        </div>
        <div className="items-center flex flex-col mt-3 font-light text-[15px] font-sans leading-loose text-white pl-10 pr-10 text-center">
          <p>Business requires strong legislative background to operate well</p>
        </div>
      </div>
    </>
  );
};

export default Card;
