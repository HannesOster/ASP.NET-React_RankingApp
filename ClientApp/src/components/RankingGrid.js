



const RankingGrid = ({ items, imgArray }) => {

    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle = [];
    const cellCollectionBottom = [];
    const cellCollectionWorst = [];


    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            let item = items.find(o => o.ranking === rankNum);
            cellCollection.push(<div id={`rank-${rankNum}`} className="rank-cell"></div> );
    }
        else {
            cellCollection.push(<div className="row-label">
                <h4>{rowLabel}</h4>
            </div>);
        }
    }
    function createCellsForRow(rowNum) {
        let rankNum = 0;
        let currCollection = [];
        let label = "";
        const numCells = 4;

        for (let a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells + (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTop;
                label = "Top Tier";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionMiddle;
                label = "Middle Tier";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionBottom;
                label = "Bottom Tier";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionWorst;
                label = "Worst Tier";
            }
            pushCellMarkupToArr(currCollection, rankNum, label);
        }
    };
    function createCellsfForRows() {
        const maxRows = 4;
        for (let row = 1; row <= maxRows; row++) {
            createCellsForRow(row);
        }
    }


    function createRowsForGrid(){
        rankingGrid.push(<div className="rank-row top-tier">{cellCollectionTop}</div>);
        rankingGrid.push(<div className="rank-row middle-tier">{cellCollectionMiddle}</div>);
        rankingGrid.push(<div className="rank-row bottom-tier">{cellCollectionBottom}</div>);
        rankingGrid.push(<div className="rank-row worst-tier">{cellCollectionWorst}</div>);
        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsfForRows();
        return createRowsForGrid()
    }

    return (
        <div className="rankings">
            {createRankingGrid() }</div>
    )
}

export default RankingGrid;