import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  grid: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  figure: {
    display: 'grid',
    justifyItems: 'center',
  },
  iframe: {
    height: '250px',
    width: '300px',
  },
  figcaption: {
    color: palette.primary.contrastText,
    marginTop: '1rem',
    fontSize: '1.5rem',
  },
}));

export default useStyles;
