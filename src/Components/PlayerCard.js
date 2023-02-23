const PlayerCard = ({selectedPlayer}) => {

    function renderCard(playerName,PlayerPoints){
        return(
            <div>
                <img className="w-full" src="https://fantasy-football-bhemu.vercel.app/static/media/player.a9159a27c9be759cc066.png" alt="Player Image" />
                <div className="px-6 py-4 flex flex-col items-center">
                    <div className="font-bold text-xl mb-2">
                        {playerName}
                    </div>
                    <h2 className="text-2xl">
                        {PlayerPoints?PlayerPoints:"N/A"}
                    </h2>
                    <h2 >
                        Points
                    </h2>
                </div>
            </div>
        )
    }

    return ( 
        <div className="max-w-sm rounded-lg pt-10 overflow-hidden shadow-lg h-1/5">
            {
                selectedPlayer.operatorPlayerName?renderCard(selectedPlayer.operatorPlayerName,selectedPlayer.fantasyPoints):""
            }
        </div>
     );
}
 
export default PlayerCard;