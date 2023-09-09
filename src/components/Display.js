import React,{useState} from "react";


const Display=(props)=>{
    const [ID,setID]=useState('')
    const [Name,setName]=useState('')

    const idHandler=(e)=>{
        setID(e.target.value)
        
    }


    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    

    const func1=(e)=>{
        e.preventDefault()
        console.log(ID)
        console.log(Name)
        props.setnum(...props.num,[{ID,Name}])
        console.log(props.num)

        setID('')
        setName('')

    }

    return(
        <div>
            <form >
                <label>ID</label>
                <input id="ID" type="number" onChange={idHandler}></input>
                 <label>Name</label>
                 <input type="text"   onChange={nameHandler}></input>
                 <button type="submit" onClick={func1}>Submit</button>

            </form>
            </div>
    )
    
}


export default Display;