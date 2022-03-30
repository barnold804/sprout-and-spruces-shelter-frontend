import React from 'react'
import { useForm } from 'react-hook-form';

function Adopters() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    

    return (
        <div>
            <h2>
                Interested in Adopting? Fill out the below Application Form! 
            </h2>
            <h4>
            ​The first step in the adoption process is to fill out the below inquiry form. Inquiry forms are processed on a first come/ best-fit basis and generally take 48-72 business hours to approve. We will contact you if any additional information is needed!
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
                <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                <input type="tel" placeholder="Phone Number" {...register("Phone Number", {required: true, maxLength: 12})} />
                <input type="text" placeholder="Interested Pet" {...register("Interested Pet", {})} />

                <input type="submit" />
            </form>
        </div>
    );
}

export default Adopters
