import { makeStyles } from '@mui/styles';

const useStylesGalleryCategory = makeStyles({
    '@global': {
        '.road': { gridArea: '1 / 1 / span 2 / span 2' },
        '.road-touring': { gridArea: '2 / 3 / span 1 / span 2' },

        '.mtb': { gridArea: '3 / 2 / span 2 / span 2' },
        '.mtb-full-suspencion ': { gridArea: '4 / 1 / span 2 / span 1' },

        '.city': { gridArea: '5 / 3 / span 2 / span 2' },
        '.city-cruiser ': { gridArea: '6 / 1 / span 1 / span 2' },

        '.gallery': {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '150px',
            gridGap: '4px',
            margin: '0 auto',
            maxWidth: '900px', 
            minWidth: '300px', 
        }, 
        '.img-btn': {
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
            width: '100%', 
            height: '100%', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            color: '#fff',
            '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: 2,
                backgroundColor: '#00000060',
                transition: '250ms',
            },
            '&:hover::after': {
                backgroundColor: '#00000000',
            },
            '&:hover .img-btn-title': {
                border: '2px solid #fff',
            },
        },
        '.img-btn-title': {
            boxSizing: 'border-box',
            display: 'inline-block',
            maxWidth: '78%',
            zIndex: 3,
            padding: '7px 12px',
            border: '2px solid #ffffff00',
            textTransform: 'uppercase',
            fontWeight: '700',
            textAlign: 'center',
            textShadow: '0 0 6px #000',
            
        },
        
        ['@media (max-width: 768px)']: {
            '.road': { gridArea: '1 / 1 / span 2 / span 2' },
            '.road-touring': { gridArea: '2 / 3 / span 2 / span 1' },
    
            '.mtb': { gridArea: '4 / 2 / span 2 / span 2' },
            '.mtb-full-suspencion ': { gridArea: '6 / 3 / span 2 / span 1' },
    
            '.city': { gridArea: '6 / 1 / span 2 / span 2' },
            '.city-cruiser ': { gridArea: '8 / 2 / span 1 / span 2' },

            '.gallery': {
                gridTemplateColumns: 'repeat(3, 1fr)',
            }, 

            '.img-btn-title': {
                fontSize: '14px',
            }
        },
        
        ['@media (max-width: 425px)']: {
            '.img-btn-title': {
                maxWidth: '90%',
                fontSize: '12px',
            }
        },

        ['@media (max-width: 425px)']: {
            '.gallery-container': {
                padding: '0px'
            },
            '.img-btn-title': {
                fontSize: '10px',
                maxWidth: '95%',
            },
            
        }
    }
})

export default useStylesGalleryCategory