import useInput from "./InputHook"

interface IncomeExpense  {
    transectionHistory: TransectionHistory[],
    removeTransection: (args: number) => void
}

type TransectionHistory = {
    
    source: string,
    amount: string,
    date: string
}

const DataDisplayForm = ({transectionHistory,removeTransection}: IncomeExpense) => {
    return(
        <ul>
            {transectionHistory.map((item, index) =>  <li id={item.source+index} key={item.source+index}>{item.source}: {item.amount}EUR on {item.date}<button onClick={() =>removeTransection(index) }>Delete</button></li>                
            )}
        </ul>
    )
}

export default DataDisplayForm