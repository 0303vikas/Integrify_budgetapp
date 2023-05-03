import useInput from "./InputHook"

interface IncomeExpense {
    source: string,
    amount: string,
    date: string
}

const DataDisplayForm = ({transectionHistory}: {transectionHistory: IncomeExpense[]}) => {
    return(
        <ul>
            {transectionHistory.map((item, index) =>  <li key={item.source+index}>{item.source}: {item.amount}EUR on {item.date}</li>                
            )}
        </ul>
    )
}

export default DataDisplayForm