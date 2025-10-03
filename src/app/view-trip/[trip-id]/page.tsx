"use client"
import { useTripDetail, useUserDetail } from '@/app/provider';
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { api } from '../../../../convex/_generated/api';
import { Trip } from '@/app/my-trips/page';
import Itinerary from '@/app/create-new-trip/_components/Itinerary';

function ViewTrip() {

    const { tripid } = useParams();
    const {userDetail,setUserDetail} = useUserDetail();
    //@ts-ignore
    const {tripDetailInfo,setTripDetailInfo}=useTripDetail();
    const convex=useConvex();
    const [tripData,setTripData] = useState<Trip>();

    useEffect(()=>{
        userDetail && GetTrip()
    },[userDetail])

    const GetTrip=async ()=>{
        const result=await convex.query(api.tripDetial.GetTripById,{
            uid:userDetail?._id,
            tripid:tripid+''
        });
        setTripData(result)
        setTripDetailInfo(result?.tripDetail)
    }
  return (
    <div>
      <Itinerary/>
    </div>
  )
}

export default ViewTrip
