import React,{useState} from 'react'
import '../Css/LoginForm.css'
export const LoginForm = () => {

    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return(
            // <div className='login-form-container'>
            //     <form onSubmit={handleSubmit}>
            //         <div className='form-elements'>
            //             <label>Email:</label>
            //             <input type='email' value={email} placeholder='Enter your Email' onChange={(e)=>{setEmail(e.target.value)}}></input>
            //         </div>                
            //         <div className='form-elements'>
            //             <label>Password:</label>
            //             <input type='password' value={pass} placeholder='Enter your password' onChange={(e)=>{setPass(e.target.value)}}></input>
            //         </div>                
            //         <div className='form-elements'>
            //             <button>Login</button>
            //         </div>
            //     </form>
            // </div>
            <div className='demo-div'>
                
            </div>
    )
}