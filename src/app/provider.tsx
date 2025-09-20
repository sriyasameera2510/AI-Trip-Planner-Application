"use client"
import React, { useContext, useEffect, useState } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '../../context/UserDetailContext';
import { TripContextType, TripDetailContext } from '../../context/TripDetailContext';
import { TripInfo } from './create-new-trip/_components/ChatBox';

function Provider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const CreateUser = useMutation(api.user.createNewUser)
    const {user} = useUser();
    const [userDetail,setUserDetail] = useState<any>();
    const [tripDetailInfo,setTripDetailInfo] = useState<TripInfo|null>(null);
    
    useEffect(()=>{
      user&&CreateNewUser();
    },[user])

    const CreateNewUser = async() =>{
      if(user){
        const result = await CreateUser({
          name:user?.fullName ?? '',
          email:user?.primaryEmailAddress?.emailAddress ?? '',
          imageUrl:user?.imageUrl
        });
        setUserDetail(result);
      }
    }
  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
      <TripDetailContext.Provider value={{tripDetailInfo,setTripDetailInfo}}>
      <div>
          <Header/>
        {children}
      </div>
      </TripDetailContext.Provider>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUserDetail = ()=>{
  return useContext(UserDetailContext);
}

export const useTripDetail=():TripContextType | undefined=>{
  return useContext(TripDetailContext)
}
