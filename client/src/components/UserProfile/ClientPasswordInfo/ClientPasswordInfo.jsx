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

const ClientPasswordInfo = () => {
    const formik = useFormik({
        initialValues: {
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          const passwords = {
            'password': values.oldPassword,
            'newPassword': values.newPassword
          }
        },
    });

  return (
      <div style={{padding: '15px'}} className='client-password-info'>
           <form 
            style={
              {padding: '15px', 
              display: 'flex', 
              flexDirection: 'column',
              gap: '15px',
              width: '400px',
              }} 
            onSubmit={formik.handleSubmit}
          >
                <TextField
                    variant='standard'
                    id="password"
                    name="password"
                    label="Old password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    variant='standard'
                    id="password"
                    name="password"
                    label="New password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    variant='standard'
                    id="password"
                    name="password"
                    label="Confirm new password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button 
                  sx={{
                    bgcolor: '#121212',
                    color: 'rgb(9, 128, 87)',
                    fontWeight: 700,
                    width: '150px',
                    margin: '0 auto',
                    '&:hover': {
                        bgcolor: '#1f1f1f'
                    }
                  }}
                  variant="contained"
                  type="submit"
                >
                  Save
                </Button>
            </form>
      </div>
  );
};

export default ClientPasswordInfo;
