
import { NavLink } from "react-router-dom";
import CenteredTabs from "./MUI/tab";
import CustomizedTabs from "./MUI/tab";
import SocialAccounts from "./social-media";


const NavBar = () => {

  return (
    <div>
      <div style={{zIndex:"50", position:"fixed", width:"83%", margin:"auto", background:"#18181B", padding:"33px", left:'0', right:"0"}}>

      </div>
      <CustomizedTabs />

    </div>
  );
}



export default NavBar;
