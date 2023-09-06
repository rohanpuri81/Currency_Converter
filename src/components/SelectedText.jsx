import React from 'react'
import styled from 'styled-components'

function SelectedText(props){

    function selChange(e){
        console.log(e.target.value)
        props.setVal(e.target.value);
    }
    function selText(e){
       props.tSet(Number(e.target.value))
    }
    return(
        <TextDiv>
            <InnerDiv>
               <h4>{props.toFrom}</h4>
               <h4>Currency Type</h4>
            </InnerDiv>
            <InnerDiv>
               <Text value={props.tVal} onChange={selText}/>
                <Select value={props.delVal} onChange={selChange}>
                    {
                        props.opts.map((val)=>{
                            return(
                                <option key={val} value={val}>{val}</option>
                            );
                        })
                    }
                </Select>
            </InnerDiv>
        </TextDiv>
    );
}

export default SelectedText;

const TextDiv = styled.div`
   display: flex;
   justify-content: space-evenly;
   flex-direction: column;
   gap: 8px;
   min-width: 40vw;
   min-height: 17vh;
   padding: 8px;
   background-color: white;
   border-radius: 6px;
`;
const InnerDiv = styled.div`
   display: flex;
   padding: 4px 8px;
   justify-content: space-between;

`;
const Text=styled.input`
   /* border: none; */
   border-radius: 4px;
   background-color: white;
   padding: 6px 10px;
   width: 50%;
`;

const Select = styled.select`
   border-radius: 40px;
   border: 2px solid black;
`;