import { useState } from "react";
export default function Home(){
    let elements = ["rock", "paper", "scissor"];
    const [result,setResult]=useState({
        'result':"",
        'player':"",
        'computer':""
    });
        

    function rockClick(){
        const player="rock";
        let index = Math.floor(Math.random() * elements.length); 
        const computer = elements[index];
        if(computer==player){
            const result ="DRAW";
            setResult({
            'result':result,
            'player':player,
            'computer':computer})

        }else if(computer=="paper"){
            const result ="COMPUTER WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer})

        }else if(computer=="scissor"){
            const result ="YOU WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer})
        }

    }

    function paperClick(){
        const player="paper";
        let index = Math.floor(Math.random() * elements.length); 
        const computer = elements[index];
        if(computer==player){
            const result ="DRAW";
            setResult({
            'result':result,
            'player':player,
            'computer':computer})

        }else if(computer=="rock"){
            const result ="YOU WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer})

        }else if(computer=="scissor"){
            const result ="COMPUTER WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer})
        }

    }

    function scissorClick(){
        const player="scissor";
        let index = Math.floor(Math.random() * elements.length); 
        const computer = elements[index];
        if(computer==player){
            const result ="DRAW";
            setResult({
            'result':result,
            'player':player,
            'computer':computer})

        }else if(computer=="paper"){
            const result ="YOU WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer})

        }else if(computer=="rock"){
            const result ="COMPUTER WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer})
        }

    }
    return(
        <>
            <button id="rock" onClick={()=>rockClick()}>ROCK</button>
            <button id="paper" onClick={()=>paperClick()}>PAPER</button>
            <button id="scissor" onClick={()=>scissorClick()} >SCISSOR</button>
            <h3 style={{color:'red'}}>{result.result}</h3>
            <h4>YOU : {result.player}</h4>
            <h4>COMPUTER : {result.computer}</h4>
        </>

    )
}