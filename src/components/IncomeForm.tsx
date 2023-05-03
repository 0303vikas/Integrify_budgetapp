import { useState } from "react"
import useInput from "./InputHook"
import DataDisplayForm from "./TransectionDisplay"

interface PropsIncomeHandling {
    addAmount: (args: number) => void
}

interface IncomeExpense {
    source: string,
    amount: string,
    date: string
}

const IncomeHandlingForm = ({addAmount}:PropsIncomeHandling) => {
    const sourceInput = useInput()
    const amountInput = useInput()
    const dateInput = useInput()
    const [transection, setTransection] = useState<IncomeExpense[]>([])
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = {
            source: sourceInput.value,
            amount: amountInput.value,
            date: dateInput.value
        }
        setTransection([...transection,formData])
        addAmount(Number(amountInput.value))        
    }
    return(
        <article>
            <form id="form-income" onSubmit={handleSubmit}>
                <label htmlFor="input-salary-source">IncomeSource </label>
                <input id="input-salary" placeholder='salary' {...sourceInput} type='text' required/>
                <label htmlFor="input-income">Amount of income </label>
                <input id="input-income"placeholder='123...' {...amountInput}type='number' required/>
                <label htmlFor="input-date-income">Date of Income </label>
                <input id="input-date-income" placeholder='dd.mm.yyyy' {...dateInput} type='date'  required/>
                <button type="submit">Add income</button>
            </form>
            <DataDisplayForm transectionHistory={transection}/>
        </article>
    )
}

export default IncomeHandlingForm;