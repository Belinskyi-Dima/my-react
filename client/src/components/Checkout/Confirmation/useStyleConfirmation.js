
import { makeStyles } from '@mui/styles';


    

const useStylesConfirmation = makeStyles({
    '@global': {
        '.conf': {
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif', 
            fontSize: '18px',
            fontWeight: '300',
            maxWidth: '380px', 
            margin: '0 50px', 
            ['@media (max-width: 960px)']: {
                padding: '0', 
              }, 
        }, 
        // '.MuiContainer-root': {
        //     maxWidth: '100%', 
        //     padding: '0', 
        // }, 
        '.conf--details': {
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'left',
            // ['@media (max-width: 960px)']: {
            //     maxWidth: '100%',
            //     margin: '0', 
            //     padding: '0', 
            //     margin: '0 10px', 
            //   }
        },
        '.conf--text--total': {
            fontWeight: '300',
            width: '110px', 
            color: '#FF5353', 
            fontSize: '18px',
             
        },
        '.conf--total': {
            margin: '0 0 45px',
        }, 
        '.conf--goods--container': {
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            margin: '0 0 35px', 
        }, 
        '.conf--container': {
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
        }, 
        '.conf--text--header': {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif', 
            fontSize: '44px',
            fontWeight: '300',
            color: '#7D879C', 
           
        },
        '.conf--position--container': {
            margin: '0 0 -6px',
        },
        '.conf--text--label': {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif', 
            fontSize: '16px',
            fontWeight: '300',
            color: '#7D879C', 
        }, 
        '.conf--text--value': {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif', 
            fontSize: '18px',
            fontWeight: '300',
        }, 
        '.conf--btn--pay': {
            position: 'absolute', 
            width: '150px', 
            bottom: '-90px', 
            left: '0', 
        }, 
        '.conf--btn--back': {
            position: 'absolute', 
            width: '150px', 
            bottom: '-90px', 
            left: '200px',
        }, 
        '.conf--input': {
            margin: '55px 0 35px', 
            backgroundColor: 'none', 
            maxWidth: '380px', 
            width: '380px',
        }, 
        '.MuiInput-input, .MuiInputBase-input, .MuiInputLabel-root, .MuiSelect-select, .MuiSelect-standard': {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            fontSize: '16px',
            fontWeight: '300',
            padding: '5px',
        }, 
        '.MuiFormHelperText-root': {
            padding: '5px'
        },
        '.conf--text:hover, .MuiMenuItem-root': {
            color: 'black', 
            margin: '0', 
            padding: '10px', 
        }, 
        '.checkout--conf--method': {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif', 
            fontSize: '18px',
            fontWeight: '300',
            color: '#2f7c31', 
            margin: '0 0 5px',
        }, 
    },
}); 


export default useStylesConfirmation; 