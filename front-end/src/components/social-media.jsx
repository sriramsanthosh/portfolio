import { NavLink, useNavigate } from "react-router-dom";


const SocialAccounts = () => {
    const Navigate = useNavigate();
    return (
        <div>
            <NavLink style={{textDecoration:"none", color:"#AAAAB2"}} to="https://twitter.com/sriramsanthosh_" target="_blank"><i style={{paddingLeft:"0"}} className="social-media-icon fa-brands fa-x-twitter"></i></NavLink>
            <NavLink style={{textDecoration:"none", color:"#AAAAB2"}} to="https://www.instagram.com/sriram.santhosh22/" target="_blank"><i className="social-media-icon fa-brands fa-instagram"></i></NavLink>
            <NavLink style={{textDecoration:"none", color:"#AAAAB2"}} to="https://github.com/sriramsanthosh/" target="_blank"><i className="social-media-icon fa-brands fa-github"></i></NavLink>
            <NavLink style={{textDecoration:"none", color:"#AAAAB2"}} to="https://www.linkedin.com/in/sriramsanthosh/" target="_blank"><i className="social-media-icon fa-brands fa-linkedin"></i></NavLink>
        </div>
    )
}

export default SocialAccounts;