
import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { resetError } from '../../store/error-handler/error-handler.actions';




const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});


const Toast = () => {

    const isShowAlert = useSelector((state) => state.errorHandlerReducer.errorObject.isShowAlert);
    const error = useSelector((state) => state.errorHandlerReducer.errorObject.error); 

    const dispatch = useDispatch(); 

   
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        dispatch(resetError()); 
    };
    

    return (
        error && <Snackbar open={isShowAlert} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
                {error && `${error.name}: ${error.message}`} 
            </Alert>
        </Snackbar>
    );
}

export default Toast;