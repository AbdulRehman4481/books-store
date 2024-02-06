import Slider from "./Slider";
import useBookDetail from "../../hooks/useBookDetail";

export default function BookDetail() {
  const {
    selectedBook,
  }=useBookDetail()
 
  return (
    <>
      <div className="flex text-center lg:text-start flex-col justify-center items-center lg:flex-row lg:justify-around mx-20">
        <div>
          <div>
            <span className="text-amber-500 text-3xl font-bold font-['Hanken Grotesk'] leading-[60px] tracking-tight">
              {selectedBook?.categories || ""}:
              <br />
            </span>
            <span className="text-blue-950 w-fit text-2xl md:text-3xl lg:text-4xl font-bold font-'Hanken Grotesk' leading-[40px] md:leading-[50px] lg:leading-[60px] tracking-tight">
              {selectedBook?.title || ""}
            </span>
            <p className="text-blue-950 text-md my-3 font-semibold font-['Hanken Grotesk'] leading-normal tracking-tight">
              A BOOK BY {selectedBook?.authors || ""}
            </p>
            <p className=" text-slate-500 mt-3 text-sm font-normal font-['Open Sans'] leading-loose">
              {selectedBook?.description || ""}
            </p>
            <button className="text-white mt-10 bg-blue-700 py-4 px-2 rounded-md font-bold text-sm">
              See on Google Books
            </button>
          </div>
        </div>
        <div className="">
          <div className="w-[300px] lg:w-[380px] h-[350px] lg:h-[450px] flex justify-center items-center mt-2 lg:mt-0  bg-gray-200">
            <img
              src={selectedBook?.thumbnail || ""}
              alt="Thumbnail"
              className="w-[200px] lg:w-[250px] h-[320px] lg:h-[374px] cursor-pointer "
            />
          </div>
        </div>
      </div>

      <div className="w-full  h-[550px] bg-blue-950 p-10 my-14">
        <div className="flex justify-center">
          <Slider />
        </div>
      </div>
    </>
  );
}
