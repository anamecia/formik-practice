import React from 'react'
import { Formik } from 'formik'
import  * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Must be at least two charecter')
        .max(30, 'Must be shorter than 30 charecters')
        .required('Must enter a name'),
    email: Yup.string()
        .email('Must be a valid email address')
        .max(30, 'Must be shorter than 30 charecters')
        .required('Must enter a email'),
})

const Form = () => {
    return(
        <Formik 
            initialValues={{name: '', email: ''}}
            validationSchema={validationSchema}>
            {({ values, errors, touched, handleChange, handleBlur }) => (
                <form>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            placeholder='Enter your name'
                            onChange={handleChange}   
                            onBlur={handleBlur} 
                            value={values.name}
                            className = {touched.name && errors.name ? 'has-error' : null}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            placeholder='Enter your email'
                            onChange={handleChange}   
                            onBlur={handleBlur} 
                            value={values.email}
                        />
                    </div>
                    <div>
                        <button type='Submit'>Submit</button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default Form