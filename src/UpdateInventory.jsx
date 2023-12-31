import UpdateObjectItems from '../utils/update-inventory'
import { useState } from 'react'

export default function UpdateItems(){
    const [input1, setInput1] = useState([])
    const [input2, setInput2] = useState([])
    const [result, setResult] = useState('')
    const [showInput, setShowInput] = useState([])
    const [error, setError] = useState([])
    const [pressed, setPressed] = useState(false)
    
    function handleSubmit (event){
        event.preventDefault();
        setPressed(true)
        setResult('')

        setShowInput('Please enter two valid 2D Arrays!')

        if(input1.length === 0 || input2.length === 0 || input1[0][0] === 'undefined' || input2[0][0] === 'undefined'){
            setShowInput('Please enter two valid 2D Arrays!')
        } else {
            const jsonString1 = eval('(' + input1 + ')')
            const jsonString2 = eval('(' + input2 + ')')
            
            if(UpdateObjectItems(jsonString1, jsonString2)){
                setShowInput(input1 + ' + ' + input2 + ' =')
            }


            setResult(UpdateObjectItems(jsonString1, jsonString2))  
        }

    }

    function DisplayResult () {
        return (
            <>
                <ul style={{listStyleType: 'none'}}>{result.map((item) => {
                return (
                <li>{`[ ${item[0]}, ${item[1]} ]`}</li>
                )
            })}</ul>
            </>
        )
    }
    
    return (
        <>
            <div style={{padding: '20px'}}>
            <section style={{border: '10px solid', padding: '20px', margin: '20px', borderRadius: '25px'}}>
            <h2>Update Array Items</h2>
            <p>A function to update a 2D array with the items of another!</p>
            <p>Give it a try with the example below, or any 2D arrays of your choice.</p>
            <p>[[10, "apples"], [20, "bananas"], [15, "carrots"], [19, "dragonfruit"]]</p>
            <form onSubmit={handleSubmit}>
                <input
                    style={{margin: '5px'}}
                    type="text area"
                    placeholder="Enter first array here!"
                    value={input1}
                    onChange={(event) => {
                        setInput1(event.target.value)
                    }}
                />
                <input
                    style={{margin: '5px'}}
                    type="text area"
                    placeholder="Enter second array here!"
                    value={input2}
                    onChange={(event) => {
                        setInput2(event.target.value)
                    }}
                />
                <button style={{margin: '15px'}}>Activate Function!</button>
            </form>
            <p>{pressed === true ? showInput : null}</p>
            <section>{result.length > 0 && pressed === true ? <DisplayResult /> : null}</section>
            </section>
            </div>
        </>
    )
}