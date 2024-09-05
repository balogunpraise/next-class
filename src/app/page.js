"use client"
import Button from '@/app/components/button/button.jsx'
import { useState } from 'react';

export default function Home() {

  const[clicked, setClicked] = useState(false)


  function testfunc1(){
    console.log('this is test from landing page')
    setClicked(true)
  }

  return (
    <div>
      <h1>Hello and welcome to my application</h1>
      <Button name="Register" color="yellow" isClicked={clicked} func={testfunc1}/>
    </div>
  );
}

