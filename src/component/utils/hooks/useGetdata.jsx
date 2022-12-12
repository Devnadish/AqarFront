import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

const getData =async () =>{
  console.log(process.env.NODE_ENV)
  console.log(import.meta.env)
   const url=import.meta.env.VITE_BASE_URL+"/aqar/getdata"
    return await axios.get(url)
    // return await axios.get("http://localhost:3009/aqar/getdata")
  }



export const  useGetdata=()=> useQuery(['aqar'],getData,{refetchOnMount:true,refetchOnWindowFocus:true})

