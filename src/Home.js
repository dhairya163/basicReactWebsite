import Table from "./Components/Table";
import PlayerCard from "./Components/PlayerCard";
import { useState } from "react";

const Home = ({savedInput}) => {
    const [selectedPlayer , setSelectedPlayer] = useState({})

    return ( 
        <div className="flex pt-10 pl-10">
            <Table savedInput={savedInput} setSelectedPlayer={setSelectedPlayer}/>
            <PlayerCard selectedPlayer={selectedPlayer}/>
        </div>
     );
}

export default Home;