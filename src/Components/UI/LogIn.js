import React, { useRef, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CartContext from '../Context/Cart-Context';

function LogIn() {

    const history = useNavigate();

    const logCtx = useContext(CartContext)

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    // const [isLogin, setIsLogin] = useState(true);



    console.log("before login",logCtx.isLoggedIn)


    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        console.log(enteredEmail, enteredPassword)

        // if (isLogin) {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7zBQf0px6OU6KOmQsl6htUKcMzlm5EWk', {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(res => {
                if (res.ok) {
                    console.log('Login Successful')
                    res.json().then((jwt) => {

                        logCtx.login(jwt.idToken,jwt.email)
                        // console.log("after login",jwt)
                        localStorage.setItem('token', jwt.idToken);
                        // logCtx.isLoggedIn=true
                        console.log("after login",logCtx.isLoggedIn)
                        history('/');

                    })

                }
            })
        
    }


    //            else {
    //             return res.json().then(data => {
    //                 let errorMessage = 'Login failed!';
    //                 if (data && data.error && data.error.message) {
    //                     errorMessage = data.error.message;
    //                 }

    //                 throw new Error(errorMessage);
    //             });
    //         }
    //     }).then(data => {
    //         console.log(data.idToken)
    //         logCtx.login(data.idToken);
    //         history('/');
    //     })
    //         .catch(err => { alert(err.message) });
    // }

    // const switchAuthModeHandler = () => {
    //     setIsLogin((prevState) => !prevState);
    // };


    return (
        <>
            <section style={{
                marginLeft: "auto", marginRight: "auto", marginTop: "12rem", width: '95%', maxWidth: "25rem",
                borderRadius: 6, backgroundColor: "#38015c", boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
                padding: "1rem", textAlign: "center", color: "white"
            }} >
                <p>Log In</p>
                <form>
                    <div style={{ margin: "2rem" }}>
                        <label htmlFor='email' style={{ padding: 15 }}>Your Email: </label>
                        <input type='email' required ref={emailInputRef}></input>
                    </div>
                    <div style={{ margin: "1rem" }}>
                        <label htmlFor='password' style={{ padding: 10 }}>Your Password: </label>
                        <input type='password' required ref={passwordInputRef}></input>
                    </div>
                    <Button style={{ backgroundColor: "red", cursor: "pointer" }} onClick={submitHandler}>LogIn</Button>
                </form>
            </section>
        </>
    )
}

export default LogIn;