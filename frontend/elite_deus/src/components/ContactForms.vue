<template>
    <section>
      
            <form>

                <div class="form-group">
                    <label for="username">Name:</label>
                    <input type="text" id="username" v-model="userdata.username">
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="userdata.email">
                </div>

                <div class="form-group">
                    <label for="massage">Massage:</label>
                    <input type="text" id="massage" v-model="userdata.massage">
                </div>
                <button type="submit" @click='create'>Submit</button>

            </form>
        
    
    </section> 

    </template>
    
    
    <script>
    import axios from 'axios'

    export default {
        data() {
    return {  
        userdata:{
        username:'',
        email:'',
        massage:''
        },

      new_car:{
          brand:'',
          model:'',
          engine:'',
          gearbox:''
        }
        
    } 
        },
    name: 'ContactForms',
    mounted() {

        axios
            .get('http://localhost:4002/')
            .then(response => (this.articles = response.data))
            .catch(error => console.log(error))
    },
 
    methods: {
       
        create() {
            
            console.log("My data "+this.userdata.username);
           //console.log(this.data121);
//var parsedobj = jQuery.parseJSON( this.data121);
  //          console.log(parsedobj);
  
  //console.log(data121);
                axios
                    .post('http://localhost:4002/',
                        
        this.userdata
       // email: this.email,
       // massage: this.massage
     
        
    
                        
                    )
                    .then(response => {
                        console.log("res    "+response);
                        return response;
                    })
                    .catch(error => console.log(error))
        }
    },

    }
    </script>
    
    <style>
    
    </style>