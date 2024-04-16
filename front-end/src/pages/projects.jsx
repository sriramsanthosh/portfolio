import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Axios from "axios";

const Projects = () => {
  const [UserData, setUserDatas] = useState();
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    // console.log(UserData);

    if(!UserData){
      try{
        Axios.post("https://portfolio-backend-sriramsanthoshs-projects.vercel.app/").then(async(res)=>{
          // console.log(res.data);
          await setUserDatas(await res.data.UserData);
        }).catch((err)=>{
          console.error('Connection Error!')
        });
      }
      catch(err){
        console.error("Connection Error!");
      }
    }
    else{
      setUserData(true);
    }

  }, [UserData]);

  return (
    <div>
      <h1 className="protest-riot-regular" style={{ fontSize: "40px", textAlign: "center", margin:"30px 0" }}><span style={{ color: "crimson" }}>Th</span>ings I’ve made trying to put my dent in the <span style={{ color: "crimson" }}>universe.</span></h1>
      
      {userData && <div className="github-card" style={{ border: "2px solid #2A2A2B", borderRadius: "5px", padding: "10px 10px", maxWidth:"500px", margin:"20px auto", marginTop:"40px" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%", alignContent: "space-between" }}>
          <div style={{ width: "100%", textAlign: 'left', paddingLeft:"20px" }}>
            <p style={{marginTop:"30px", fontWeight:"bold" }}>{UserData.login}</p>
            <p><i className="fa-solid fa-book-bookmark"></i> Repositories <span style={{background:"#2D3139",color:"#E6EDF3", fontWeight:"bold", borderRadius:"15px"}}>&nbsp;{UserData.public_repos}&nbsp;</span></p>
            <p><i className="fa-solid fa-users"></i> Followers <span style={{background:"#2D3139",color:"#E6EDF3", fontWeight:"bold", borderRadius:"15px"}}>&nbsp;{UserData.followers}&nbsp;</span></p>
            <p><i className="fa-solid fa-location-dot"></i> {UserData.location}</p>
            <p><NavLink to={UserData.html_url} target="_blank"><Button variant="outlined" color="error">Follow Me</Button></NavLink></p>
            
          </div>
          
          <div style={{position:"relative", width: "fit-content", textAlign: "right", padding: "10px" }}>
            <img className="github-avatar" src={UserData.avatar_url} alt="github-avatar" />
            <p style={{position:"absolute", right:'0', bottom:"0"}}><i className="fa-brands fa-github" style={{  color: "grey", fontSize: "25px"}}></i></p>
          </div>
        </div>
        <div style={{ display: 'flex'}}>
          <div style={{ width: "25%", background: "#3178C6", height: "10px", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px" }}></div>
          <div style={{ width: "25%", background: "#ffffff", height: "10px" }}></div>
          <div style={{ width: "30%", background: "#950F94", height: "10px" }}></div>
          <div style={{ width: "25%", background: "#F1E05A", height: "10px", borderTopRightRadius:"5px", borderBottomRightRadius:"5px" }}></div>
        </div>
      </div>
      }

<h1 className="protest-riot-regular" style={{ fontSize: "40px", textAlign: "center", margin:"30px 0" }}><span style={{ color: "crimson" }}>Pro</span>jects<span style={{ backgroundColor: "#6C6C6D", borderRadius: '2px', color: "#323232" }}>&nbsp;</span></h1>

      <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center', margin:"20px auto" }}>
        {projectsData.map((project, index) => {
          return (

            <div key={index} className="github-card" style={{ position:"relative",border: "2px solid #2A2A2B", borderRadius: "5px", padding: "10px 10px", width:"350px", margin:"20px auto", marginTop:"40px" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%", alignContent: "space-between" }}>
          <div style={{ width: "100%", textAlign: 'left', paddingLeft:"20px" }}>
            {userData && <p style={{marginTop:"30px", fontWeight:"bold" }}>{UserData.login}/{project.id}</p>}
            <p style={{textAlign:"left"}}>{project.description}</p>
            <p><NavLink to={project.githubLink} target="_blank"><Button variant="outlined" color="success">Repo</Button></NavLink> &nbsp;
            <NavLink to={project.websiteLink} target="_blank"><Button variant="outlined" color="error">Deployment</Button></NavLink></p>
            
          </div>
          
          <div style={{ position:"relative", textAlign: "right", padding: "25px" }}>
            <img src={require(`../images/project/${project.photo}.png`)} style={{ borderRadius: "20px",border:"1px solid gray",  background:"darkgray", marginTop:'20px', width: "40px", position:"absolute", right:'0', top:"0"}} alt="project-logo" /><br />
            <p style={{position:"absolute", right:'0', bottom:"0"}}><i className="fa-brands fa-github" style={{  color: "grey", fontSize: "25px"}}></i></p>
          </div>
        </div>
        <div style={{position:"relative", padding:"10px"}}>

        <div style={{ display: 'flex', position:"absolute", width:"100%", margin:"auto", right:"1px", left:"1px", bottom:"0"}}>
          <div style={{ width: "25%", background: "#3178C6", height: "10px", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px" }}></div>
          <div style={{ width: "25%", background: "#ffffff", height: "10px" }}></div>
          <div style={{ width: "30%", background: "#950F94", height: "10px" }}></div>
          <div style={{ width: "25%", background: "#F1E05A", height: "10px", borderTopRightRadius:"5px", borderBottomRightRadius:"5px" }}></div>
        </div>
        </div>
      </div>

          )
        })}
      </div >
    </div>

  );
}


let projectsData = [
  {
    id:"mind-mirror",
    name: "Mind Mirror",
    githubLink: "https://github.com/sriramsanthosh/mind-mirror",
    websiteLink: "https://mind-mirror-client.vercel.app/",
    photo: "mind-mirror",
    description:"Your new favourite 📔 Personal Diary. Find the true love of your life today."
  },
  {
    id:"project-anonymous",
    name: "Anonymous",
    githubLink: "https://github.com/sriramsanthosh/project-anonymous",
    websiteLink: "https://project-anonymous.vercel.app/",
    photo: "anonymous",
    description:"Best platform to share anyone's opinion on any topic anonymously"
  },
  {
    id:"weather-app",
    name: "WeatherApp",
    githubLink: "https://github.com/sriramsanthosh/weather-app",
    websiteLink: "https://weather-app-sriramsanthoshs-projects.vercel.app/",
    photo: "weather-app",
    description:"Get weather details at any 🌆 city"
  },
  {
    id: "sriram-foundation",
    name: "Sriram Foundation",
    githubLink: "https://github.com/sriramsanthosh/sriram-foundation",
    websiteLink: "https://sriramsanthosh.github.io/sriram-foundation/",
    photo: "sriram-foundation",
    description:"This is a front-end website integrated with payment platform that accepts the payments for making donation."
  }
]

export default Projects;