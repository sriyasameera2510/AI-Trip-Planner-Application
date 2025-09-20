"use client"
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import { Globe2, Landmark, Send, Plane, ArrowDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const suggestions=[
    {
        title:'Create a New Trip',
        icon:<Globe2 className='text-blue-400 h-5 w-5'></Globe2>
    },
    {
        title:'Inspire me where to go',
        icon:<Plane className='text-green-500 h-5 w-5'></Plane>
    },
    {
        title:'Discover Hidden Gems',
        icon:<Landmark className='text-orange-500 h-5 w-5'></Landmark>
    },
    {
        title:'Adeventure Destination',
        icon:<Globe2 className='text-yellow-600 h-5 w-5'></Globe2>
    }
]

export default function Hero() {

  const {user} =useUser();
  const router=useRouter();
  const onSend=()=>{
    if(!user)
    {
      router.push('/sign-in')
      return;
    }
    router.push('/create-new-trip')
  }
  return (
    <div className='mt-24 w-full flex justify-center'>

      {/*Content*/}
      <div className='max-w-3xl w-full text-center space-y-6'>
        <h1 className='text-xl md:text-5xl font-bold'>Hey, I am your personal <span className='text-primary'>Trip Planner</span></h1>
        <p className='text-lg'>Tell me what you want, and I'll handle the rest: Flights,Hotels, Trip Planner - all in seconds</p>
        
        {/*Input Box*/}
      <div>
        <div className='border rounded-2xl p-4 relative'>
            <Textarea placeholder='Create a trip from Paris to New York' 
                className='w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none'>
            </Textarea>
            <Button size={'icon'} className='absolute bottom-6 right-6' onClick={()=>onSend()}>
                <Send className='w-4 h-4'></Send>
            </Button>
        </div>
      </div>
      {/*Suggestion List*/}
      <div className='flex gap-5'>
        {suggestions.map((suggestions,index)=>(
            <div key={index} className='flex icon-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white'>
                {suggestions.icon}
                <h2 className='text-xs'>{suggestions.title}</h2>
            </div>
        ))}
      </div>

      <div className='flex items-center justify-center flex-col'>
        <h2 className='my-7 mt-14 flex gap-2 text-center'>Not sure where to start? <strong>See how it works</strong><ArrowDown></ArrowDown></h2>
      </div>
      {/*Video Section*/}
      <HeroVideoDialog
        className="block dark:block"
        animationStyle="from-center"
        videoSrc="https://www.eample.com/dummy-video"
        thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
        thumbnailAlt="Dummy video thumbnail"
      />
      </div>
    </div>
  )
}
