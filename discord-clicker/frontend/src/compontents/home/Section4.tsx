import React, { useRef } from 'react'

const Section4 = (logedIn: any) => {

    const ref: any = useRef()
  return (
    <div>
    <div className='dashboard flex flex-col items-center lg:flex-row lg:justify-around gap-10 lg:items-center'>
        <img src="./Setup.png" alt="" className='lg:w-6/12 w-10/12' />   
        <div className=' ml-10 w-11/12 lg:block flex flex-col items-center lg:w-5/12'>
        <h1 className='text-white text-2xl font-semibold mb-10 px-5 mr-5 lg:text-5xl 2xl:text-7xl'>The dashboard and setup</h1>
        <p className=' text-gray-300 font-extralight xl:text-md px-5 2xl:text-2xl'>

        Using our bot's dashboard, you can set up your guild's game and share the URL with your friends to play together. The dashboard is easy to use and features a well-guided setup process where mistakes are hard to come by. If you do make a mistake, don't worry. Our comprehensive setup guide is there to help you every step of the way.

        Additionally, the dashboard includes real-time feedback, ensuring a smooth experience even for those who are not tech-savvy. You can customize various game settings to suit your guild's preferences, making it a personalized and engaging experience for everyone involved. So, gather your friends, set up your game, and dive into the fun without any hassle!
        </p>
        <a href={logedIn.logedIn ? "/dashboard" : "https://discord.com/oauth2/authorize?client_id=1243668312597074021&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fdiscord%2Foauth%2Fauthenticate%2F&scope=identify+connections+guilds.join+gdm.join+email+guilds+guilds.members.read"}>
        <button className=' w-72 h-16 mr-5 sm:mr-0 sm:ml-5 2xl: mt-10 2xl:w-80 2xl:h-20 rounded-xl text-2xl bg-blue-500 flex items-center justify-center gap-5 text-white transition-all duration-300 hover:bg-blue-600' ref={ref}>Go to dashboard</button>
        </a>
        </div>     
    </div>
</div>
  )
}

export default Section4