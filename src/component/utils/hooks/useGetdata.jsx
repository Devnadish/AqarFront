import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

const getData =async () =>{
    return await axios.get("http://localhost:3009/aqar/getdata")
  }



export const  useGetdata=()=> useQuery(['aqar'],getData,{refetchOnMount:true,refetchOnWindowFocus:true})

