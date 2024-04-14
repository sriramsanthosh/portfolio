import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendSVG from "../images/send.svg";

const Contact = () => {
    return(
        <div className='contact-container' style={{display:"flex"}}>

            <div style={{textAlign:"center", width:"100%"}}>
                <img style={{width:"400px"}} src={require("../images/contact2.png")} alt="contact-img" />
            </div>

            <form style={{width:"100%", marginTop:"30px"}}>
                <h2 style={{margin:"10px 0"}} className='protest-riot-regular'>Get in <span style={{color:"crimson"}}>Touch</span></h2>

                <p className='ubuntu-regular' style={{margin:"10px 0", fontSize:"18px"}}>Hey there! You want me to work with you? Thats really the spirit I am looking for. Drop a message here.</p>
                <input className='ubuntu-regular input-box' type="text" name="name" id="name" placeholder="Name*" /><br />
                <input className='ubuntu-regular input-box' type="email" name="email" id="email" placeholder="Email*" /><br />
                <input className='ubuntu-regular input-box' type="text" name="mobile" id="mobile" placeholder="Mobile No."/><br />
                <textarea className='input-box' name="message" id="message" rows="4" placeholder="Message*" required></textarea><br />
                <Button variant="contained" color="success">Send Msg </Button>
                <LoadingButton loading variant="outlined">Submit</LoadingButton>
            </form>
        </div>
    )
}

export default Contact
