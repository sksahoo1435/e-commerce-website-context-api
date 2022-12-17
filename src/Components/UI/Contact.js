import React,{useRef} from 'react'
import { Button } from 'react-bootstrap';
import Footer from './Footer'
import Navbars from './Navbars'
const Contact = (props) => {

    const Name=useRef("");
    const Email=useRef("");
    const Number=useRef("");

    async function submitHandler(event){
        event.preventDefault();

        const data={
            name:Name.current.value,
            email:Email.current.value,
            number:Number.current.value
        }
        console.log(data) 
        const response = await fetch("https://react-http-d7935-default-rtdb.firebaseio.com/ecommerce.json",{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const issue= await response.json();
        console.log(issue);
    }


    // async function addIssue(data){
    //     const response = await fetch("https://react-http-d7935-default-rtdb.firebaseio.com/ecommerce.json",{
    //         method:"POST",
    //         body: JSON.stringify(data),
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     });
    //     const issue= await response.json();
    //     console.log(issue);
    // }
    
  return (
    <>
    <Navbars/>
    <div style={{height:"100%",width:"70%",display:"fixed", marginLeft:"15%",marginRight:"15%",backgroundColor:"orange",borderRadius:"1.2rem"}}>
        <form style={{marginLeft:"5%"}} onSubmit={submitHandler}>

            <p style={{fontSize:"150%"}}>If you have any issue ,please give your details we are contact you as soon as posible..</p>
            <p style={{marginTop:"5%",color:"white"}}>Please give your details very carefully. we are going to contact with this. </p>
            
            <div style={{justifyContent:"space-evenly",display:"flex",marginTop:"10%"}}>
                <label>Name:</label>
                <input type="text" style={{borderRadius:"0.5rem"}} ref={Name}/>
            </div>
            <div style={{justifyContent:"space-evenly",display:"flex",marginTop:"5%"}}>
                <label>Email:</label>
                <input type="text" style={{borderRadius:"0.5rem"}} ref={Email}/>
            </div>
            <div style={{justifyContent:"space-evenly",display:"flex",marginTop:"5%"}}>
                <label>Number:</label>
                <input type="text" style={{borderRadius:"0.5rem"}} ref={Number} />
            </div>
            <div style={{justifyContent:"center",display:"flex",marginTop:"5%"}}>
                <Button onClick={submitHandler}>Submit</Button>
            </div>
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default Contact