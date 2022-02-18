
import { makeStyles } from '@mui/styles';




const useStylesCartCounter = makeStyles({
    '@global': {
        '.goods-count': {
            position: 'absolute', 
            top: '2px',
            right: '2px',
            borderRadius: '50%', 
            backgroundColor: 'white', 
            color: '#FF5353',
            fontSize: '12px',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            fontWeight: 'bold',
            width: '17px', 
            height: '17px', 
        },  
    },
}); 


export default useStylesCartCounter; 