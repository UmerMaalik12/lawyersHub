import "tailwindcss/tailwind.css";
import Image from "next/image";
// import '../../styles/index.css'
const Sidebar = () => {
  return (
    <>
      <div>
      

<div>

  <input id="tab1" type="radio" name="tabs" checked/>
  <label htmlFor="tab1">Client</label>

  <input id="tab2" type="radio" name="tabs"/>
  <label htmlFor="tab2">Lawyer</label>

  
  <section id="content1">
   For clinet card
  </section>

  <section id="content2">
  For Laywer
  </section>

  

</div>
      </div>
    </>
  );
};

export default Sidebar;
