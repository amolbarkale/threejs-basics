import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Test from './components/Test'

const Container = styled.div`
height: 100vh;
width: 100vw;
scroll-snap-type: y mandatory;
background: rebeccapurple;
color: white;
background: url("./bg.jpeg");
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar{
  display: none;
}
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container >
    <Hero/>
    <Who/>
    <Works/>
    <Contact/>
    <Test/>
    </Container>
  )
}

export default App
