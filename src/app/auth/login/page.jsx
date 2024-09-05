"use client"
import Button from '@/app/components/button/button.jsx'

const Login = () =>{

    function testfunc2(){
        console.log('this is a test function from the login')
    }

    return(
        <div>
            <h1>Login</h1>
            <Button name="Login" color='red' func={testfunc2}/>
        </div>
    )
}

export default Login

