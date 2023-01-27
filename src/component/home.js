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
    const [totalP,setTotalP]=useState(0);
    const [totalC,setTotalC]=useState(0);
    

    function rockClick(){
        const player="rock";
        let index = Math.floor(Math.random() * elements.length); 
        const computer = elements[index];
        document.getElementById('rock').style.border='5px solid black'
        document.getElementById('paper').style.border=''
        document.getElementById('scissor').style.border=''
        if(computer === player){
            const result ="DRAW";
            setResult({
            'result':result,
            'player':player,
            'computer':computer})
            document.getElementById('rockSpan').style.border='5px solid grey'
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border=''

        }else if(computer === "paper"){
            const result ="COMPUTER WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer})
            setTotalC(totalC+1);
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border='5px solid red'
            document.getElementById('scissorSpan').style.border=''

        }else if(computer === "scissor"){
            const result ="YOU WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer}
            )
            setTotalP(totalP+1);
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border='5px solid green'
        }

    }

    function paperClick(){
        const player="paper";
        let index = Math.floor(Math.random() * elements.length); 
        const computer = elements[index];
        document.getElementById('rock').style.border=''
        document.getElementById('paper').style.border='5px solid black'
        document.getElementById('scissor').style.border=''
        if(computer === player){
            const result ="DRAW";
            setResult({
            'result':result,
            'player':player,
            'computer':computer})
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border='5px solid grey'
            document.getElementById('scissorSpan').style.border=''

        }else if(computer === "rock"){
            const result ="YOU WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer}
            )
            setTotalP(totalP+1);
            document.getElementById('rockSpan').style.border='5px solid green'
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border=''

        }else if(computer === "scissor"){
            const result ="COMPUTER WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer}
            )
            setTotalC(totalC+1);
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border='5px solid red'
        }

    }

    function scissorClick(){
        const player="scissor";
        let index = Math.floor(Math.random() * elements.length); 
        const computer = elements[index];
        document.getElementById('rock').style.border=''
        document.getElementById('paper').style.border=''
        document.getElementById('scissor').style.border='5px solid black'
        if(computer === player){
            const result ="DRAW";
            setResult({
            'result':result,
            'player':player,
            'computer':computer})
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border='5px solid grey'

        }else if(computer === "paper"){
            const result ="YOU WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer}
            )
            setTotalP(totalP+1);
            document.getElementById('rockSpan').style.border=''
            document.getElementById('paperSpan').style.border='5px solid green'
            document.getElementById('scissorSpan').style.border=''

        }else if(computer === "rock"){
            const result ="COMPUTER WON";
            setResult({
                'result':result,
                'player':player,
                'computer':computer}
            )
            setTotalC(totalC+1);
            document.getElementById('rockSpan').style.border='5px solid red'
            document.getElementById('paperSpan').style.border=''
            document.getElementById('scissorSpan').style.border=''
        }
        
    }
    function reset(){
        setResult({
        'result':"",
        'player':"",
        'computer':""})
        setTotalC(0);
        setTotalP(0);
    }
    return(
       <div className="container-fluid">
            <div className="row " style={{height:"100vh"}}>
                <div className="col-xl-4 col-md-6 col-sm-8 box mx-auto bg-primary my-auto  " >
                    <div className='col-12 palyerChoice d-flex justify-content-around' >
                        <button id="rock" className="mt-4" onClick={()=>rockClick()}></button>
                        <button id="paper"  onClick={()=>paperClick()}></button>
                        <button id="scissor" className="mt-4" onClick={()=>scissorClick()} ></button>
                    </div>
                    <div className="col-12 result my-auto mx-auto text-center">
                        <h3 style={{color:'red'}}>{result.result}</h3>
                    </div>
                    <div className="col-12 computerChoice d-flex justify-content-around " >
                        <button id="rockSpan" className="mb-4" disabled></button>
                        <button id="paperSpan" className="mt-4" disabled ></button>
                        <button id="scissorSpan" className="mb-4" disabled ></button>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <p className="text-light" style={{fontSize:'62px',fontWeight:'bold'}}>{totalP}-{totalC}</p>
                    <button className='btn btn-danger btn-sm' onClick={()=>reset()}>reset</button>
                </div>
            </div>
       </div>

    )
}