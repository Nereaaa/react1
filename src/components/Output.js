import React from 'react';


const Output = (props) => {
    return(
        <div className="p-3 m-3">
            <form>
                <label>{props.labelName} </label>
                <input type="number" value={props.value} disabled />
                
            </form>
        </div>
    )
}

export default Output;