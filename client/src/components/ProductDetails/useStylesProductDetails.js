import { makeStyles } from '@mui/styles';

const useStylesProductDetails = makeStyles({
    '@global': {
        '.PDP_title': {
            fontWeight: '500',
            fontSize: '48px',
            textTransform: 'capitalize',
            padding: '5px 20px',
            marginBottom: '30px',
            borderLeft: '5px solid #000000',
            ['@media (max-width: 768px)']: {
                fontSize: '36px',
            },
            ['@media (max-width: 425px)']: {
                fontSize: '24px',
            },
        },
        '.PDP_content-wrapper': {
            display: 'flex',
            ['@media (max-width: 425px)']: {
                flexDirection: 'column'
            },
        },
        '.PDP_slider-container': {
            width: '50vw',
            height: 'fit-content',
            position: 'sticky',
            top: '100px',
            ['@media (max-width: 425px)']: {
                width: '100%',
                position: 'static',
            },
        },
        '.PDP_info-containers-wrapper': {
            marginLeft: '40px',
            '& > :nth-of-type(n)': {
                marginBottom: '10px',
                padding: '10px',
                borderBottom: '1px solid #44444450',
            },
            ['@media (max-width: 768px)']: {
                marginLeft: '0',
            },
        },
        '.PDP_info-container--qty-article': {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px',
            '& :nth-of-type(n)': {
                maxWidth: '50%',
                minWidth: 'fit-content',
            },
        },
        '.PDP_info-container--btn-group': {
            display: 'flex',
            justifyContent: 'space-between',
            '& > :nth-of-type(n)': {
                maxWidth: '50%',
                minWidth: 'fit-content',
                textTransform: 'capitalize',
                color: '#444444',
                backgroundColor: '#ffffff',
                fontWeight: '600',
                border: '1px solid #444444',
                ['@media (max-width: 768px)']: {
                    padding: '5px 10px',
                },
                '&:hover': {
                    color: '#444444',
                    backgroundColor: '#f7f7f7',
                    border: '1px solid #000000',
                }
            }
        },
        '.PDP_info-container--form-label': {
            fontWeight: '600', 
            color: '#000000',
            marginBottom: '15px'
        },
        '.PDP_info-container--form-control-label--frame-color': {
            '& :nth-of-type(1)': {
                display: 'none'
            },
            '& :nth-of-type(2)': {
                margin: '0 10px',
                width: '35px',
                height: '30px',
                borderRadius: '3px',
                opacity: '0.6',
                transition: '250ms',
                '&:hover': {
                    opacity: '1',
                    border: '1px solid #000000',
                },
                ['@media (max-width: 768px)']: {
                    margin: '0 0 0 10px',
                },
            },
            '& .Mui-checked + span': {
                border: '1px solid #000000',
                opacity: '1',
            },
        },
        '.PDP_info-container--form-control-label--frame-sizes': {
            '& :nth-of-type(1)': {
                display: 'none'
            },
            '& :nth-of-type(2)': {
                textTransform: 'uppercase',
                fontWeight: '600',
                color: '#098057',
                border: '1px solid #098057',
                padding: '5px 15px',
                margin: '0 10px',
                transition: '500ms',
                '&:hover': {
                    border: '1px solid #09805790',
                    background: '#63ffc930'
                },
                '&.Mui-disabled': {
                    border: '1px solid #44444450',
                    '&:hover': {
                        border: '1px solid #44444450',
                        background: 'none',
                    }
                },
                '@media (max-width: 768px)': {
                    margin: '0 0 0 10px',
                },
            },
            '& .Mui-checked + span': {
                background: '#63ffc930',
                boxShadow: '0 0 5px #63ffc9',
            },
        },
        '.PDP_info-container--price': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        '.PDP_info-container--price--btn': {
            color: '#ffffff',
            backgroundColor: '#000000',
            fontWeight: '500',
            fontSize: '16px',
            '&:hover': {
                color: '#ffffff',
                backgroundColor: '#3a3a3a',
            }
        },


    }
})

export default useStylesProductDetails;