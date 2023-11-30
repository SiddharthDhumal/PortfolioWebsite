import Buttons from '../UI/Buttons';
// import { useEffect, useReducer, useState } from 'react';
import { useEffect, useState } from 'react';
// import validator from "validator";
import { useForm} from "react-hook-form"
import { ContectMe } from '../../contactApi';

// const initialState = {
//     firstname:'',
//     lastname:'',
//     email:'',
//     subject:'',
//     message:''
// }

// function reducer(state,action){

//     switch(action.type){
//         case "setfirstname":
//             return {...state,firstname:action.payload};
//         case "setlastname":
//             return {...state,lastname:action.payload};
//         case "setEmail":
//             return {...state,email:action.payload};
//         case "setSubject":
//             return {...state,subject:action.payload};
//         case "setMessage":
//             return {...state,message:action.payload};
//         case "reset":
//             return initialState;
//         default:
//             throw new Error("Unknown action")
//     }
// }

function Contact(){

    const [success,setSuccess] = useState(false);

 const {register,formState: {errors,},handleSubmit,getValues,reset } = useForm(); 

//   const [state,dispatch] = useReducer(reducer,initialState);
  
//   const { firstname,lastname,email,subject, message} = state;
// const { firstname,lastname,subject, message} = state;
  
//    useEffect(function(){
//        if(isSubmitSuccessful){
    
//         reset();
//        }
//        setSuccess(false);
    
//    },[isSubmitSuccessful,reset])


useEffect(function(){
   setSuccess(false);
},[])
   
//   function onFirstname(e){
//      dispatch({type:"setfirstname",payload:e.target.value})
//   }

//   function onLastname(e){
//       dispatch({type:"setlastname",payload:e.target.value})
//   }

//   function onEmail(e){ 
//     dispatch({type:"setEmail",payload:e.target.value});   
//   }

//   function onSubject(e){
//      dispatch({type:"setSubject",payload:e.target.value})
//   }

//   function onMessage(e){
//     dispatch({type:"setMessage",payload:e.target.value})
//   }

  async function onSubmit(data,e){
    e.preventDefault();
   
    console.log(data);
    try{
        await ContectMe(data);
        reset();
    }catch(error){
        window.alert(error.message);
        setSuccess(true);
    }
  
    // dispatch({type:"reset"});
  }

  function onError(errors,e){
    e.preventDefault();
    console.log(errors);
  }


   return(
    <main className="font-mono h-auto flex mx-auto justify-around items-start  lg:my-32 lg:gap-x-52 lg:px-52 sm:my-16 sm:gap-x-18 sm:px-4  lg:w-11/12 sm:w-full lg:flex-row sm:flex-col">
        <div className="lg:w-auto sm:w-full">
            <div className="lg:mb-8 sm:mb-4 mx-auto">
           <h1 className="lg:text-4xl sm:text-2xl font-bold tracking-wider mb-2">Contact</h1>
           <p className="text-base font-thin">Looking forward to hearing from you</p>
           </div>
           <div className="lg:my-4 sm:my-2">
            <h3 className="font-bold text-lg">Phone</h3>
            <p>+91-8329237036</p>
           </div>
           <div className="lg:my-8 sm:mb-16 sm:mt-4">
            <h3 className="font-bold  text-lg">Email</h3>
            <p>Siddharthdhumal210@gmail.com</p>
           </div>
        </div>
        

<form method="POST" onSubmit={handleSubmit(onSubmit,onError)} autoComplete="off" className="lg:w-4/6 sm:w-full">
<div className="flex justify-center items-center gap-x-4 mb-4 lg:flex-row sm:flex-col">
<div className="flex flex-col justify-center items-start gap-y-2 lg:w-auto sm:w-full">
<label className="mb-1 block">First Name *</label>
<input type="text" id="firstname" name="firstname"  {...register("firstname",
{required:"Please Enter your First Name",
minLength:{
    value:3,
    message:"Please Enter atleast 3 letters"
},
maxLength:{
    value:10,
    message:"Please Enter 10 letters maximum"
}
})} 
className="border bg-slate-500 border-solid border-slate-100 lg:w-56 sm:w-full h-11 text-sm px-2"/>
<p className="text-xs w-56 m-1.5 text-red-600">{errors?.firstname?.message}</p>
</div>


<div className="flex flex-col justify-center items-start gap-y-2 lg:w-auto sm:w-full">
<label className="mb-1 block">Last Name *</label>
<input type="text" id="lastname" name="lastname" 
 {...register("lastname",
 {
 required:"Please Enter your First Name",
 minLength:{
     value:3,
     message:"Please Enter atleast 3 letters"
 },
 maxLength:{
     value:10,
     message:"Please Enter 10 letters maximum"
 }
 })} 
 className="border bg-slate-500 border-solid border-slate-100 lg:w-56 sm:w-full h-11 text-sm px-2"/>
 <p className="text-sm w-56 m-1.5 text-red-600">{errors?.lastname?.message}</p>
</div>
</div>


<div className="flex justify-center items-center gap-x-4  mb-4 lg:flex-row sm:flex-col">
<div className="flex flex-col justify-center items-start gap-y-2 lg:w-auto sm:w-full">
<label className="mb-1 block">Email *</label>
<input type="email" id="email" name="email" {...register("email",
 {required: "Please Enter Your Email!", 
 pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please Enter A Valid Email!"}})} 
 className="border bg-slate-500 border-solid border-slate-100 lg:w-56 sm:w-full h-11 text-sm px-2"/>
 <p className="text-xs w-56 m-1.5 text-red-600">{errors?.email?.message}</p>
</div>

<div className="flex flex-col justify-center items-start gap-y-2 lg:w-auto sm:w-full">
<label className="mb-1 block">Confirm Email *</label>
<input type="email" id="confirmemail" name="confirmemail"
 {...register("confirmemail", {required: "Please Confirm Your Email!",
 validate: (value)=>value===getValues().email || "Email should be matching",
  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please Confirm A Valid Email!"}})}
 required  className="border bg-slate-500 border-solid border-slate-100 lg:w-56 sm:w-full h-11 text-sm px-2"/>

 <p className="text-xs w-56 m-1.5 text-red-600">{errors?.confirmemail?.message}</p>
</div>

</div>

<div className="flex justify-center items-center gap-x-4  mb-4 lg:flex-row sm:flex-col">
<div className="flex flex-col justify-center items-start gap-y-2 lg:w-auto sm:w-full">
<label className="mb-1 block">Mobile Number *</label>
<input type="tel" id="mobilenumber" name="mobilenumber" minLength="10" maxLength="10"
 {...register("mobilenumber",
 {required:"Please Enter Valid Your Mobile!", 
 pattern:{value:"[0-9]{3}-[0-9]{2}-[0-9]{3}", message:"Please Enter a Valid Mobile Number"},
//  min:{value:11,message:"Please Enter 10 digit Number"},
//  max:{value:11,message:"Please Enter 10 digit Number"}
})}
 className="border bg-slate-500 border-solid border-slate-100 lg:w-56 sm:w-full h-11 text-sm px-2"/>
 <p className="text-xs w-56 m-1.5 text-red-600">{errors?.mobilenumber?.message}</p>
</div>

<div className="flex flex-col justify-center items-start gap-y-2 lg:w-auto sm:w-full">
<label className="mb-1 block">Subject *</label>
{/* {...register("subject",{required: "Please Enter Subject!",minLength: 5,maxLength:20, message: "Please Elobrate A Subject!"})}  */}
<input type="text" id="subject" name="subject" 
 {...register("subject", {
    required:"Please Enter your Subject",
    minLength:{
        value:5,
        message:"Please Enter atleast 5 letters"
    },
    maxLength:{
        value:20,
        message:"Maximum 20 letters are allowed "
    }
    })} 
 className="border bg-slate-500 border-solid border-slate-100 lg:w-56 sm:w-full h-11 text-sm px-2"/>
<p className="text-xs w-56 text-red-600">{errors?.subject?.message}</p>
</div>
</div>

<div className="flex justify-center  gap-x-4  mb-4 lg:flex-row sm:flex-col lg:items-center lg:mx-2 sm:mx-0 sm:items-start lg:w-auto sm:w-full">
<div className="flex flex-col justify-center items-start gap-y-2  lg:w-auto sm:w-full">
<label  className="mb-1 block">Message *</label>
<textarea name="message" id="message" rows="5" cols="40"{...register("message",{
    required:"Please Enter your Message",
    minLength:{
        value:5,
        message:"Please Enter atleast 5 letters"
    },
    maxLength:{
        value:300,
        message:"Please Enter 300 letters maximum"
    }
    })} 
className="border bg-slate-500 border-solid border-slate-100  text-sm p-2 text-left lg:w-auto sm:w-full"/>
<p className="text-xs m-1.5 text-red-600">{errors?.message?.message}</p>
</div>

<Buttons className="w-[6.5rem] h-[6.5rem] text-base">Submit</Buttons>
</div>
<div>{success ? "Thanks For Contacting" : ""}</div>
</form>
       
</main>
   )
}

export default Contact;




// <form method="POST" onSubmit={handleSubmit(onSubmit)} className="w-4/6">
// <div className="flex justify-center items-center gap-x-4 mb-4">
// <div>
// <label className="mb-1 block">First Name *</label>
// {/* {...register("firstname",{required: true,minLength: 3, message: "Please Enter A First Name!"})} */}
// <input type="text" id="firstname" name="firstname" minLength="3" value={firstname}  onChange={(e)=>onFirstname(e)} required className="border bg-slate-500 border-solid border-slate-100 w-56 h-11 text-sm px-2"/>
// <p className="error-message">{console.log(errors)}</p>
// <p className="error-message">{errors.firstname?.message}</p>
// </div>


// <div>
// <label className="mb-1 block">Last Name *</label>
// {/* {...register("lastname", {required: true, minLength:2, message: "Please Enter A Valid lastname!"})} */}
// <input type="text" id="lastname" name="lastname" minLength="2" value={lastname} onChange={(e)=>onLastname(e)} required  className="border bg-slate-500 border-solid border-slate-100 w-56 h-11 text-sm px-2"/>
//  <p className="error-message">{errors.lastname?.message}</p>
// </div>
// </div>

// <div className="flex justify-center items-center gap-x-4  mb-4">
// <div>
// <label className="mb-1 block">Email *</label>
// <input type="email" id="email" name="email" {...register("email", {required: "Please Enter Your Email!", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please Enter A Valid Email!"}})} value={email} onChange={(e)=>onEmail(e)} required  className="border bg-slate-500 border-solid border-slate-100 w-56 h-11 text-sm px-2"/>
//  <p className="error-message">{errors.email?.message}</p>
//  {console.log(errors)}
// </div>

// <div>
// <label className="mb-1 block">Subject *</label>
// {/* {...register("subject",{required: "Please Enter Subject!",minLength: 5,maxLength:20, message: "Please Elobrate A Subject!"})}  */}
// <input type="text" id="subject" name="subject"  minLength="5" maxLength="20"value={subject} onChange={(e)=>onSubject(e)} required className="border bg-slate-500 border-solid border-slate-100 w-56 h-11 text-sm px-2"/>
// <p className="error-message">{errors.subject?.message}</p>
// </div>
// </div>

// <div className="flex justify-center mx-2 items-center gap-x-4  mb-4">
// <div>
// <label  className="mb-1 block">Message *</label>
// {/* <input type="textarea" rows="5" cols="50" value="message" className="border bg-slate-500 border-solid border-slate-100 w-[17rem] h-32 text-sm px-2 text-left"/> */}
// {/* {...register("message",{required: "Please Enter Your Message!",minLength: 5,maxLength:300, message: "Please Elobrate your Message!"})} */}
// <textarea name="message" id="message" rows="5" cols="40" minLength="5" maxLength="300" value={message} onChange={(e)=>onMessage(e)} required className="border bg-slate-500 border-solid border-slate-100  text-sm p-2  text-left"/>
// <p className="error-message">{errors.message?.message}</p>
// </div>

// <Buttons className="w-24 h-24 text-base">Submit</Buttons>
// </div>
// <div>{success ? "Thanks For Contacting" : ""}</div>
// </form>