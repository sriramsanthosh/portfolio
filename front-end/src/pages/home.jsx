
import SocialAccounts from "../components/social-media";

const Home = () => {

    
    const handleimg = ()=>{
        let dp = document.querySelector(".profile");
        dp.style.visibility = "visible";
        dp.style.marginTop = "0";
    }

    return (
            <div onLoad={handleimg} style={{ display: "flex", alignContent: 'space-between', width:"100%" }}>
                <div style={{ width: "100%" }}>
                    <h3 className="protest-riot-regular" style={{ marginTop: "75px", fontSize: "35px" }}> <span style={{ color: "crimson" }}>My</span> name is</h3>
                    <h1 className="pacifico-regular" style={{ fontSize: "80px" }}>Sriram Santhosh<span style={{ color: "crimson" }}>.</span></h1>
                    <h3 className="protest-riot-regular" style={{ fontSize: "35px" }}>I'm a <span style={{ color: "crimson" }}>Web</span> Developer.</h3>
                    <p className="ubuntu-regular" style={{ marginTop: "10px", fontSize: "18px", margin: "20px 0" }}> My expertise lies in both front-end and back-end development, allowing me to deliver comprehensive solutions that meet diverse project needs.</p>
                    <SocialAccounts />
                </div>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <img className="profile" style={profilePic} src={require("../images/inshot edit.png")} alt="profile-pic" />
                </div>
            </div>
    )

    
}




const profilePic = {
    width: "500px",
}

export default Home;