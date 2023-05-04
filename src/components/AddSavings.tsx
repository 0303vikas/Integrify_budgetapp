import useInput from "./InputHook"

interface PropsTransferToSavings {
    amountLeft: number,
    reduceAmount: (args: number) => void,
    addSavings: (args: number) => void,
    removeSavings: (args: number) => void,
    addAmount: (args: number) => void
}

const TransferToSavings = ({amountLeft,reduceAmount,addSavings,removeSavings, addAmount}: PropsTransferToSavings) => {
    const setSavings = useInput()
    const handleTransferSaving = () => {
        reduceAmount(Number(setSavings.value))
        addSavings(Number(setSavings.value))
    }
    const handletransferCurrent = () => {
        addAmount(Number(setSavings.value))
        removeSavings(Number(setSavings.value))
        
    }
    return(
        <aside>
            <p>Current balance: {amountLeft}</p>
            <label htmlFor="input-transfer">Transfer to savings account and back</label>
            <input id="input-transfer" placeholder='123...' {...setSavings} type='number'  required/>
            <button onClick={handleTransferSaving}>Transfer to Saving</button>
            <button onClick={handletransferCurrent}>Transfer to Current</button>
        </aside>
    )
}

export default TransferToSavings