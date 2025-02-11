import React, { useState } from "react"
export const RegisterPage = () => {

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="register-div-container">
            <div className="register-form">
                <form className="form-div" onClick={handleSubmit()}>
                    <div className="form-elements">
                        <span>First Name:</span>
                        <input type="text" value={firstName} placeholder="Enter First Name"></input>
                    </div>
                    <div className="form-elements">
                        <span>Last Name:</span>
                        <input type="text" value={lastName} placeholder="Enter Last Name"></input>
                    </div>
                    <div className="form-elements">
                        <span>Email:</span>
                        <input type="email" value={email} placeholder="Enter Email"></input>
                    </div>
                    <div className="form-elements">
                        <span>Password:</span>
                        <input type="text" value={pass} placeholder="Enter Password"></input>
                    </div>
                    <div className="form-elements">
                        <button className="button">Register</button>
                    </div>


                </form>
            </div>
        </div>
    )
}