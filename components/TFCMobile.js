import Image from 'next/image'
import React, { useState } from 'react'
import PortableText from 'react-portable-text'
import { urlFor } from '../utils/sanity'

const TFCMobile = ({ content, name }) => {
    const [active, setActive] = useState(0)

    const value = content[active]

    return (
        <div className='sm:hidden'>
            <h2 className='lg:text-4xl px-4 lg:px-0 text-3xl antialiased text-center font-bold dark:text-light'>{name}</h2>
            <div className="border-t-4 my-8 lg:w-1/5 md:w-1/5 w-2/4 mx-auto border-brand-500 border-opacity-20"></div>
            <div className="grid grid-cols-3 w-full justify-center items-center px-6">
                <button onClick={() => setActive(0)} className={active === 0 ? 'text-center px-6 py-2 bg-brand-600 text-white border-none shadow-md' : 'text-center px-6 py-2 bg-light border-none shadow-md'} type='button'>Think</button>
                <button onClick={() => setActive(1)} className={active === 1 ? 'text-center px-6 py-2 bg-brand-600 text-white border-none shadow-md' : 'text-center px-6 py-2 bg-light border-none shadow-md'} type='button'>Feel</button>
                <button onClick={() => setActive(2)} className={active === 2 ? 'text-center px-6 py-2 bg-brand-600 text-white border-none shadow-md' : 'text-center px-6 py-2 bg-light border-none shadow-md'} type='button'>Collaborate</button>
            </div>
            <div className="grid px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8 dark:bg-dark grid-cols-1">
                <div className='shadow-lg flex py-8 flex-col justify-center space-y-4 items-center'>
                    <Image loading="lazy" height={192} width={192} src={urlFor(value?.img).url()} alt={value?.name} />
                    <h3 className='text-center font-semibold text-2xl dark:text-light'>{value?.name}</h3>

                    <PortableText
                        className='capitalize text-sm text-center dark:text-light my-2 mx-auto px-4 sm:px-10'
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={value?.body}
                    // serializers={{
                    //     h1: (props) => {
                    //         <h1 className='text-2xl font-bold my-5' {...props} />
                    //     },
                    //     h2: (props) => {
                    //         <h2 className='text-xl font-bold my-5' {...props} />
                    //     },
                    //     li: ({ children }) => {
                    //         <li className='ml-4 list-disc'>{children}</li>
                    //     },
                    //     link: ({ href, children }) => {
                    //         <a href={href} className='text-blue-500 hover:underline'>{children}</a>
                    //     },
                    // }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TFCMobile