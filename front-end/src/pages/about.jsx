import { NavLink, useNavigate } from "react-router-dom";
import SocialAccounts from "../components/social-media";
import Button from '@mui/material/Button';
import FormDialog from "../components/MUI/dialog";

const About = () => {

    const handleHireMe = async (e) => {
        e.preventDefault();

    }

    const Navigate = useNavigate();

    return (
        <div>
            <div className="btech-degree-container" style={{ position: "relative", width: "100%" }}>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
                    <div style={{ width: "50%", position: "relative", marginTop: "50px" }}>
                        <h1 className="text-left"><span className="pacifico-regular">I am an </span><span style={{ fontSize: "60px", color: "crimson" }}>N&nbsp;I&nbsp;T</span> <span className="pacifico-regular"> ian</span></h1>
                        <hr />
                        <p className="ubuntu-regular">I live in Kadapa, Andhra Prdesh. I am an Electronics Student at 🏫 NIT Agartala. I love using 🧑‍💻 Software as a solution for every Problem. Currently, I’m a 🧑‍🎓 final-year student & open for an intern or a new job opportunity. I interested in learning 🤓 new things.</p>
                        <div>
                            <p>Follow me :</p>
                            <SocialAccounts />
                            <p style={{marginTop:"10px"}}>
                                <FormDialog />
                                &nbsp; <Button type='submit' variant="outlined" color="error" onClick={(e) => { e.preventDefault(); Navigate('/contact-me'); }}>Contact Me</Button>
                            </p>
                        </div>

                    </div>

                    <div className="text-center" style={{ width: "fit-content", padding: "20px 30px" }}>
                        <img className="dp-img" src={require("../images/dp3.jpg")} alt="dp-3" style={{ width: "330px", rotate: "14deg", textAlign: "center", borderRadius: "2px" }} />
                    </div>
                </div>
                <hr />
                <div>
                    <div className="btech-degree" style={{ marginTop: "-40px", width: "500px" }}></div>
                    <div style={{ paddingTop: "75px", zIndex: "5" }}>
                        <h1 className="text-center pacifico-regular"><span style={{ fontSize: "60px" }}><span style={{ color: "crimson" }}>S</span>riram Santhosh</span></h1>
                        <h1 className="text-center pacifico-regular" style={{ marginLeft: "400px", lineHeight: "10px" }}>B.<span style={{ color: 'crimson' }}>Tech</span></h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;