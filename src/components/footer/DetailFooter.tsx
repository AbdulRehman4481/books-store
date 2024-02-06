import mainLogo from "../../assets/images/mainLogo.png";
import circle from "../../assets/images/Layer.png";
import { Link } from "react-router-dom";
export default function DetailFooter() {
  return (
    <>
      <div className="mx-16">
        <div className="flex flex-col-reverse sm:flex-row   m-10">
          <div className=" text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <img src={mainLogo} alt="" width={80} />
            </div>
            <p className="py-8 text-slate-500">
              Build a modern and creative
              <br /> website with crealand
            </p>
            <div className="flex justify-center">
              <img src={circle} alt="" width={30} className="mx-1" />
              <img src={circle} alt="" width={30} className="mx-1" />
              <img src={circle} alt="" width={30} className="mx-1" />
              <img src={circle} alt="" width={30} className="mx-1" />
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-14    md:grid-cols-4 md:grid-flow-row sm:grid-cols-2 sm:grid-flow-row sm:gap-12 sm:ml-32">
            <div className="flex flex-col">
              <h1 className="text-blue-950 text-lg font-bold font-['OpenSans']">
                Product
              </h1>
              <Link
                to={"/"}
                className="text-blue-950 text-base font-normal font-['OpenSans'] py-1"
              >
                Landing Page
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 text-base font-normal font-['OpenSans'] py-1"
              >
                Features
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 text-base font-normal font-['OpenSans'] py-1"
              >
                Documentation
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 text-base font-normal font-['OpenSans'] py-1"
              >
                Referral Program
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                Pricing
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="text-blue-950 py-1 text-lg font-bold font-['OpenSans']">
                Services
              </h1>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                Documentation
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                Design
              </Link>

              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                Themes
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                Illustrations
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                UI Kit
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="text-blue-950 py-1 text-lg font-bold font-['OpenSans']">
                Company
              </h1>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                About
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                Terms
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                Privacy Policy
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                Careers
              </Link>
            </div>
            <div className="flex flex-col">
              <h1 className="text-blue-950 py-1 text-lg font-bold font-['OpenSans']">
                More
              </h1>

              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                Documentation
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                License
              </Link>
              <Link
                to={"/"}
                className="text-blue-950 py-1 text-base font-normal font-['OpenSans']"
              >
                Change Log
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
