import Image from 'next/image';
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsArrowUpSquareFill } from 'react-icons/bs'
import { urlFor } from '../../utils/sanity';

function EventsListSection({ name, sectionBio, id, events, Icon }) {

    const handleScroll = (id) => {
        var element = document.getElementById(id);
        var headerOffset = 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    const EventCard = ({ img, name, date, desc, blog }) => {
        return (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded w-full overflow-hidden">
                        <Image
                            height={350}
                            width={600}
                            objectFit="cover"
                            src={urlFor(img).url()}
                            alt={name}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <span
                            className=" bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold dark:text-white"
                        >
                            {date}
                        </span>
                        <h3>
                            <a
                                href="javascript:void(0)"
                                className=" font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block hover:text-primary "
                            >
                                {name}
                            </a>
                        </h3>
                        <p className="text-base text-body-color">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section id={id} className="pt-10 px-6 sm:px-0 lg:pt-12 pb-10 lg:pb-20 relative">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <div className="flex items-center justify-center space-x-3 cursor-pointer" onClick={() => { handleScroll("eventsHero") }}>
                                <span className="font-semibold text-lg text-primary mb-2 block">
                                    Our Events
                                </span>
                                <BsArrowUpSquareFill className="text-dark dark:text-light mb-1" />
                            </div>
                            <h2 className="font-bold text-3xl sm:text-4xl flex item-center space-x-3 justify-center md:text-[40px] text-brand-600 mb-4"
                            >
                                <span>{name}</span>
                                <Icon />
                            </h2>
                            <p className="text-base text-body-color">
                                {sectionBio}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {
                        events && events.map((event, idx) => {
                            const { name, img, desc, date, blog } = event
                            return (
                                <EventCard name={name} img={img} desc={desc} idx={idx} key={idx} date={date} blog={blog} />
                            )
                        })
                    }
                </div>

                <div className="absolute bottom-10 left-0 right-0 mx-auto z-20 cursor-pointer group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-brand-500 to-brand-600 hover:to-brand-600 w-fit">
                    <span className="relative text-white">View More</span>
                    <div className="flex items-center -space-x-3 translate-x-3">
                        <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                        <AiOutlineArrowRight className="h-5 w-5 stroke-white text-white -translate-x-2 transition duration-300 group-hover:translate-x-0" />
                    </div>
                </div>
                <div className="absolute left-0 bottom-0 w-full h-1/3 z-10 blogBannerGradient" />
            </div>
        </section>
    )
}

export default EventsListSection