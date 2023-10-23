import hammer from "@/Images/wooden-gavel.jpg";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import paperPlane from "@/Images/paperplane.png";
const Card = (props:any) => {
  return (
    <>
      <div className={`w-full py-5 ${props.outerClass}`} >
        <div className=" items-center flex flex-col py-2">
          <Image src={props?.img} alt="link" height={50} width={50}></Image>
        </div>
        <div className={` items-center flex flex-col mt-3 ${props?.titleSize} font-serif font-bold text-white px-4`}>
          <h1 className="text-center">{props?.name}</h1>
        </div>
        <div className={`items-center flex flex-col mt-2 font-serif ${props?.descSize} font-sans leading-loose text-white pl-10 pr-10 text-center`}>
          <p>{props?.Description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
