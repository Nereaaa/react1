import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class Multiplicador extends React.Component{

    render(){
        return(
            <div>
                <Button variant="light" onClick={()=> this.props.parent.numeroMultiplicador(37)}> x37</Button>
                <Button variant="light" onClick={()=> this.props.parent.numeroMultiplicador(43)}> x43</Button>
            </div> 
        );
    }
}
export default Multiplicador;