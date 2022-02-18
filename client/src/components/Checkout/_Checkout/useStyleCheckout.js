
import { makeStyles } from '@mui/styles';




const useStylesCheckout = makeStyles({
    '@global': {
        '.checkout': {
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'center', 
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif', 
            fontSize: '18px',
            fontWeight: '300',
            maxWidth: '100%', 
            height: '1000px', 
            margin: '50px 0', 
            // ['@media (max-width: 960px)']: {
            //     padding: '0', 
            //   }, 
        }, 
        '.MuiContainer-root': {
            maxWidth: '100%', 
            padding: '0', 
        },
        '.MuiStep-root': {
            // margin: '0 5%', 
            width: '300px'
        }, 
        '.MuiStepLabel-label': {
            fontWeight: '300', 
            fontSize: '15px',
        },
        '.checkout--helptext': {
            textAlign: 'left', 
            fontWeight: '300', 
            fontSize: '15px', 
            color: '#7D879C', 
            // ['@media (max-width: 1075px)']: {
            //     display: 'none',
            //   }
        }, 
        '.MuiStepLabel-label': {
            fontWeight: '300', 
            fontSize: '15px',
        }, 
        '.checkout--stepper': {
            position: 'absolute', 
            left: '5%', 
            top: '0', 
            maxWidth: '30%', 
        }, 
        '.checkout--canvas': {
            maxWidth: '70%', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'start',
            marginLeft: '10%', 
        }, 
        '.checkput--order': {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif', 
            fontSize: '44px',
            fontWeight: '300',
            color: '#7D879C',
            textAlign: 'center', 
            margin: '70px 0',
        },
    },
}); 


export default useStylesCheckout; 