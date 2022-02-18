
import { makeStyles } from '@mui/styles';




const useStylesShipment = makeStyles({
    '@global': {
        '.shipment': {
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
        '.shipment--input': {
            margin: '0 0 25px', 
            backgroundColor: 'none', 
            maxWidth: '380px', 
            fontSize: '18px',
            width: '380px', 
        }, 
        '.MuiInput-input, .MuiInputBase-input, .MuiInputLabel-root, .MuiSelect-select, .MuiSelect-standard': {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            fontSize: '18px',
            fontWeight: '300',
            padding: '5px',
        }, 
        '.MuiFormHelperText-root': {
            padding: '5px'
        }, 
        '.shipment--text:hover, .MuiMenuItem-root': {
            color: 'black', 
            margin: '0', 
            padding: '10px', 
        }, 
        '.checkout--shipping--method': {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif', 
            fontSize: '18px',
            fontWeight: '400',
            color: '#2f7c31', 
            margin: '0 0 35px',
        }, 
        '.shipment--method--container': {
            margin: '45px 0 25px',
            fontSize: '18px',
        }, 
        '.MuiFormHelperText-root': {
            margin: '5px', 
            fontWeight: '300',
        }, 
        '.MuiFormHelperText-root, .MuiInputLabel-root': {
            color: '#7D879C', 
        }, 
        '.shipment--text--header': {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif', 
            fontSize: '44px',
            fontWeight: '300',
            color: '#7D879C', 
            margin: '0 0 70px 0', 
        },
    },
}); 


export default useStylesShipment; 