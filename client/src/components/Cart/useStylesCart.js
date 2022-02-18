
import { makeStyles } from '@mui/styles';




const useStylesCart = makeStyles({
    '@global': {
        '.cart': {
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'center', 
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif', 
            fontSize: '18px',
            fontWeight: '300',
            maxWidth: '100%', 
            margin: '50px 0 200px', 
            ['@media (max-width: 960px)']: {
                padding: '0', 
              }, 
        }, 
        '.MuiContainer-root': {
            maxWidth: '100%', 
            padding: '0', 
        }, 
        '.cart--info': {
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            textAlign: 'right',  
            width: '20%', 
            marginRight: '30px', 
            fontSize: '15px', 
            color: '#4B566B', 
            ['@media (max-width: 1075px)']: {
                display: 'none',
              }
        }, 
        '.cart--divider': {
            borderColor: '#DAE1E7', 
            ['@media (max-width: 1075px)']: {
                display: 'none',
              }
        }, 
        '.cart--list': {
            position: 'relative', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            marginLeft: '30px', 
            maxWidth: '80%',
            ['@media (max-width: 960px)']: {
                maxWidth: '100%',
                margin: '0', 
                padding: '0', 
                margin: '0 10px', 
              }
        },
        '.card': {
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'start', 
            alignItems: 'center',
            maxWidth: '100%', 
            height: '150px', 
            margin: '10px 0',
            padding: '0 15px',
            boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)', 
            boxRadius: '10px',
            borderRadius: '10px', 
            ['@media (max-width: 768px)']: {
                flexDirection: 'column', 
                height: '100%',
                width: '100%', 
            },
        }, 
        '.css-46bh2p-MuiCardContent-root:last-child': {
            padding: '0'
        }, 
        '.cart--img': {
            maxWidth: '100%', 
            height: 'auto', 
            width: '200px', 
            ['@media (max-width: 768px)']: {
                marginTop: '20px',
            },
        }, 
        '.cart--text': {  
            margin: '0 10px', 
            color: '#4B566B', 
            fontWeight: '300',
            fontSize: '18px',
        },
        '.cart--text--description': {
            width: '200px'
        }, 
        '.cart--text--color': {
            width: '50px'
        },
        '.cart--text--size': {
            width: '10px'
        },
        '.cart--container--count--delete': {
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center',
            ['@media (max-width: 768px)']: {
                marginBottom: '20px',
            },
        },
        '.cart--container--count': {
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center',
            margin: '0 10px', 
            ['@media (max-width: 768px)']: {
                margin: '0 30px',
            },
        }, 
        '.fas': {
            color: '#4B566B', 
            fontSize: '11px', 
            cursor: 'pointer',  
        }, 
        '.cart--text--count': {
            width: '15px', 
            margin: '0', 
            textAlign: 'center'
        }, 
        '.cart--text--price': {
            width: '110px', 
            color: '#FF5353', 
        },
        '.cart--btn--delete': {
            color: '#FF5353', 
            ['@media (max-width: 768px)']: {
                margin: '0 30px',
            },
        }, 
        '.cart--text--total': {
            position: 'absolute', 
            bottom: '-70px', 
            left: '0', 
        },
        '.cart--btn--minus': {
            maxWidth: '10px', 
            width: '10px', 
        },
        '.cart--btn--buy': {
            position: 'absolute', 
            width: '150px', 
            bottom: '-120px', 
            left: '0', 
        }, 
    },
}); 


export default useStylesCart; 