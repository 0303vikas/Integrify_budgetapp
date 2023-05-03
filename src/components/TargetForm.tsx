import useInput from "./InputHook"

interface PropsTargetForm {
    savings: number,
    progress: number,
    progressData: (args: number) => void
}

const TargetSetForm = ({savings,progress,progressData}: PropsTargetForm) => {
    const setTarget = useInput()    
    const handleReset = () =>  progressData(Number(setTarget.value))
    return(
        <div>
            <label htmlFor="input-saving-target">Set target</label>
            <input id="input-saving-target" placeholder='123...' {...setTarget} type='number'  required/>
            <button onClick={handleReset}>Reset</button>
            <p>Current saving: {savings}</p>
            <p>Target: {progress}%</p>
            <progress value={progress} max={100} />
        </div>
    )
}

export default TargetSetForm