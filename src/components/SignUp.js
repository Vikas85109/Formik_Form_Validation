import { useFormik } from 'formik'
import React from 'react'
import { NumericFormat } from 'react-number-format'
import * as Yup from 'yup'

const SignUp = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
            phone: "",
            password: "",
            cpassword: "",
            status: "",
            country: "",
            number: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, "Too Short!").max(15, "Too Long!").required("Name is Required*"),

            email: Yup.string().email().required("Email is required*"),

            address: Yup.string().required("Address is required*"),

            phone: Yup.number().min(10, "minimun 10 digit").required("Phone is required*"),

            password: Yup.string().required('Password is required').min(5, 'Your password is too short.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

            cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),

            country: Yup.string().required("required"),

            number: Yup.string().required("required")
        }),

        onSubmit: (value) => {
            console.log(value)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Name :</label>
                <input type="text" name="name" id=""
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
            </div>
            <div>
                <label htmlFor="">Email :</label>
                <input type="text" name="email" id=""
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}

                />
                {formik.touched.email && formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}

            </div>
            <div>
                <label htmlFor="">Address :</label>
                <input type="text" name="address" id=""
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    onBlur={formik.handleBlur}

                />
                {formik.touched.address && formik.errors.address && <p style={{ color: "red" }}>{formik.errors.address}</p>}

            </div>
            <div>
                <label htmlFor="">Phone :</label>
                <input type="text" name="phone" id=""
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}

                />
                {formik.touched.phone && formik.errors.phone && <p style={{ color: "red" }}>{formik.errors.phone}</p>}

            </div>
            <div>
                <label htmlFor="">Password :</label>
                <input type="text" name="password" id=""
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}

                />
                {formik.touched.password && formik.errors.password && <p style={{ color: "red" }}>{formik.errors.password}</p>}

            </div>
            <div>
                <label htmlFor="">Comfirm Password :</label>
                <input type="text" name="cpassword" id=""
                    onChange={formik.handleChange}
                    value={formik.values.cpassword}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.cpassword && formik.errors.cpassword && <p style={{ color: "red" }}>{formik.errors.cpassword}</p>}

            </div>

            <div>
                <label htmlFor="">Your status : </label>
                <input type="radio" name='status' value="single" onChange={formik.handleChange} />
                <label htmlFor="">single</label>

                <input type="radio" name="status" value="commited" onChange={formik.handleChange} />
                <label htmlFor="">commited</label>

                <input type="radio" name="status" value="coder" onChange={formik.handleChange} />
                <label htmlFor="">coder</label>

            </div>

            <div>
                <select name="country" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                    <option value="">Select Your Country</option>
                    <option value="india">India</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="sriklanka">Sri Lanka</option>
                </select>
                {formik.touched.country && formik.errors.country && <p style={{ color: "red" }}>{formik.errors.country}</p>}
            </div>


            <div>
                <label htmlFor="">Mobile number :   </label>
                <NumericFormat
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    valueIsNumericString={true}
                    decimalSeparator=","
                    displayType="input"
                    name='number'
                    onBlur={formik.handleBlur}
                />
            {formik.touched.number && formik.errors.number && <p style={{ color: "red" }}>{formik.errors.number}</p>}
           </div>


            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default SignUp