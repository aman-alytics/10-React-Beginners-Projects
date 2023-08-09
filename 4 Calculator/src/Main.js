import {useState} from "react";
import "./style.css"



function Main() {
const [inputValue, setInputValue] = useState("");

function display (value) {
    setInputValue(inputValue + value);
}

function calculate() {
    var answers = eval(inputValue);
    setInputValue(answers);
}

function clear() {
    setInputValue("");
}

return <>  
<form name="calc" className="calculator">
    <input type="text" className="value" value={inputValue} />
    <span className="num clear" onClick={() => clear()}>c</span>
    <span onClick={()=> display("/")}>/</span>
    <span onClick={()=> display("*")}>*</span>
    <span onClick={()=> display("7")}>7</span>
    <span onClick={()=> display("8")}>8</span>
    <span onClick={()=> display("9")}>9</span>
    <span onClick={()=> display("-")}>-</span>
    <span onClick={()=> display("4")}>4</span>
    <span onClick={()=> display("5")}>5</span>
    <span onClick={()=> display("6")}>6</span>
    <span onClick={()=> display("+")} className="plus">+</span>
    <span onClick={() => display("1")}>1</span>
    <span onClick={() => display("2")}>2</span>
    <span onClick={() => display("3")}>3</span>
    <span onClick={() => display("0")}>0</span>
    <span onClick={() => display("00")}>00</span>
    <span onClick={() => display(".")}>.</span>
    <span onClick={() => calculate()} className="num equal">=</span>
</form>

 </> 
}

export default Main;