import InputBox from "./Components/InputBox";
import axios from "axios";
import { useState , useEffect} from "react";

const Header = ({savedInput,setSavedInput}) => {
    // const [savedInput, setSavedInput] = useState({operator:"",gameType:"",slateName:""});

    const [operator, setOperator] = useState(["Select Operator"]);
    const [gameType, setGameType] = useState([]);
    const [slateName, setSlateName] = useState([]);

    useEffect( () => {
        axios.get('https://app.aurictouch.com/operator').then(res => {
            // console.log(res.data.data);
            setOperator(res.data.data);
        })
    } , [] )

    const onOperatorChange = (value) => {
        setSavedInput({...savedInput,operator:value,gameType:"",slateName:""})
        axios.get(`https://app.aurictouch.com/operatorGameType?operator=${value}`).then(res => {
            // console.log(res.data.data);
            setGameType(res.data.data);
        })
    }

    const onGameChange = (value) => {
        setSavedInput({...savedInput,gameType:value,slateName:""})
        axios.get(`https://app.aurictouch.com/operatorName?operator=${savedInput.operator}&operatorGameType=${value}`).then(res => {
            // console.log(res.data.data);
            setSlateName(res.data.data);
        })
    }

    const onSlateChange = (value) => {
        setSavedInput({...savedInput,slateName:value})
    }

    return (  
        <nav className="navbar bg-white dark:bg-violet-300 flex justify-start py-3 pl-2">
            <h1 className="p-3 lg:px-5 bg-violet-400 rounded-2xl"> Fantasy Football League </h1>
            <div className="dropDownList dark:bg-violet-300 flex justify-evenly grow items-center">
                <InputBox operator={operator} defaultOption="Select Operator" onValueChange={onOperatorChange} />
                <InputBox operator={gameType} defaultOption="Select Game Type" onValueChange={onGameChange} />
                <InputBox operator={slateName} defaultOption="Select Slate Option" onValueChange={onSlateChange}/>
            </div>
        </nav>
    );
}

export default Header;