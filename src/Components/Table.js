import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Table = ({savedInput,setSelectedPlayer}) => {
    const [players , setPlayers ] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const nPages = Math.ceil(players.length / recordsPerPage);

    useEffect( () =>{
        axios.get(`https://app.aurictouch.com/players?operator=${savedInput.operator}&operatorGameType=${savedInput.gameType}&operatorName=${savedInput.slateName}`)
        .then(val => {setPlayers(val.data.data); setCurrentPage(1)})
    }, [savedInput.slateName])

    const nextPage = () =>{
        if(currentPage<nPages){
            setCurrentPage(currentPage+1)
        }
    }

    const prevPage = () =>{
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }

    return ( 
            <div className="overflow-x-auto w-2/3 overflow-x-auto">
               {players.length > 0 && <Pagination nextPage={nextPage} prevPage={prevPage} firstIndexOfCurrentPage={indexOfFirstRecord+1} lastIndexOfCurrentPage={indexOfLastRecord} totalEntries={players.length}/>}
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="border rounded-lg">
                        <table className="w-full divide-y divide-gray-200 overflow-x-auto overflow-x-scroll">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Team
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Position
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Salary
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Points
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {
                                    players.slice(indexOfFirstRecord,indexOfLastRecord).map((player) => (
                                    <tr key={player.playerId} onClick={() => setSelectedPlayer(player)} className="cursor-pointer">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap w-1/5">
                                            {player.operatorPlayerName}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap w-1/5">
                                            {player.team}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap w-1/5">
                                            {player.operatorPosition}
                                        </td>
                                        <td className="text-red-500 px-6 py-4 text-sm font-medium whitespace-nowrap w-1/5">
                                                {player.operatorSalary}
                                        </td>
                                        <td className="text-green-500 px-6 py-4 text-sm font-medium whitespace-nowrap w-1/5">
                                                {player.fantasyPoints}
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
}
 
export default Table;