import { NavLink, useNavigate } from "react-router-dom";
import SocialAccounts from "../components/social-media";
import Button from '@mui/material/Button';
import FormDialog from "../components/MUI/dialog";

const About = () => {

    let matter = "I am an Electronics student at 🏫 NIT Agartala. I live in Kadapa, Andhra Prdesh. I love using 🧑‍💻 Software as a solution for every problem. Currently, I’m a 🧑‍🎓 final-year student & open for an intern or a new job opportunity. I interested in learning 🤓 new things."

    const Navigate = useNavigate();

    return (
        <div>
            <div className="about-nitian-top-text">
                    <h1 className="text-center"><span className="pacifico-regular">I am an </span><span style={{ fontSize: "60px", color: "crimson" }}>N&nbsp;I&nbsp;T</span> <span className="pacifico-regular"> ian</span></h1>
                    <hr />
                    <p className="ubuntu-regular">{matter}</p>
            </div>

            <div className="btech-degree-container" style={{ position: "relative", width: "100%" }}>
                
                <div className="about-nitian" style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
                    <div className="" style={{ position: "relative", marginTop: "50px" }}>

                        <h1 className="text-left about-nitian-bottom-text"><span className="pacifico-regular">I am an </span><span style={{ fontSize: "60px", color: "crimson" }}>N&nbsp;I&nbsp;T</span> <span className="pacifico-regular"> ian</span></h1>
                        <hr className="about-nitian-bottom-text" />
                        <p className="ubuntu-regular about-nitian-bottom-text">{matter}</p>
                        <div className="bottom-hire" style={{width:"100%"}}>
                            <p className="ubuntu-regular">Follow me :</p>
                            <SocialAccounts />
                            <p style={{ marginTop: "10px" }}>
                                <FormDialog />
                                &nbsp; <NavLink to="https://wa.me/7815980132" target="_blank" text="Hello Sriram! Your portfolio caught my eye, and I'm interested in connecting with you."><Button type='submit' variant="outlined" color="error">Ping Me &nbsp; <i className="fa-brands fa-whatsapp"></i></Button></NavLink>
                            </p>
                        </div>
                    </div>

                    <div className="text-center" style={{ padding: "20px 30px", marginTop:'25px' }}>
                        <img className="dp-img" src={require("../images/dp3.png")} alt="dp-3" style={{  rotate: "14deg", textAlign: "center", borderRadius: "2px" }} />
                    </div>
                </div>

                {/* <div style={{position:"relative"}}>
                    <div className="btech-degree" style={{ marginTop: "-40px", width: "500px", position: "relative" }}></div>
                    <div style={{ marginTop: "-240px", paddingBottom: "75px", zIndex: "5", position: "relative" }}>
                        <h1 className="text-center pacifico-regular patta-name-1"><span style={{ color: "crimson" }}>S</span>riram Santhosh</h1>
                        <h1 className="text-center pacifico-regular patta-name-2">B.<span style={{ color: 'crimson' }}>Tech</span></h1>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default About;