const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();
    
    return(
        <p className="ubuntu-regular canvas-2 footer-container" style={{margin: "auto", backgroundColor:"#18181B", color:"#E4E4E7", padding:"30px 30px", border:"2px solid #2A2A2B", borderTop:"none"}}>
            @{year} Sriram Santhosh. All&nbsp;rights&nbsp;reserved.
        </p>
    )
}

export default Footer