const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();

    console.log(year);
    return(
        <p className="ubuntu-regular canvas-2" style={{margin: "auto", textAlign:"right", backgroundColor:"#18181B", color:"#E4E4E7", padding:"30px 30px", border:"2px solid #2A2A2B", borderTop:"none"}}>
            @{year} Sriram Santhosh. All rights reserved.
        </p>
    )
}

export default Footer