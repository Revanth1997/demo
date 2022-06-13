import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Todo from '../Todo/Todo';
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
        issuedId:'',
        passport:''
    }
    const [formValues,setFormValues] = useState([initialValues])
    const [details,setDetails] = useState([])
    const [formErrors,setFormErros] = useState('')
    const handleChange = (e) =>{
        const {name,value} = e.target 
        setFormValues({...formValues,[name]:value})
    }
    const handleChecked = (e) =>{
        const {value,checked,name} = e.target
        if(checked){
            setFormValues({...formValues,[name]:value})
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newDetail = {
            id:uuidv4(),
            line1:formValues.line1,
            line2:formValues.line2,
            city:formValues.city,
            state:formValues.state,
            zipcode:formValues.zipcode,
            country:formValues.country,
            dateofbirth:formValues.dateofbirth,
            last4:formValues.last4,
            license:formValues.license,
            issuedId:formValues.issuedId,
            passport:formValues.passport
            
        }
        const newDetails = [...details,newDetail]
        setDetails(newDetails)
        setFormValues({
        line1:'',
        line2:'',
        city:'',
        state:'',
        zipcode:'',
        country:'',
        dateofbirth:'',
        last4:'',
        license:'',
        issuedId:'',
        passport:''})
        setFormErros(validation(formValues))
    }
    const numberValidation = /^\d+$/
    const validation = () =>{
        let error = {}
        if(!formValues.zipcode){
            error.zipcode = "Enter Zipcode"
        }else if(!numberValidation.test(formValues.zipcode)){
            error.zipcode = "Enter Valid Zipcode"
        }else if(formValues.zipcode.length < 5){
            error.zipcode = "Zipcode must be 5 digits"
        }

        return error

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
                    <input type="text" className='details-input' pattern = "[0-9]*"name="zipcode" value={formValues.zipcode} onChange={handleChange}/>
                    <p className='error'>{formErrors.zipcode}</p>
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
                        <input  type="checkbox"  name="license" value="License"  onChange={handleChecked}/>
                        <label >Driver's License</label>
                    </div>
                    <div className='radio-container'>
                        <input type="checkbox" name="issuedId" value="IssuedId" onChange={handleChecked}/>
                        <label>State-Issued ID</label>
                    </div>
                    <div className='radio-container'>
                        <input type="checkbox" name="passport" value="Passport" onChange={handleChecked}/>
                        <label>Passport</label>
                    </div>
                </div>
            </div>
            <button type='submit'>Add</button>
        </form>
        <ul>
            {details.map((each)=>(
                <Todo key={each.id} details={each}/>
            ))}
        </ul>
        </>
        
        
    );
};

export default Form;