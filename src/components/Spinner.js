import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
    render() {
        return (
           <div style={{height:"100vh",backgroundColor:"transparent" ,textAlign:'center',paddingTop:"20vh"}} >
                <img src={loading} alt="loading..." width="10%" />
            </div>
        )
    }
}

export default spinner
