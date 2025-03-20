import React from 'react'
import VideoPlayer from './Player'
import { projectTelegramLink } from './consts'

const About = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#F9B624]"> Forget regulations, Trump just legalized the pump

                        </h1>
                        <p class="mb-8 leading-relaxed font-medium text-white">
                            With the Digital Asset Summit around the corner, whispers are growing louder—Trump might just drop the most bullish executive order in history. No FUD, no brakes, just a green light for ETH to the moon.

                            Whales are already positioning, charts are acting suspicious, and insiders are watching every move. Is $10K ETH about to become policy? If this happens, the market won’t just react—it’ll erupt. Stay tuned. 🚀        </p>
                        <div class="flex justify-center">
                            <a href={projectTelegramLink}>
                                <button class="inline-flex text-black font-bold bg-[#F9B624]  border-0 py-2 px-6 focus:outline-none  rounded text-lg">JOIN THE PUMP</button>
                            </a>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="w-[90%] max-w-[500px]" alt="hero" src={require('../assets/exe.jpg')} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About