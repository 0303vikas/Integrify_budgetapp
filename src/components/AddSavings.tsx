import useInput from "./InputHook"

interface PropsTransferToSavings {
    amountLeft: number,
    reduceAmount: (args: number) => void,
    addSavings: (args: number) => void
}

const TransferToSavings = ({amountLeft,reduceAmount,addSavings}: PropsTransferToSavings) => {
    const setSavings = useInput()
    const handleClick = () => {
        reduceAmount(Number(setSavings.value))
        addSavings(Number(setSavings.value))
    }
    return(
        <aside>
            <p>Current balance: {amountLeft}</p>
            <label htmlFor="input-transfer">Transfer to savings account</label>
            <input id="input-transfer" placeholder='123...' {...setSavings} type='number'  required/>
            <button onClick={handleClick}>Transfer</button>
        </aside>
    )
}

export default TransferToSavings