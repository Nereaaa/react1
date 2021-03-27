import React from 'react';


const Input = (props) => {
    return(
        <div className="p-3 m-3">
            <form>
                <label>{props.labelName}</label>
                <input type="number" placeholder="Introduzca número" value={props.value} onChange={props.change}/>
            </form>
        </div>
    )
}

export default Input;