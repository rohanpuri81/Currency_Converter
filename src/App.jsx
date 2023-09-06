import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import useCurrencyInfo from './customHooks/useCurrencyInfo'
import SelectedText from './components/SelectedText'

function App() {

 const [t1,setT1]=useState(0);
 const [t2,setT2]=useState(0);
 const [sel1,setSel1]=useState("usd")
 const [sel2,setSel2]=useState("inr")

 
 let d = useCurrencyInfo(sel1)
 let vals = Object.keys(d);

 function swap(){
  let temp = sel1;
  setSel1(sel2);
  setSel2(temp)
  const temp2 = t1;
  const temp3 = t2;
  
  setT2(temp2)
  setT1(temp3)

 }

//  useEffect(()=>{
  // let dSel2=d[sel2];
  
  // let result = t1*d[sel2]
  // setT2(result.toFixed(2)) 
//  },[t1,sel1,sel2])

function calculate(){
  let dSel2=d[sel2];
  
  let result = t1*d[sel2]
  setT2(result.toFixed(2)) 
}
 


  return (
    <MainDiv>
      <SelectedText opts={vals} tVal={t1} tSet={setT1} delVal={sel1} setVal={setSel1} toFrom={"From"}/>
      <SwapBtn onClick={swap}><i className="fa-solid fa-retweet"></i></SwapBtn>
      <SelectedText opts={vals} tVal={t2} tSet={setT2} delVal={sel2} setVal={setSel2} toFrom={"To"}/>
      <CalcButton onClick={calculate}>CALCULATE</CalcButton>
    </MainDiv>
  )
}

export default App

const SwapBtn = styled.button`
   background-color: #193799;
   border: none;
   position: absolute;
   border-radius: 6px;
   padding: 3px 10px;
   top: 20vh;
   font-size: 30px;
   margin-left: 18vw;
   color: white;
`;
const MainDiv = styled.div`
   display: flex;
   position: relative;
   padding: 30px;
   border-radius: 8px;
   background-color: rgba(255,255,255,0.3);
   flex-direction: column;
   gap: 10px;
`;

const CalcButton=styled.button`
   background-color: #193799;
   padding: 5px 10px;
   border: none;
   border-radius: 6px;
   width: 100%;
   font-size: 20px;
   color: white;
`;