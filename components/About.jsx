/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who Am I?</h2>
                <p className='py-2 text-gray-600'>// hey look it&apos;s another basic dev</p>
                <p className='py-2 text-gray-600'>
                    Well I guess you could say I&apos;m another basic dev. But I do this (at the moment) for fun.
                    I am still a student About to graduate and I&apos;m just building this site to train myself So I can have a great reputation in developing.
                    I&apos;m still learning and I&apos;m still a beginner, and there is a lot of things I still need to learn.
                </p>
                <p className='py-2 text-gray-600'>
                    How I started was when I was at the age of 9. I got like mad bored and I wanted to learn on how to code.
                    What My first ever project was a Discord Bot. Yes my tiny little brain pooped out a discord bot,
                    after looking at many youtube tutorials and reading many articles I was able to make a discord bot.
                    Then I just stopped coding after that. I did code some little things but I ditched them right after I started them.
                    Until today. I started to re-learn coding and I&apos;m learning a lot of new things! Hopefully I can get a job as a developer.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://media.discordapp.net/attachments/1043646377319739422/1052068254560030820/about.jpg?width=1202&height=676" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About