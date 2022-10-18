import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [checked, setChecked] = useState([])

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    }
    else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const generatePassword = () => {
    var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charsLower = "abcdefghijklmnopqrstuvwxyz";
    var charsNum = "0123456789";
    var charsSymbols = "!@#$%^&*()";

    var passwordLength = 10;
    var currentPassword = ""
    var combinedData = ""

    if (checked.includes("1")) {
      combinedData = combinedData.concat(charsUpper)
    }
    if (checked.includes("2")) {
      combinedData = combinedData.concat(charsLower)
    }
    if (checked.includes("3")) {
      combinedData = combinedData.concat(charsNum)
    }
    if (checked.includes("4")) {
      combinedData = combinedData.concat(charsSymbols)
    }
    console.log(combinedData)

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * combinedData.length);
      currentPassword += combinedData.substring(randomNumber, randomNumber + 1);
    }
    if (checked.length > 3) {
      setPasswordStrength("High")
    } else if (checked.length > 2) {
      setPasswordStrength("Medium")
    } else {
      setPasswordStrength("Low")
    }
    setPassword(currentPassword);

  }

  return (
    <div className="h-screen bg-black flex justify-center">
      <div className="space-y-3 p-24 w-2/5">

        <div className="text-gray-400 font-weight-bold text-md text-center ">
          <p>Password Generator</p>
        </div>
        <div className="flex justify-between text-white text-bold text-2xl rounded-md  bg-zinc-800 border border-gray-800 p-4 shadow-lg">
          <label type="text" className="" value={password}>{password}</label>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { navigator.clipboard.writeText(password) }} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-green-400 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
          </svg>

        </div>
        <div className="rounded-sm space-y-4  bg-zinc-800 border border-gray-800 p-4 shadow-lg">
          <div className="flex justify-between text-white text-bold">
            <label type="text" className="">Character Length</label>
            <label type="text" className="text-green-400 text-xl font-weight-bolder">10</label>
          </div>
          <div className="flex flex-col items-start space-y-4 text-white">
            <div className="flex flex-row space-x-3 items-center">
              <input type="checkbox" className="w-5 h-4 text-green-600 border-0 rounded-md focus:ring-0" value="1" onChange={handleCheck} /><label>Include Uppercase letters</label>
            </div>
            <div className="flex flex-row space-x-3 items-center">
              <input type="checkbox" className="w-5 h-4 text-green-600 border-0 rounded-md focus:ring-0" value="2" onChange={handleCheck} /><label>Include Lowercase letters</label>
            </div>
            <div className="flex flex-row space-x-3 items-center">
              <input type="checkbox" className="w-5 h-4 text-green-600 border-0 rounded-md focus:ring-0" value="3" onChange={handleCheck} /><label>Include Numbers</label>
            </div>
            <div className="flex flex-row space-x-3 items-center">
              <input type="checkbox" className="w-5 h-4 text-green-600 border-0 rounded-md focus:ring-0" value="4" onChange={handleCheck} /><label>Include Symbols </label>
            </div>



          </div>
          <div className="flex justify-between text-white text-bold">
            <label type="text" className="text-2xl">Strength</label>
            <label type="text" className="text-yellow-400 text-2xl font-weight-bolder">{passwordStrength}</label>
          </div>
          <div className="text-center p-4">
            <input type="button" value="Generate" className="rounded-md bg-green-400 w-full h-full p-4 cursor-pointer" onClick={() => generatePassword()} />
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
