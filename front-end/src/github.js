import Axios from "axios";

let gitData = null;

if (!gitData) {
    try {
        await Axios.post("https://cheerful-red-cormorant.cyclic.app/").then(async (res) => {
            gitData = await res.data.UserData;
        }).catch((err) => {
            console.error('Connection Error!')
        });
    }
    catch (err) {
        console.log("Connection Error!");
    }
}

export {gitData}