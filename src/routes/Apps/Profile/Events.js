import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import CmtImage from '../../../@coremat/CmtImageCutom';
import CmtMediaObject from '../../../@coremat/CmtMediaObject';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CmtCard from '../../../@coremat/CmtCard';
import CmtCardHeader from '../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../@coremat/CmtCard/CmtCardContent';
import CmtList from '../../../@coremat/CmtList';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { array, boolean, color, object, select, text, withKnobs } from '@storybook/addon-knobs';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  subTitleRoot: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    marginBottom: 0,
    marginTop: 6,
  },
  eventItem: {
    padding: 0,
    '&:not(:last-child)': {
      marginBottom: 18,
      paddingBottom: 15,
      borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    },
    '& .Cmt-media-object': {
      width: '100%',
      flexWrap: 'wrap',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    '& .Cmt-media-image': {
      marginBottom: 12,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginRight: 16,
        maxWidth: 150,
        marginBottom: 0,
      },
      [theme.breakpoints.up('md')]: {
        marginRight: 24,
        maxWidth: 200,
      },
      '& img': {
        width: '100%',
        borderRadius: 6,
        marginRight: 0,
        display: 'block',
        objectFit: 'cover',
      },
    },
    '& .Cmt-media-footer': {
      '@media screen and (max-width: 700px)': {
        width: '100%',
        marginLeft: 0,
      },
    },
  },
  badgeRoot: {
    padding: '5px 12px',
    backgroundColor: '#00bcd4',
    // backgroundColor:  fade(theme.palette.primary.main, 0.1),
    // color: theme.palette.primary.main,
    color: '#FFF',
    borderRadius: 5,
    fontSize: 8,
    display: 'inline-block',
    marginBottom: 10,
  },
  linkRoot: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    cursor: 'pointer',
    '& .MuiSvgIcon-root': {
      fontSize: 18,
      display: 'block',
    },
  },
}));

const EventItem = ({ item }) => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const getTitle = () => (
    <Box mb={4}>
      <Box component="span" className={classes.badgeRoot} bgcolor="#00bcd4">
        {item.type}
      </Box>
      <Typography className="pointer" component="div" variant="h3" mb={1}>
        {item.title}
      </Typography>
    </Box>
  );

  const getSubTitle = () => (
    <Box color="text.disabled" display="flex" alignItems="center">
      {/* <LocationOnIcon /> */}
      <Box component="p">{item.location}</Box>
    </Box>
  );

  const getFooter = () => (
    <Box style={{ marginLeft: '-10px' }} mt={{ xs: 2, md: 2 }}>
      <Box color="error.main" display="flex" alignItems="center" fontSize={{ xs: 15, lg: 20 }}>
        {/* <DateRangeIcon /> */}
        <Box component="span" style={{ color: 'blue' }} ml={2}>
          {item.date}
        </Box>
      </Box>

      <Box className={classes.root} mt={{ xs: 2, md: 2 }}>
        <Chip label="Candid Photographer" variant="outlined" />
        <Chip label="Traditional Photographer" variant="outlined" />
        <Chip label="Traditional Photographer" variant="outlined" />
      </Box>

      <Box
        className={classes.linkRoot}
        display="flex"
        alignItems="center"
        ml={{ md: 2 }}
        mt={{ xs: 1, md: 1 }}
        fontSize={{ xs: 12, lg: 14 }}>
        {/* <Box>Check In Detail</Box> */}
        <Box ml={2}>{/* <ArrowForwardIcon /> */}</Box>
      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      <CmtMediaObject
        avatar={<CmtImage className="pointer" src={item.thumb} alt={item.title} />}
        avatarPos="center"
        title={getTitle()}
        subTitle={getSubTitle()}
        footerComponent={getFooter()}
      />
    </React.Fragment>
  );
};

const Events = ({ events }) => {
  const classes = useStyles();
  return (
    <CmtCard>
      <CmtCardHeader
        separator={object('Separator', {
          color: '#CCC',
        })}
        className="pt-4 pb-4"
        title="Events List"
      />
      <CmtCardContent>
        <CmtList
          data={events}
          renderRow={(item, index) => (
            <ListItem className={classes.eventItem} component="div" key={index}>
              <EventItem item={item} />
            </ListItem>
          )}
        />
      </CmtCardContent>
    </CmtCard>
  );
};

export default Events;

Events.prototype = {
  events: PropTypes.array.isRequired,
};
