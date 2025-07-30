// import woman from "../assets/category/woman.jpg";
// import eyewear from "../assets/category/eyewear.jpg";
// const Category = () => {
//   return (
//     <>
//       <div className="flex mx-[2%]">
//         <div className="grid grid-cols-2">
//           <div className="bg-blue-500 h-[214px] w-[400px]"><img src={eyewear} className="object-cover h-full w-full"/></div>
//           <div className="bg-green-500 h-[214px] w-[400px]">jsdlkfj</div>
//           <div className="bg-pink-500 h-[214px] w-[400px]">jsdlkfj</div>
//           <div className="bg-purple-500 h-[214px] w-[400px]">jsdlkfj</div>
//           <div className="bg-orange-500 h-[214px] w-[400px]">jsdlkfj</div>
//           <div className="bg-slate-500 h-[214px] w-[400px]">jsdlkfj</div>
//         </div>
//         <div className="bg-red-500 h-vh w-[500px]"><img src={woman} className="object-cover "/></div>
//       </div>
//     </>
//   );
// };

// export default Category;



import woman from "../assets/category/woman.jpg";
import eyewear from "../assets/category/eyewear.jpg";

const Category = () => {
  return (
    <>
    
      <div className="flex items-start mx-[2%]">
        <div className="grid grid-cols-2">
          <div className="bg-blue-500 h-[214px] w-[400px]">
            <img src={eyewear} className="object-cover h-full w-full" alt="eyewear" />
          </div>
          <div className="bg-green-500 h-[214px] w-[400px]">jsdlkfj</div>
          <div className="bg-pink-500 h-[214px] w-[400px]">jsdlkfj</div>
          <div className="bg-purple-500 h-[214px] w-[400px]">jsdlkfj</div>
        </div>
        <div className="bg-red-500 w-[500px] h-[428px]">
          <img src={woman} className="object-cover h-full w-full" alt="woman" />
        </div>
      </div>
      <div className="flex mx-[2%]">
        <div className="bg-orange-500 h-[214px] w-[400px]">jsdlkfj</div>
        <div className="bg-slate-500 h-[214px] w-[400px]">jsdlkfj</div>
         <div className="bg-orange-500 h-[214px] w-[500px]">jsdlkfj</div>
    </div>
    </>
  );
};

export default Category;

