import Button from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import Axios from "axios";
import AlertMUI from '../components/MUI/alert';
const Contact = () => {

    const [submit, setsubmit] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleContactForm = async(e)=>{
        e.preventDefault();
        setSuccess(false);
        setError(false);
        setsubmit(true);
        let data = {
            name:e.target.name.value,
            email: e.target.email.value,
            mobile:e.target.mobile.value,
            message: e.target.message.value
        }
        await Axios.post("https://cheerful-red-cormorant.cyclic.app/send-mail", data).then((res)=>{
            console.log(res.data);
            let contactForm = document.getElementById("contact-form");
            setSuccess(true);
            if(res.status === 200){
                contactForm.reset();
            }
        }).catch((err)=>{
            console.log("Connection Error..");
            setError(true);
        });
        setsubmit(false);
    }

    return(
        <div className='contact-container' style={{display:"flex", width:"100%"}}>
            {/* <div style={{textAlign:"center", width:"100%"}}>
                <img style={{width:"400px"}} src={require("../images/contact2.png")} alt="contact-img" />
            </div> */}
            <div className="contact-img">

            </div>
            <form id='contact-form' onSubmit={handleContactForm} style={{width:"100%", marginTop:"30px", marginBottom:"12px"}}>
                <h2 style={{margin:"10px 0"}} className='protest-riot-regular'>Get in <span style={{color:"crimson"}}>Touch</span></h2>
                <p className='ubuntu-regular' style={{margin:"10px 0"}}>Hey there! You want me to work with you? Thats really the spirit I am looking for. Drop a message here.</p>
                {success && <AlertMUI status="success" message="Message received.. I'll get back to you shortly!"/>}
                {error && <AlertMUI status="error" message="Connection Error.. Try Again"/>}
                <input className='ubuntu-regular input-box' type="text" name="name" id="name" placeholder="Name*" required /><br />
                <input className='ubuntu-regular input-box' type="email" name="email" id="email" placeholder="Email*" required /><br />
                <input className='ubuntu-regular input-box' type="text" name="mobile" id="mobile" placeholder="Mobile No." required /><br />
                <textarea className='input-box' name="message" id="message" rows="4" placeholder="Message*" required></textarea><br />
                {!submit && <Button type='submit' variant="contained" color="success">Send Msg </Button>}
                {submit && <LoadingButton style={{background:"#2E7D32"} } loading variant="outlined"> Send Msg </LoadingButton>}
            </form>
        </div>
    )
}

export default Contact
