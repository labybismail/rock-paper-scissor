import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

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
        document.getElementById('rock').style.border='3px solid black'
        document.getElementById('paper').style.border=''
        document.getElementById('scissor').style.border=''
        if(computer==player){
            const result ="DRAW";
            setResult({
            'result':result,
            'player':player,
            'computer':computer})
            document.getElementById('rockSpan').style.border='3px solid grey'
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border=''

        }else if(computer=="paper"){
            const result ="COMPUTER WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer})
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border='3px solid red'
            document.getElementById('scissorSpan').style.border=''

        }else if(computer=="scissor"){
            const result ="YOU WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer}
            )
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border='3px solid green'
        }

    }

    function paperClick(){
        const player="paper";
        let index = Math.floor(Math.random() * elements.length); 
        const computer = elements[index];
        document.getElementById('rock').style.border=''
        document.getElementById('paper').style.border='3px solid black'
        document.getElementById('scissor').style.border=''
        if(computer==player){
            const result ="DRAW";
            setResult({
            'result':result,
            'player':player,
            'computer':computer})
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border='3px solid grey'
            document.getElementById('scissorSpan').style.border=''

        }else if(computer=="rock"){
            const result ="YOU WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer}
            )
            document.getElementById('rockSpan').style.border='3px solid green'
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border=''

        }else if(computer=="scissor"){
            const result ="COMPUTER WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer}
            )
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border='3px solid red'
        }

    }

    function scissorClick(){
        const player="scissor";
        let index = Math.floor(Math.random() * elements.length); 
        const computer = elements[index];
        document.getElementById('rock').style.border=''
        document.getElementById('paper').style.border=''
        document.getElementById('scissor').style.border='3px solid black'
        if(computer==player){
            const result ="DRAW";
            setResult({
            'result':result,
            'player':player,
            'computer':computer})
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border='3px solid grey'

        }else if(computer=="paper"){
            const result ="YOU WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer}
            )
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border='3px solid green'
            document.getElementById('scissorSpan').style.border=''

        }else if(computer=="rock"){
            const result ="COMPUTER WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer}
            )
            document.getElementById('rockSpan').style.border='3px solid red'
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border=''
        }

    }
    return(
       <div className="container-fluid">
            <div className="row " style={{height:"100vh"}}>
                <div className="col-4 box mx-auto bg-primary my-auto position-relative" style={{height:"46vh"}} >
                    <div className='col-12 d-flex justify-content-around' style={{position:"absolute",top:"10px",left:'0'}}>
                        <button id="rock" onClick={()=>rockClick()}></button>
                        <button id="paper"  onClick={()=>paperClick()}></button>
                        <button id="scissor" onClick={()=>scissorClick()} ></button>
                    </div>
                    <div className="col-12 my-auto mx-auto text-center" style={{position:"absolute",bottom:"140px",left:'0px'}}>
                        <h3 style={{color:'red'}}>{result.result}</h3>
                    </div>
                    <div className="col-12 d-flex justify-content-around" style={{position:"absolute",bottom:"10px",left:'0'}}>
                        <button id="rockSpan" disabled></button>
                        <button id="paperSpan" disabled ></button>
                        <button id="scissorSpan" disabled ></button>
                    </div>
                </div>
            </div>
       </div>

    )
}