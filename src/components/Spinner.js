import React from 'react'
import loading from './loading.gif'
const Spinner=()=> {
   
        return (
           <div style={{backgroundColor:"transparent" ,textAlign:'center',paddingTop:"5vh"}} >
                <img src={loading} alt="loading..." width="5%" />
            </div>
        )
    
}

export default Spinner
