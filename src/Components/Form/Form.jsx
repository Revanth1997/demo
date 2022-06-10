import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './index.css'

const Form = () => {
    const initialValues = {
        line1:'',
        line2:'',
        city:'',
        state:'',
        zipcode:'',
        country:'',
        dateofbirth:'',
        last4:'',
        license:'',
        id:'',
        radio:''
    }
    const [formValues,setFormValues] = useState(initialValues)
    const [details,setDetails] = useState([])
    const handleChange = (e) =>{
        const {name,value} = e.target 
        setFormValues({...formValues,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newDetails = {
            id:uuidv4(),
            formValues
        }
        setDetails([...details,newDetails])
        console.log(details)
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
            <h1>Verify Your Identity</h1>
            <div>
                <p>Please enter a valid mailing address of your primary residence along with few of your personal details for <br/> identify verification.Plase do not use a PO Box.</p>
            </div>
            <div className='address-container'>
                <div>
                    <label>Mailing Address Line 1</label>
                    <input type = "text" className='address-input' name="line1" value={formValues.line1} onChange={handleChange}/>
                </div>
                <div>
                    <label>Mailing Address Line 2</label>
                    <input type = "text" className='address-input' name="line2" value={formValues.line2} onChange={handleChange}/>
                </div>
            </div>
            <div className='address-container'>
                <div>
                    <label>City</label>
                    <input type="text" className='details-input' name="city" value={formValues.city} onChange={handleChange}/>
                </div>
                <div>
                    <label>State</label>
                    <input type="text" className='details-input' name="state" value={formValues.state} onChange={handleChange}/>
                </div>
                <div>
                    <label>Zip Code</label>
                    <input type="text" className='details-input' name="zipcode" value={formValues.zipcode} onChange={handleChange}/>
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" className='details-input' name="country" value={formValues.country} onChange={handleChange}/>
                </div>
            </div>
            <div className='address-container'>
                <div>
                    <label>Date of Birth</label>
                    <input type="text" className='details-input' name="dateofbirth" value={formValues.dateofbirth} onChange={handleChange}/>
                </div>
                <div>
                    <label>Social Security Last 4</label>
                    <input type="text" className='details-input' name="last4" value={formValues.last4} onChange={handleChange}/>
                </div>
                <div>
                <p>Select an Identification to Upload</p>
                    <div className='radio-container'>
                        <input type="radio" name="license" value="License" onChange={handleChange}/>
                        <label>Driver's License</label>
                    </div>
                    <div className='radio-container'>
                        <input type="radio" name="id" value="State-Issued ID" onChange={handleChange}/>
                        <label>State-Issued ID</label>
                    </div>
                    <div className='radio-container'>
                        <input type="radio" name="radio" value="Passport" onChange={handleChange}/>
                        <label>Passport</label>
                    </div>
                </div>
            </div>
            <button type='submit'>Add</button>
        </form>
        </>
        
        
    );
};

export default Form;