import Image from "next/image";
import { StarIcon } from "./icons";

const SearchResultBox = () => {
  return (
    <article className="flex gap-5 p-5 border rounded-[20px] border-borderColor">
      <Image
        src="/images/hero.png"
        alt="search image"
        height={0}
        width={0}
        sizes="100vw"
        className="h-[200px] w-[230px] rounded-2xl object-cover"
      />
      <div className="flex justify-between w-full">
        <div>
          <span className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-secondary">
              Caesar’s Luxury Hotel
            </h3>
            <div className="flex gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </span>
          <span className="flex items-center gap-2 mt-2 text-xs font-semibold text-secondary">
            <span>Lekki Phase 1, Lagos</span>
            <button>Show on map</button>
            <span>13.4 Km from center</span>
          </span>

          <div className="mt-5 space-y-2 text-sm text-secondary">
            <p className="font-bold text-black">Superior Double Room</p>
            <p>Your Child stays for free</p>
            <p>Your Child stays for free</p>
            <p>Your Child stays for free</p>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <div className="flex items-center gap-2">
            <div>
              <span className="block text-sm font-bold">Very good</span>
              <span className="text-xs text-gray-500">20 reviews</span>
            </div>
            <div className="grid w-8 h-8 text-white rounded-md bg-secondary place-content-center">
              6.7
            </div>
          </div>
          <div>
            <span className="block text-xs text-gray-600">
              1 night, 2 adults, 1 child
            </span>
            <h2 className="text-2xl font-bold">NGN 57, 200</h2>
            <span className="block text-xs text-gray-600">
              Includes taxes and fees
            </span>
            <button className="mt-2 flex items-center justify-center gap-2 font-semibold primary-btn w-[150px]">
              Reserve
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

const RightArrow = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.79516 1.99062C4.62788 2.14813 4.53391 2.36172 4.53391 2.58443C4.53391 2.80714 4.62788 3.02074 4.79516 3.17824L9.21195 7.33574L4.79516 11.4932C4.63263 11.6516 4.54269 11.8638 4.54472 12.084C4.54675 12.3042 4.64059 12.5149 4.80603 12.6706C4.97147 12.8263 5.19526 12.9147 5.42921 12.9166C5.66317 12.9185 5.88856 12.8338 6.05685 12.6809L11.1045 7.92955C11.2718 7.77204 11.3657 7.55845 11.3657 7.33574C11.3657 7.11303 11.2718 6.89944 11.1045 6.74193L6.05685 1.99062C5.88952 1.83317 5.6626 1.74471 5.426 1.74471C5.1894 1.74471 4.96249 1.83317 4.79516 1.99062Z"
      fill="black"
    />
  </svg>
);

export default SearchResultBox;
