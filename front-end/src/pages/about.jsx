import { NavLink, useNavigate } from "react-router-dom";
import SocialAccounts from "../components/social-media";
import Button from '@mui/material/Button';
import FormDialog from "../components/MUI/dialog";
import "../styles/about.scss";
const About = () => {
    let matter = "Hey folks, I am Sriram Santhosh. I live in Kadapa, Andhra Prdesh. I love using 🧑‍💻 Software as a solution for every problem. I am interested in learning 🤓 new things. I did my graduation at NIT Agartala 🏫 in specialization with Electronics & Communication Engineering. Currently, I’m looking for oppurtunities and open for an intern or a full time job opportunity."

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
                        <div className="bottom-hire" style={{ width: "100%" }}>
                            <p className="ubuntu-regular">Follow me :</p>
                            <SocialAccounts />
                            <p style={{ marginTop: "10px" }}>
                                <FormDialog />
                                &nbsp; <NavLink to="https://wa.me/7815980132?text=Hi%20Sriram!%20I%20like%20your%20portfolio%20and%20want%20to%20get%20connected%20with%20you" target="_blank" text="I'm%20interested%20in%20your%20car%20for%20sale"><Button type='submit' variant="outlined" color="error">Ping Me &nbsp; <i className="fa-brands fa-whatsapp"></i></Button></NavLink>
                            </p>
                        </div>
                    </div>

                    <div className="text-center" style={{ padding: "20px 30px", marginTop: '25px' }}>
                        <img className="dp-img" src={require("../images/dp3.png")} alt="dp-3" style={{ rotate: "14deg", textAlign: "center", borderRadius: "2px" }} />
                    </div>
                </div>


                <h1 className="protest-riot-regular" style={{ fontSize: "40px", textAlign: "center", margin: "30px 0" }}><span style={{ color: "crimson" }}>Pro</span>fessional Skill Set<span style={{ backgroundColor: "#6C6C6D", borderRadius: '2px', color: "#323232" }}>&nbsp;</span></h1>
                <div className="flexbox">


                    <div className="skill-box"><i className="fa-solid fa-c"></i><i className="fa-solid fa-plus small-plus"></i><i className="fa-solid fa-plus small-plus"></i></div>
                    <div className="skill-box"><i className="fa-brands fa-js"></i></div>
                    <div className="skill-box"><i className="fa-brands fa-react"></i></div>
                    <div className="skill-box"><i className="fa-brands fa-node"></i></div>
                    <div className="skill-box"><i className="fa-brands fa-envira" style={{ transform: "rotate(45deg)" }}></i></div>
                    <div className="skill-box"><i className="fa-brands fa-git"></i></div>
                    <div className="skill-box"><i className="fa-brands fa-bootstrap"></i></div>
                    <div className="skill-box"><i className="fa-brands fa-css3-alt"></i></div>
                    <div className="skill-box"><i className="fa-brands fa-html5"></i></div>

                </div>
                <div className="btech-degree-letter-container" style={{ position: "relative" }}>
                    <div className="btech-degree" style={{ marginTop: "-40px", width: "500px", position: "relative" }}></div>
                    <div style={{ marginTop: "-240px", paddingBottom: "75px", zIndex: "5", position: "relative" }}>
                        <h1 className="text-center pacifico-regular patta-name-1"><span style={{ color: "crimson" }}>S</span>riram Santhosh</h1>
                        <h1 className="text-center pacifico-regular patta-name-2">B.<span style={{ color: 'crimson' }}>Tech</span></h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About;