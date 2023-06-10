// import axios from "axios";


// const BaseURL = await fetch (
//  "http://localhost:5000/api/v1"
// )
const BaseURL = await fetch (
 "http://localhost:5000/api/v1"
)

// Registration Request function
export function RegistrationRequest(Email, FirstName, LastName, Mobile, Password, Photo){
    
    let URL = BaseURL+"/Registration"
    let PostBody = {
        Email:Email,
        FirstName:FirstName,
        LasttName:LastName,
        Mobile:Mobile,
        Password: Password,
        Photo:Photo
    }
    return axios.post(URL, PostBody).then( (res) => {

        // loder start display none 
        // store.dispatch(HideLoader())

        // LoderDisplay.classList.add("Display_None")


        if(res.status === 200){
            
            if(res.data["status"]=== "Fail"){
                // email exist kore ki na seta chack kora hoyeche
                if(res.data.data.keyPattern.Email ===1){
                    cogoToast.error('Email Already Exist');
                    return false
                }else{
                    cogoToast.error('Something Went Wrong');
                    console.log(res);
                    return false;
                }
                // end email exist kore ki na seta chack kora hoyeche 
            }else{
                // LoderDisplay.classList.remove("Display_None")

                cogoToast.success('Registration Success');
                return true;

            }


        }else{
            alert("Error in status not match in == 200")
            return false
        }


    }).catch( (Err) => {

        // loder stop display none
        // store.dispatch(ShowLoader())

        if(Err.status === 200){
            alert("Email All Redy exist")
            return false
        }else{
            alert("error Catch block")
            return false
        }


        // console.error(err);
        // alert("Error Catch Block");
        // return false;
    });

}

// export function RegistrationRequest(){
//     try{

//     }catch(err){

//     }
// }