import { makeStyles } from '@mui/styles';

const useStylesProductCard = makeStyles({
    '@global': {
        '.slider': {
            '& .card-wrapper': {
                minWidth: '250px',
                ['@media (max-width: 768px)']: {
                    minWidth: '180px',
                },
                ['@media (max-width: 425px)']: {
                    minWidth: '30vw',
                }
    
            }
        },

        '.card-wrapper': {
            position: 'relative',
            display: 'inline-block',
            margin: '10px',
            padding: '0 10px',
            boxShadow: '2px 2px 5px #bbbbbb',
            ['@media (max-width: 425px)']: {
                margin: '5px',
                padding: '0 5px',
            }
        },
        '.card-content': {
            ['@media (max-width: 425px)']: {
                margin: '5px 0 10px',
                padding: '5px'
            }
        },
        '.card-title': {
            textTransform: 'capitalize',
            fontSize: '18px',
            fontWeight: '700',
            margin: '10px 0 24px',
            ['@media (max-width: 425px)']: {
                fontSize: '14px',
                margin: '5px 0 15px',
            }
        },
        '.card-price': {
            position: 'absolute',
            bottom: '24px',
            right: '15px',
            ['@media (max-width: 425px)']: {
                fontSize: '12px',
                bottom: '10px',
                right: '10px',
            }
        },
        '.': {

        },
        '.': {

        },
    }
})

export default useStylesProductCard