import React from 'react'

const Nav = () => {
    return (
        <div>
            <header class="text-gray-100 body-font">
                <div class="container mx-auto flex flex-wrap p-5  md:flex-row items-center justify-between">
                    <a class="flex title-font font-medium items-center text-gray-900  md:mb-0">
                        <img className='h-[60px]' src={require('../assets/gif1.gif')} />
                        <span class="ml-3 text-xl text-white"></span>
                    </a>
                    {/* <nav class="md:ml-auto md:mr-auto hidden md:flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-100">HOME</a>
                        <a class="mr-5 hover:text-gray-100">ABOUT</a>
                        <a class="mr-5 hover:text-gray-100">TOKENOMICS</a>
                    </nav> */}
                    <a class="flex title-font font-medium items-center text-gray-900  md:mb-0">
                        <img className='h-[60px]' src={require('../assets/gif3.gif')} />
                        <span class="ml-3 text-xl text-white"></span>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Nav