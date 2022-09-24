import Image from "next/image";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { urlFor } from "../../utils/sanity";
import SectionDescCard from "../UtilComponents/SectionDescCard";

function Teams({ teams }) {
  const [activeTeam, setActiveTeam] = useState(0);

  const MemberCard = ({ name, designation, img, social, idx }) => {
    return (
      <div
        className="flex group flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group bg-light border border-dark dark:bg-mid dark:border-light dark:text-white hover:bg-brand-700 hover:text-white rounded-xl"
        key={idx}
      >
        <div className="rounded-full overflow-hidden h-32 w-32">
          <Image loading="lazy"
            width={128}
            height={128}
            className="object-cover duration-200 group-hover:scale-105 ease-in-out"
            src={img}
            alt={name}
          />
        </div>

        <h1 className="mt-4 text-2xl font-semibold capitalize">
          {name}
        </h1>

        <p className="mt-2 capitalize">
          {designation}
        </p>

        <div className="flex mt-3 dark:text-white -mx-2">
          <a
            href={`mailto:${social?.email}`}
            className="mx-2"
            aria-label="Email"
          >
            <MdEmail className="h-6 w-6" />
          </a>
          <a
            href={`tel:${social?.phone}`}
            className="mx-2"
            aria-label="Phone"
          >
            <AiFillPhone className="h-6 w-6" />
          </a>
          <a
            href={social?.linkedin}
            target="_blank"
            className="mx-2"
            aria-label="Linkedin"
            rel="noreferrer"
          >
            <BsLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="teams" className="">

      <SectionDescCard name="Our Team" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
						repellendus est blanditiis consequuntur iusto nostrum consectetur
						voluptate ratione, exercitationem sint maxime nisi incidunt? A
						voluptate deleniti eligendi odit fugit nemo tempore atque nisi ab!"/>

      <div className="flex h-full xl:flex-row flex-col xl:h-screen">
        <div className="xl:w-1/4 min-h-[200px] h-full flex flex-row xl:flex-col justify-center items-center space-x-10 xl:space-x-0 xl:space-y-10 py-4 px-6 bg-dark dark:bg-mid">
          {teams &&
            teams?.map((team, idx) => {
              return (
                <button
                  key={idx}
                  className={idx === activeTeam ? "rounded-full bg-brand-500 text-white h-20 w-20 xl:px-10 xl:py-2 text-center xl:rounded-sm border-none xl:h-fit xl:w-fit" : "rounded-full bg-light h-20 w-20 xl:px-10 xl:py-2 text-center xl:rounded-sm border-none xl:h-fit xl:w-fit"}
                  onClick={() => {
                    setActiveTeam(idx);
                  }}
                >
                  {team.year}
                </button>
              );
            })}
        </div>
        <div className="xl:w-3/4 max-h-screen overflow-y-auto overflow-auto py-6 sm:p-6 bg-light dark:bg-dark dark:text-white">
          <h3 className="text-5xl text-center pb-5 font-semibold">
            Team {teams[activeTeam]?.year}
          </h3>
          <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-6 p-5">
            {teams[activeTeam]?.members?.map((member, idx) => {
              const { name, designation, social, img } = member;
              return (
                <MemberCard
                  name={name}
                  designation={designation}
                  social={social}
                  img={urlFor(img).url()}
                  idx={idx}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teams;