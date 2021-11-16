import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
    render() {
        return (
           <div style={{height:"70vh"}} className="d-flex align-items-center justify-content-center ">
                <img src={loading} alt="loading..." />
            </div>
        )
    }
}

export default spinner
