import { useEffect, useState } from "react";

import heartLogo2 from "../../assets/images/heart1.png";
import { useAppDispatch, useAppSelector } from "../../store/storeHook";
import { fetchSearchBooks } from "../../store/reducer/SearchReducer";
import { Link } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

export default function Search() {
  const {
    handleShowMore,
    searchesLoading,
    searches,

    showMore,
    error,
    setSearch,
    search
  }=useSearch()
  
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-blue-950 py-3 text-5xl font-bold font-['Hanken Grotesk'] leading-[60px] tracking-tight">
          Search Books
        </h1>
        <div className=" w-[400px] md:w-[641px] h-[72px]  bg-neutral-100 rounded-lg px-6">
          <input
            type="text"
            value={search}
            placeholder="Search query"
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-full bg-transparent focus:outline-none text-xl"
          />
        </div>
      </div>

      <div className="md:mx-20">
        <div>
          <h1 className="text-blue-950 text-[32px] font-bold font-['Hanken Grotesk'] leading-10 tracking-tight my-6">
            Search Results
          </h1>
        </div>

        {error ? (
          <p>No Book Available</p>
        ) : searchesLoading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-fit xl:grid-cols-3  mx-1 my-6">
            {searches &&
              searches?.slice(0, showMore).map((book, i) => (
                <div
                  key={i}
                  className="w-[358px] xl:max-w-[358px] lg:max-w-[330px] md:max-w-[330px] mb-2 mr-2 h-[260px] rounded-lg border-2 border-gray-100 p-2 flex "
                >
                  <Link to={`/book/${book.id}`}>
                    <img
                      src={book.thumbnail}
                      alt="thumail"
                      className="w-40 h-[238px] cursor-pointer bg-red-400 rounded-md "
                    />
                  </Link>
                  <div className="ml-5 ">
                    <h1 className="text-blue-950 py-2 text-[22px] font-semibold font-['Hanken Grotesk'] leading-loose tracking-tight">
                      {book.title && book.title.length > 10
                        ? book.title.slice(0, 10) + "..."
                        : book.title}
                    </h1>
                    <span className="text-blue-950 mt-5 py-2 text-base font-normal font-['Open Sans']">
                      {book.categories?.length > 0 &&
                      book.categories?.[0] &&
                      book.categories?.[0].length > 10
                        ? book.categories?.[0].slice(0, 10) + "..."
                        : book.categories?.[0]}
                    </span>
                    <span className="block mt-6 text-blue-700 text-xl font-bold font-['Hanken Grotesk'] leading-normal tracking-tight">
                      N/A
                    </span>

                    <button className="mt-4 text-white text-sm font-semibold font-['Open Sans'] leading-tight bg-blue-950 rounded-3xl px-4 py-3">
                      Buy Now
                    </button>
                    <img
                      src={heartLogo2}
                      alt="heart"
                      width={20}
                      className="inline mx-5 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
        {searches && searches.length > 9 && (
          <button
            onClick={handleShowMore}
            className="w-[362px] h-[72px] font-bold bg-blue-300 text-blue-700 rounded-lg"
          >
            {showMore === 9 ? "More" : "Less"}
          </button>
        )}
      </div>
    </>
  );
}
