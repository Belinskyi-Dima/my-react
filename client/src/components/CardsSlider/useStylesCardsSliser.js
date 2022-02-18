import { makeStyles } from '@mui/styles';


const useStylesCardsSliser = makeStyles({
    '@global': {
        '.slider': {
            margin: '30px 0',
            display: 'flex',
            flexWrap: 'nowrap',
            overflow: 'scroll',
            '&::-webkit-scrollbar': {
                display: 'none',
            }
        }
    }
})



export default useStylesCardsSliser