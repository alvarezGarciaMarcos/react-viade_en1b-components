import React from 'react'
import './InputText.css'
import  {BsSearch} from 'react-icons/bs'

className InputText extends React.Component{

    constructor(props){
        super(props)
        this.placeholder = props.placeholder
    }

    render(){
        return (
            <div data-testid = "input-container">
                <input data-testid = "input-field" type="text" placeholder={this.placeholder}></input>
                <BsSearch classNameName="icon"></BsSearch>
            
            </div>
            
        )
    }
}

export default InputText