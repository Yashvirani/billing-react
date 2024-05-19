import './App.css';
import axios from 'axios';
import react , {useState} from 'react';

function App() {
  let [detail,setDetail] = useState([]);
  let requestHandle = async () => {
    //let data;
    // axios.get("http://localhost:8081/api/user",{
    //   auth: {
    //     username: "yash@yash.com",
    //     password: "12345"
    //   }
    // }).then((res) => {
    //   // let token = res.headers.get("Authorization");
    //   // localStorage.setItem("jwt",JSON.stringify(token));
    //   console.log(res.response.headers.authorization);
    // }).catch(e => {
    //   console.log(e);
    // })
    // try{
    //   data = await axios.get("http://localhost:8081/api/details",{
    //     headers : {
    //       Authorization : "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJCaWxsaW5nIiwic3ViIjoiSldUIFRva2VuIiwidXNlcm5hbWUiOiJ5YXNoQHlhc2guY29tIiwiYXV0aG9yaXRpZXMiOiJST0xFX1VTRVIsUk9MRV9BRE1JTiIsImlhdCI6MTcxNTc2MzU3MCwiZXhwIjoxNzE1NzkzNTcwfQ.SnjmTrbr_NYDCrMz1ncCtdCf0k4Z-nopGIKcfSj07ko"
    //     }
    //   })
    // }

    //   catch(e){
    //     console.log(e);
    //   }

    //   console.log(data);
    //   axios.get("http://localhost:8081/api/user",{
    //     auth: {
    //       username: "yash@yash.com",
    //       password: "12345"
    //     }
    //   }).then((res) => {
    //     let token = res.headers.get("Authorization");
    //     localStorage.setItem("jwt",JSON.stringify(token));
    //     console.log(res.headers);
    //   }).catch(e => {
    //     console.log(e);
    //   })
    // }
   
    let data;
    try{
      data = await axios.post("http://localhost:8081/api/register",
      {
        customer_id : "2a99182c-1670-4ef3-9663-b22015e013f8",
        name_ : "Hari",
        email : "hari@scm.com",
        mobile_number : "9727726112",
        pwd : "12345",
        role_ : "ADMIN",
        create_dt : "2024-05-15"
      },{
        auth: {
                 username: "yash@yash.com",
                 password: "12345"
               }
      });
    }
    catch(e){
      console.log(e);
    }
    console.log(data.headers.authorization);
    localStorage.setItem("jwt",JSON.stringify(data.headers.authorization));
  }

  let getDetails = () => {
    axios.get("http://localhost:8081/api/details",{
      headers : {
         Authorization : JSON.parse(localStorage.getItem("jwt"))
      }
    }).then((res) => {
       setDetail(res);
       console.log(res);
    }).catch(e => {
      console.log(e);
    })
  }
  return (
    <div className="App">
      <p>Hello</p>
      <button onClick={requestHandle}>Request</button>


      <button onClick={getDetails}>Get User Details</button>
      {
        detail?.data?.name
      }
    </div>
  );
}

export default App;
