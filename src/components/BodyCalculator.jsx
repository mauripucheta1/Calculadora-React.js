import { useState } from "react"

export const Calculator = () => {

    const [isOn, setIsOn] = useState(false);
    const [display, setDisplay] = useState("");

    const handleToggle = () => {

        setIsOn((prev) => {
            const next = !prev;
            if (!next) setDisplay(""); 
            return next;
        });

    };

    const handleAC = () => {

        if (!isOn) return;
        setDisplay("");

    };

    const handlePress = (key) => {

        if (!isOn) return;
        setDisplay((prev) => prev + key);

    };

    const handleTotal = () => {

        if (!isOn) return;

        try {
            
            const expression = display
            .replace(/x/g, "*")
            .replace(/÷/g, "/");

            const result = new Function("return " + expression)();

            setDisplay(result.toString());

        } catch {

            setDisplay("Error");

        }

    };

    return (

        <div className="w-[90%] md:w-[60%] lg:w-[40%] 2xl:w-[40%] h-[80%] bg-gray-800 rounded-xl border border-white flex flex-col justify-between items-center py-5">
        
            {/* Display */}
            <div className="w-[90%] h-[15%] flex justify-end items-center rounded-xl bg-green-400 px-4 max-w-[90%] truncate">

                <p className="text-white font-medium text-4xl" id="dinamycInput">{isOn ? display : "OFF"}</p>

            </div>

            {/* Options Buttons */}
            <div className="w-[90%] h-auto flex justify-end items-center text-white">

                <div className="flex justify-center items-center gap-4">

                    <button type="button" id="reset" onClick={ handleAC } className="p-4 bg-orange-400 rounded-xl hover:bg-orange-500 transition-all ease-in duration-150 hover:cursor-pointer font-medium">
                        AC
                    </button>

                    <button type="button" id="turnOn" onClick={ handleToggle } className="p-4 bg-green-400 rounded-xl hover:bg-green-500 transition-all ease-in duration-150 hover:cursor-pointer font-medium">
                        ON / OFF
                    </button>

                </div>

            </div>

            {/* Body */}
            <div className="w-[90%] h-[70%] aspect-square grid grid-cols-4 grid-rows-4 gap-4 text-white">
        
                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress("7") }>

                    <p className="text-4xl font-semibold">7</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress("8") }>

                    <p className="text-4xl font-semibold">8</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress("9") }>

                    <p className="text-4xl font-semibold">9</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress(" ÷ ") }>

                    <p className="text-4xl font-semibold">÷</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress("4")}>

                    <p className="text-4xl font-semibold">4</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress("5")}>

                    <p className="text-4xl font-semibold">5</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress("6")}>

                    <p className="text-4xl font-semibold">6</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress(" x ")}>

                    <p className="text-4xl font-semibold">x</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress("1")}>

                    <p className="text-4xl font-semibold">1</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress("2")}>

                    <p className="text-4xl font-semibold">2</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress("3")}>

                    <p className="text-4xl font-semibold">3</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress(" - ")}>

                    <p className="text-4xl font-semibold">-</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress("0")}>

                    <p className="text-4xl font-semibold">0</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress(".")}>

                    <p className="text-4xl font-semibold">.</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={handleTotal}>

                    <p className="text-4xl font-semibold">=</p>

                </div>

                <div className={`rounded-xl flex justify-center items-center sombraCaja bg-gray-600 hover:bg-gray-700 transition-all duration-150 ease-in 
                    ${isOn ? "hover:cursor-pointer" : "hover: cursor-not-allowed"}`} onClick={ () => handlePress(" + ")}>

                    <p className="text-4xl font-semibold">+</p>

                </div>

            </div>

        </div>

    )

}