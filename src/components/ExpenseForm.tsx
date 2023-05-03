import React, {useState, FunctionComponent} from 'react'
import IncomeHandlingForm from './IncomeForm'
import ExpenseHandlingForm from './SpentForm'
import TargetSetForm from './TargetForm'
import TransferToSavings from './AddSavings'

const ExpenseForm = () => {
    const [amountLeft, setAmountLeft] = useState<number>(0)
    const [savings, setSavings] = useState<number>(0)
    const [progress, setProgress] = useState(0)
    const [targetAmount, setTargetAmount] = useState(0)
    const progressData = (setTarget: number) => {
        let progressPercent = Math.ceil((savings*100)/Number(setTarget))
        setProgress(progressPercent)
        setTargetAmount(setTarget)
    }    
    const addAmount = (amount: number) => setAmountLeft(amountLeft+amount)
    const reduceAmount = (amount: number) => setAmountLeft(amountLeft-amount)
    const addSavings = (amount: number) => {
        setSavings(savings+amount)
        let progressPercent = Math.ceil((savings*100)/Number(targetAmount))
        setProgress(progressPercent)
    }   
  return (
    <section>
        <IncomeHandlingForm addAmount={addAmount}/>
        <ExpenseHandlingForm reduceAmount={reduceAmount}/>
        <TargetSetForm savings={savings} progress={progress} progressData={progressData}/>
        <TransferToSavings amountLeft={amountLeft} reduceAmount={reduceAmount} addSavings={addSavings} />             
    </section>    
  )
}

export default ExpenseForm
