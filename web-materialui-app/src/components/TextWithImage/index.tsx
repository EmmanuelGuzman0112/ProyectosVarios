import { Grid, styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FunctionComponent } from "react";
import { TContent } from "../../models";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  container: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: "4vw 12vw",
  },
  color: {
    backgroundColor: "#f5f7f9",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  backgroundSecondary: {
    color: theme.palette.secondary.main,
  },
}));

type propsText = {
  content: TContent;
};
const TextToTheLeft: FunctionComponent<propsText> = ({ content }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={6}>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item xs>
            <Typography className={classes.backgroundSecondary} variant="h6">
              {content.title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <b>{content.subTitle}</b>
            </Typography>
          </Grid>
          {content.descriptions.map((item, index) => (
            <Description key={index} description={item} />
          ))}

          <Grid item xs>
            <Typography variant="body1">
              <i>{content.finishingText}</i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <img
          width="100%"
          height="auto"
          src={content.img}
          alt="This is an test"
        ></img>
      </Grid>
    </Grid>
  );
};

type propsDescription = {
  description: string;
};

const Description: FunctionComponent<propsDescription> = ({ description }) => {
  return (
    <Grid item xs>
      <Typography variant="body1">{description}</Typography>
    </Grid>
  );
};

const TextToTheRight: FunctionComponent<propsText> = ({ content }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={4}>
        <img
          width="100%"
          height="auto"
          src={content.img}
          alt="This is an test"
        ></img>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item xs>
            <Typography className={classes.backgroundSecondary} variant="h6">
              {content.title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <b>{content.subTitle}</b>
            </Typography>
          </Grid>
          {content.descriptions.map((item, index) => (
            <Description key={index} description={item} />
          ))}

          <Grid item xs>
            <Typography variant="body1">
              <i>{content.finishingText}</i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

type props = {
  textToTheRight: boolean;
  content: any;
};

const TextWithImage: FunctionComponent<props> = ({
  textToTheRight,
  content,
}) => {
  const classes = useStyles();
  return (
    <>
      {/*<Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        padding="4vw 12vw"
        className={classes.color}
      >
        <Grid item xs>
          <img src={logo} alt="This is an test"></img>
        </Grid>
        <Grid item xs>
          <img src={logo} alt="This is an test"></img>
        </Grid>
      </Grid> */}
      <div className={classes.container}>
        {textToTheRight ? (
          <TextToTheRight content={content} />
        ) : (
          <TextToTheLeft content={content} />
        )}
      </div>
    </>
  );
};

export default TextWithImage;
