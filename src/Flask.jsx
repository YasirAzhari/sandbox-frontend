import axios from "axios"
import { useState, useEffect } from "react"
import { Flex, Text, Tabs, Box, Container, Section } from '@radix-ui/themes';

export default function Flask() {
    const [calc, setCalc] = useState('Loading...');
    useEffect(() => {
      axios.get('http://ec2-3-93-10-55.compute-1.amazonaws.com:5000/').then((res)=>{
      setCalc(res.data)
    })
    }, [])
  return (
    <Text> My flask server which is hosted on my AWS linux VM says: {calc}</Text>
  )
}
