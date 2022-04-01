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
        alert('We have received your inquiry!');
        
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
                <form className="new-adopters-form" onSubmit={(e)=>{handleInquiryFormSubmit(e)}}>
                <h1>Inquiry Form</h1>
                <h4>Please fill all entries.</h4>
                <div className='adopter-form-boxes'>
                    <div className='adopter-name'>
                        <label>Name :</label>
                            <input className='name-holder' type="text" placeholder="Name" value={adoptersName} onChange={(e) => setAdoptersName(e.target.value)}/>
                    </div>
                    <div className='adopter-email'>
                        <label>Email :</label>
                            <input className='email-holder' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='Phone Number'>
                        <label>Phone Number :</label>
                            <input className='phone-holder' type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                
                <button className= 'adopter-bttn' type='submit'> Submit</button>
            </form>
        </div>
    );
}

export default Adopters