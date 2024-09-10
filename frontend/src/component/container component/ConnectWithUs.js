import React from "react";
import HeadeLineComponent from "../../comman component/HeadeLineComponent";
import whatsappBackGround from "../../img/static images/whatsappBackGround.avif";
import video from "../../img/static images/video.avif";

export default function ConnectWithUs() {
  return (
    <div className="w-full mt-10">
      <HeadeLineComponent
        header="Connect With Us"
        dec="Check out our ready made guides to make your buying process easier."
      />
      <div className="w-full sm:flex gap-2 justify-start text-default-extra-high text-lg">
        <div
          className="flex flex-col justify-center items-start w-full lg:w-1/2 lg:h-40  py-10 lg:py-0 rounded-md border border-[#9a4646] px-10"
          style={{
            backgroundImage: `url(${whatsappBackGround})`,
            backgroundPosition: "right center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="w-[65%] text-start ">
            Connect On <br /> <span className="text-3xl">WhatsApp</span>{" "}
          </h1>
          <div className="flex w-36 hover:w-full items-center justify-between transition-width duration-1000 text-start sm:text-lg bg-default-light px-2 py-1 my-2">
            <p>Explore</p>{" "}
            <i class="fa-solid fa-arrow-right-long pt-1 ps-10"></i>
          </div>
        </div>
        <div
          className="flex items-start flex-col justify-center w-full lg:w-1/2 mt-2 sm:mt-0 lg:mt-0 py-10 lg:py-0 lg:h-40 rounded-md border border-[#9a4646] px-10"
          style={{
            backgroundImage: `url(${video})`,
            backgroundPosition: "right center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="w-[65%] text-start ">
            Book an <br /> <span className="text-3xl">Appointment</span>{" "}
          </h1>
          <div className="flex w-36 hover:w-full items-center justify-between transition-width duration-1000 text-start text-lg bg-default-light px-2 py-1 mt-2">
            <p className="">Explore</p>
            <i class="fa-solid fa-arrow-right-long pt-1 ps-10"></i>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-start w-full lg:w-1/2 lg:h-40 me-0 sm:me-2 py-10 lg:py-0 rounded-md border border-[#9a4646] px-10"
          style={{
            backgroundImage: `url(${whatsappBackGround})`,
            backgroundPosition: "right center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="w-[65%] text-start ">
            Sheduale a <br /> <span className="text-3xl">Video Call</span>{" "}
          </h1>
          <div className="flex w-36 hover:w-full items-center justify-between transition-width duration-1000 text-start sm:text-lg bg-default-light px-2 py-1 my-2">
            <p>Explore</p>{" "}
            <i class="fa-solid fa-arrow-right-long pt-1 ps-10"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
