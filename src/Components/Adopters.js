import React, { useState } from 'react'

function Adopters() {

    const [adoptersName, setAdoptersName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [adopterArray, setAdopterArray] = useState([])

    function handleAddAdopter(newAdopter) {
        setAdopterArray([...adopterArray, newAdopter])
    }

    function handleInquiryFormSubmit(e) {
        e.preventDefault();
        alert('Are you sure you would like to submit your Inquiry?');
        
        fetch('http://localhost:9292/adopters', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                adopter_name: adoptersName, 
                email: email,
                adopter_phone: phone
            }),
        })
            .then((response) => response.json())
            .then((newAdopter) => {
                handleAddAdopter(newAdopter)
                setAdoptersName("")
                setEmail("")
                setPhone("")
            });

    }

    return (
        <div className='interested-adopt'> 
            {/* <h2>
                Interested in Adopting? Fill out the below Inquiry Form! 
            </h2> */}
            {/* <h4>
            ​The first step in the adoption process is to fill out the below inquiry form. Inquiry forms are processed on a first come/ best-fit basis and generally take 48-72 business hours to review. We will contact you for a phone interview!
            </h4> */}
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
                <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                <input type="tel" placeholder="Phone Number" {...register("Phone Number", {required: true, maxLength: 12})} />
                <input type="text" placeholder="Interested Pet" {...register("Interested Pet", {})} />

                <input type="submit" />
            </form> */}
                <form className="new-adopters-form" onSubmit={(e)=>{handleInquiryFormSubmit(e)}}>
                <h1>Inquiry Form</h1>
                <h4>Please fill all entries.</h4>
                <div className='adopter-form-boxes'>
                    <div className='adopter-name'>
                        <label>Name :</label>
                            <input type="text" placeholder="Name" value={adoptersName} onChange={(e) => setAdoptersName(e.target.value)}/>
                    </div>
                    <div className='adopter-email'>
                        <label>Email :</label>
                            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='Phone Number'>
                        <label>Phone Number :</label>
                            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                
                <button className= 'adopter-bttn' type='submit'> Submit</button>
            </form>
        </div>
    );
}

export default Adopters