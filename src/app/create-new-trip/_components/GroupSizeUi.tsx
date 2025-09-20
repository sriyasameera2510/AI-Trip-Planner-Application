import React from 'react'

export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole travels in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travels in tandem',
        icon:'🥂',
        people:'2'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adventure',
        icon:'🏡',
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill seekers',
        icon:'⛵️',
        people:'5 to 10 people'
    },
]

export default function GroupSizeUi({onSelectedOption}:any) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 items-center mt-1'>
      {SelectTravelesList.map((item,index)=>(
        <div key={index} className='p-3 border rounded-2xl bg-white hover:border-primary cursor-pointer' onClick ={()=>onSelectedOption(item.title+":"+item.people)}>
            <h2>{item.icon}</h2>
            <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}
