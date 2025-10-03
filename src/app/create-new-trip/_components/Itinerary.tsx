"use client"
import React, { act, useEffect, useState } from 'react'
import { Timeline } from "@/components/ui/timeline";
import HotelCardItem from './HotelCardItem';
import PlaceCardItem from './PlaceCardItem';
import { useTripDetail } from '@/app/provider';
import { TripInfo } from './ChatBox';
import { ArrowLeft } from 'lucide-react';

// const TRIP_DATA=
// {
//   "destination": "Paris, France",
//   "duration": "7 days",
//   "origin": "New York, USA",
//   "budget": "2000 USD",
//   "group_size": "4",
//   "hotels": [
//     {
//       "hotel_name": "Hotel Le Meurice",
//       "hotel_address": "228 Rue de Rivoli, 75001 Paris, France",
//       "price_per_night": "350 EUR",
//       "hotel_image_url": "https://www.alamy.com/stock-photo-hotel-le-meurice-rue-rivoli-street-paris-france-41817149.html",
//       "geo_coordinates": {
//         "latitude": 48.8656,
//         "longitude": 2.3285
//       },
//       "rating": 4.8,
//       "description": "Luxury palace hotel with views of Jardin des Tuileries and the Eiffel Tower."
//     },
//     {
//       "hotel_name": "Hotel Lutetia",
//       "hotel_address": "45 Boulevard Raspail, 75006 Paris, France",
//       "price_per_night": "280 EUR",
//       "hotel_image_url": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Hotel_Lutetia_Paris.jpg",
//       "geo_coordinates": {
//         "latitude": 48.8510,
//         "longitude": 2.3254
//       },
//       "rating": 4.6,
//       "description": "Historic 5-star hotel in Saint-Germain-des-Prés with art deco style."
//     },
//     {
//       "hotel_name": "Shangri-La Hotel Paris",
//       "hotel_address": "10 Avenue d'Iéna, 75116 Paris, France",
//       "price_per_night": "400 EUR",
//       "hotel_image_url": "https://upload.wikimedia.org/wikipedia/commons/5/50/Shangri-La_Hotel_Paris.jpg",
//       "geo_coordinates": {
//         "latitude": 48.8640,
//         "longitude": 2.2937
//       },
//       "rating": 4.9,
//       "description": "Former palace with luxury suites and direct views of the Eiffel Tower."
//     }
//   ],
//   "itinerary": [
//     {
//       "day": 1,
//       "day_plan": "Arrival and Eiffel Tower visit",
//       "best_time_to_visit_day": "Afternoon",
//       "activities": [
//         {
//           "place_name": "Eiffel Tower",
//           "place_details": "Iconic Paris landmark offering panoramic city views.",
//           "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
//           "geo_coordinates": {
//             "latitude": 48.8584,
//             "longitude": 2.2945
//           },
//           "place_address": "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
//           "ticket_pricing": "€25 per adult",
//           "time_travel_each_location": "20 min from hotel",
//           "best_time_to_visit": "Sunset"
//         }
//       ]
//     },
//     {
//       "day": 2,
//       "day_plan": "Louvre Museum and Seine Cruise",
//       "best_time_to_visit_day": "Morning",
//       "activities": [
//         {
//           "place_name": "Louvre Museum",
//           "place_details": "World’s largest art museum, home to the Mona Lisa.",
//           "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/a/af/Louvre_Museum_Wikimedia_Commons.jpg",
//           "geo_coordinates": {
//             "latitude": 48.8606,
//             "longitude": 2.3376
//           },
//           "place_address": "Rue de Rivoli, 75001 Paris, France",
//           "ticket_pricing": "€17 per adult",
//           "time_travel_each_location": "15 min walk from hotel",
//           "best_time_to_visit": "Morning before 11am"
//         },
//         {
//           "place_name": "Seine River Cruise",
//           "place_details": "Scenic boat ride along the Seine with city lights at night.",
//           "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Seine_River_Cruise_Paris.jpg",
//           "geo_coordinates": {
//             "latitude": 48.8530,
//             "longitude": 2.3499
//           },
//           "place_address": "Port de la Bourdonnais, 75007 Paris, France",
//           "ticket_pricing": "€15 per adult",
//           "time_travel_each_location": "10 min from Louvre",
//           "best_time_to_visit": "Evening for night views"
//         }
//       ]
//     },
//     {
//       "day": 3,
//       "day_plan": "Day trip to Versailles Palace",
//       "best_time_to_visit_day": "Morning",
//       "activities": [
//         {
//           "place_name": "Palace of Versailles",
//           "place_details": "Magnificent palace with gardens, Hall of Mirrors, and royal history.",
//           "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Chateau_Versailles_West_Facade.jpg",
//           "geo_coordinates": {
//             "latitude": 48.8049,
//             "longitude": 2.1204
//           },
//           "place_address": "Place d'Armes, 78000 Versailles, France",
//           "ticket_pricing": "€20 per adult",
//           "time_travel_each_location": "1 hour train from Paris",
//           "best_time_to_visit": "Morning before tour groups arrive"
//         },
//         {
//           "place_name": "Versailles Gardens",
//           "place_details": "Extensive gardens with fountains, sculptures, and walking paths.",
//           "place_image_url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Versailles_Gardens.jpg",
//           "geo_coordinates": {
//             "latitude": 48.8056,
//             "longitude": 2.1164
//           },
//           "place_address": "Palace of Versailles, 78000 Versailles, France",
//           "ticket_pricing": "Included with palace ticket",
//           "time_travel_each_location": "5 min walk inside palace grounds",
//           "best_time_to_visit": "Afternoon when fountains are active"
//         }
//       ]
//     }
//   ]
// }

  
function Itinerary() {
  //@ts-ignore
  const {tripDetailInfo,setTripDetailInfo}=useTripDetail();
  const [ tripData,setTripData]=useState<TripInfo|null>(null)

  useEffect(()=>{
    tripDetailInfo && setTripData(tripDetailInfo)
  },[tripDetailInfo])

      const data = tripData?[
        {
          title: "Recommended Hotels",
          content: (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {tripData?.hotels.map((hotel,index) =>(
                <HotelCardItem hotel={hotel}></HotelCardItem>
              ))}
            </div>
          ),
        },

        ...tripData.itinerary.map((dayData)=>({
          title:`Day ${dayData.day}`,
          content:(
            <div>
              <p>Best Time :{dayData.best_time_to_visit_day}</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {dayData.activities.map((activity,index)=>(
                <PlaceCardItem activity={activity}/>
              ))}
              </div>
            </div>
          )
        }))
      ]:[];
      return (
        <div className="relative w-full h-[83vh] overflow-auto">
          {tripData ? <Timeline data={data} tripData={tripData} />
          :
          <div>
          <h2 className='flex gap-2 text-3xl text-white left-20 items-center absolute bottom-20'><ArrowLeft/>Getting to know you to build perfect trip here...</h2>
          <Image src={'/travel.png'} alt='travel' width={'800'} height={800} className='w-full h-full object-cover rounded-3xl'/>
          </div>
          }
        </div>
      );
    
}

export default Itinerary
