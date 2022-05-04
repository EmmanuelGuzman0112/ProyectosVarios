import { Box, createStyles, Grid, styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from '../../theme';

{
  /*      <div>
          <h1>Gabriela Liliana Vanney</h1>
        </div>
        <div>
          <h2>Desarrolladora Web</h2>
        </div> */
}

//Componentizacion
/* const BoxStyled = styled(Box)(() => ({

})); */

const useStyles = makeStyles(() => ({
  containerFleBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "4vw 12vw",
    flexWrap: "wrap",
    background: theme.palette.primary.light,
    color:theme.palette.primary.contrastText,
  },
  color: {
    background: theme.palette.primary.light,
    color:theme.palette.primary.contrastText,
  },
}));

const CenteredText = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Box className={classes.containerFleBox}>
        <Typography variant="body1" align="center" gutterBottom>
          The clothing you wear sends a message about your personality, and a
          carefully selected wardrobe can speak volumes before you even say a
          word. It tells others who you are and what you are all about.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          <b>
            I’m Rasha and i am here to help you create a fashion style that
            reflects the unique you.
          </b>
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Whether through a wardrobe detox, store visits with me, or an online
          personal shopping experience, my tailored services will help you
          discover your true fashion self while meeting your budget and time
          needs. Take a look around my site, and see what I can do for you
          today.
        </Typography>
      </Box> */}

      {/* Con GRID */}
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        padding="4vw 12vw"
        className={classes.color}
      >
        <Grid item xs={2}>
          <Typography variant="body1" align="center" gutterBottom>
            The clothing you wear sends a message about your personality, and a
            carefully selected wardrobe can speak volumes before you even say a
            word. It tells others who you are and what you are all about.
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" align="center" gutterBottom>
            <b>
              I’m Rasha and i am here to help you create a fashion style that
              reflects the unique you.
            </b>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" align="center" gutterBottom>
            Whether through a wardrobe detox, store visits with me, or an online
            personal shopping experience, my tailored services will help you
            discover your true fashion self while meeting your budget and time
            needs. Take a look around my site, and see what I can do for you
            today.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CenteredText;
