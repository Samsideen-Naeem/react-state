import React from 'react'

function ProfileForm() {
    const [profile, setProfile] =useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    })
    
    const handler =(event) => {
        setProfile((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
    const handleForm = (e) => {
        e.preventDefault();
        Submit(profile)
    }


  return (
    <div className='fromContainer'>
         <h3>Profile From</h3>
         <form>
            <fieldset>Bio data</fieldset>
             <div className='names'>
                <label>First Name
                    <input name='firstname' value=
                        {profile.firstname} type="text" onChange={handler}/>
                </label>
                <label>Last Name
                    <input name='lastname' value=
                        {profile.lastname} type="text" onChange={handler}/>
                </label>

             </div>
             <div className='names'>
                <label>Email
                    <input name='email' value=
                        {profile.email} type="email" onChange={handler}/>
                </label>
                <label>phone
                    <input name='phone' value=
                        {profile.phone} type="tel" onChange={handler}/>
                </label>

             </div>
         </form>
    </div>
  )
}

export default ProfileForm