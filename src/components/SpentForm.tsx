import { useState } from "react"
import useInput from "./InputHook"
import DataDisplayForm from "./TransectionDisplay"

interface PropsExpenseHandling{
    reduceAmount: (args: number) => void
}

interface IncomeExpense {
    source: string,
    amount: string,
    date: string
}

const ExpenseHandlingForm = ({reduceAmount}: PropsExpenseHandling) => {
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
        reduceAmount(Number(amountInput.value))        
    }
    return(
        <article>
            <form id="form-expense" onSubmit={handleSubmit}>
                <label htmlFor="input-expense-source">Expense source</label>
                <input id="input-expense-source" placeholder='eg: Electricity Bill' {...sourceInput} type='text'  required/>       
                <label htmlFor="input-expense">Amount of expense</label>
                <input id="input-expense" placeholder='123...' {...amountInput}  type='number'  required/>       
                <label htmlFor="input-data-expense">Date of expense</label>
                <input id="input-data-expense" placeholder='dd.mm.yyyy' {...dateInput}  type='date'  required/> 
                <button type="submit">Add expense</button>
            </form> 
            <DataDisplayForm transectionHistory={transection}/>
        </article>
    )
}

export default ExpenseHandlingForm