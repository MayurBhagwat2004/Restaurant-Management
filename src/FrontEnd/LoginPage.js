import React,{useState} from 'react'
import '../Css/LoginForm.css'
import { NavBar,Footer,ReservationBlock,StaffSection } from './home'
import { useNavigate,Route,Router,Routes } from 'react-router-dom'
export const LoginForm = () => {

    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate();

    const redirectUser = () => {
        navigate("/")
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!email || !pass && pass.length<5){
            setError("Please Fill Your Credentials")

        }
        else{
            setError("")
            localStorage.setItem("isLoggedIn",true)
            alert("Form Submitted Successfully!")
            redirectUser()
        }
    }


    return(
        <>
        <NavBar/>
            <div className='login-form-container'>
                <div className='form-div'>
                <form onSubmit={handleSubmit}>
                    <div className='error-message-div'>
                        {error && <p className='error-message'>{error}</p>}
                    </div>
                    <div className='form-elements'>
                        <label>Email:</label>
                        <input type='email' value={email} placeholder='Enter your Email' onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </div>                
                    <div className='form-elements'>
                        <label>Password:</label>
                        <input type='password' value={pass} placeholder='Enter your password' onChange={(e)=>{setPass(e.target.value)}}></input>
                    </div>                
                    <div className='form-elements'>
                        <button>Login</button>

                    </div>
                </form>
                </div>
            </div>
            <Footer/>
        </>
            
    )
}