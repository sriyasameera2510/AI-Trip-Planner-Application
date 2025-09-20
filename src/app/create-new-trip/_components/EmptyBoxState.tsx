import { suggestions } from '@/app/_components/Hero'
import React from 'react'

export default function EmptyBoxState({onSelectOption}:any) {
  return (
    <div className='mt-7'>
      <h2 className='font-bold text-3xl text-center'>
        Start Planning new <strong className='text-primary'>Trip</strong> using AI
      </h2>
      <p className='text-center text-gray-400 mt-2'>
        Discover personalized travel itenaries, find the best destinations, and plan your dream vacation effortlessly with the power of AI Let our smart assitant do the hardwork while you enjoy the journey.
      </p>
      <div className='flex flex-col gap-5 mt-7'>
        {suggestions.map((suggestions,index)=>(
            <div key={index}
            onClick={()=>onSelectOption(suggestions.title)}
             className='flex icon-center gap-2 border rounded-xl p-3 cursor-pointer hover:border-primary hover:text-primary'>
                {suggestions.icon}
                <h2 className='text-m'>{suggestions.title}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}
