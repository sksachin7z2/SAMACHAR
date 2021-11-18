import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
    render() {
        return (
           <div style={{backgroundColor:"transparent" ,textAlign:'center',paddingTop:"5vh"}} >
                <img src={loading} alt="loading..." width="5%" />
            </div>
        )
    }
}

export default spinner
