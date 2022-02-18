import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});

const ClientAdressInfo = () => {
    const formik = useFormik({
        initialValues: {
        //   password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
    });

  return (
      <div style={{padding: '15px'}} className='client-adress-info'>
          <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="adress"
                    name="adress"
                    label="Adress"
                    type="text"
                    value={formik.values.adress}
                    onChange={formik.handleChange}
                    error={formik.touched.adress && Boolean(formik.errors.adress)}
                    helperText={formik.touched.adress && formik.errors.adress}
                />
                <Button color="primary" variant="contained" type="submit">
                    Submit
                </Button>
            </form>
      </div>
  );
};

export default ClientAdressInfo;
