import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

const getData =async () =>{
  // console.log(process.env.NODE_ENV)
  // console.log(import.meta.env)
   const url=import.meta.env.VITE_BASE_URL+"/aqar/getdata"
    return await axios.get(url)
   
  }

  
const offerId =async () =>{
  // console.log(process.env.NODE_ENV)
  // console.log(import.meta.env)
   const url=import.meta.env.VITE_BASE_URL+"/aqar/newoffer/offerid"
    return await axios.get(url)
 
  }

  const getCities =async () =>{
    // console.log(process.env.NODE_ENV)
    // console.log(import.meta.env)
     const url=import.meta.env.VITE_BASE_URL+"/aqar/newoffer/getities"
      return await axios.get(url)
     
    }


export const  useGetdata=()=> useQuery(['aqar'],getData,{refetchOnMount:true,refetchOnWindowFocus:true})

export const  useOfferID=()=> useQuery(['offerID'],offerId,{refetchOnMount:true,refetchOnWindowFocus:true})

export const useGetCitites = () =>{
  useQuery(["cities"], getCities, {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
  // console.log("para--- ",para)



}
  

