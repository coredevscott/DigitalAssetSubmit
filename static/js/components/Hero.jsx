import React from 'react'
import { projectTelegramLink, projectTwitterLink } from './consts'


const Hero = () => {
  return (
    <section class="text-gray-600 body-font bg1">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img class="w-[90%] max-w-[400px]" alt="hero" src={require('../assets/logo.png')} />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-[52px] mt-6 text-3xl mb-4 font-bold text-[#F9B624]">DIGITAL ASSET SUMMIT</h1>
          <p class="mb-8 leading-relaxed text-white text-[18px] md:text-[20px]">
            The Digital Asset Summit is here, and Trump’s running the show—no fluff, just straight-up market-shaking insights. Whales are making moves, ETH’s looking sketchy, and rumors are flying about something big. Coincidence? Maybe. But you’d be crazy to miss it.
          </p>
          <div class="flex justify-center">
            <a href={projectTelegramLink}>
              <button class="inline-flex text-black font-bold bg-[#F9B624]  border-0 py-2 px-6 focus:outline-none  rounded text-lg">TELEGRAM</button>
            </a>
            <a href={projectTwitterLink}>
              <button class="ml-4 inline-flex font-bold text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">TWITTER</button>
            </a>
          </div>
          <div className='mt-4'>
            <a href='#'>
              <button class="inline-flex text-white font-bold bg-black  border-0 py-2 px-6 focus:outline-none  rounded text-lg">ARTICLE</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero