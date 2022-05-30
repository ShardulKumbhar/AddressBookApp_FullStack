import axios from "axios";

 class AddressService {
     baseURL = 'http://localhost:8080/addressBook'
 

   addPerson = (data) => {
     console.log(data);
     return axios.post(this.baseURL + "/create" , data)
 }

 getPerson = (data)=> {
   return axios.get(this.baseURL + "/get" )
 }

 getDataById=(id)=>{
   return axios.get(this.baseURL+"/get/"+`${id}`)
 }

 deletePerson = (id) => {
   return axios.delete(this.baseURL + `/delete/${id}`)
 }

 updatePerson = (id , data)=>{
   return axios.put(this.baseURL+`/update/${id}` , data)
 }

}

 export default new AddressService();