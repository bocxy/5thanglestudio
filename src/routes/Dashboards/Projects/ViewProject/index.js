import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import GridContainer from '@jumbo/components/GridContainer';
import CmtCard from '@coremat/CmtCard';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import Box from '@material-ui/core/Box';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CallIcon from '@material-ui/icons/Call';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CmtGridView from '@coremat/CmtGridView';
import Events from '../../../Apps/Profile/Events';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail } from '../../../../redux/actions/ProfileApp';
import UserPhotos from '../../../Dashboards/Intranet/UserPhotos';
import { array, boolean, color, object, select, text, withKnobs } from '@storybook/addon-knobs';
import ValueImage from './finance_value.png';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { green, purple, orange } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  mutedText: {
    color: '#b5b5b5',
    fontSize: '12px',
  },
  pageFull: {
    width: '100%',
  },
  profileSidebar: {
    '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },
  profileMainContent: {
    '@media screen and (min-width: 1280px) and (max-width: 1499px)': {
      flexBasis: '100%',
      maxWidth: '100%',
    },
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  // { label: 'Dashboard', link: '/dashboard' },
  { label: 'Project View', isActive: true },
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(orange[500]),
    fontSize: '10px',
    color: '#FFF',
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  },
}))(Button);

const GreenButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    fontSize: '10px',
    color: '#FFF',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const rows = [
  createData(
    'Events details',
    'Oct 20 2021',
    <GreenButton variant="contained" color="primary">
      Completed
    </GreenButton>,
  ),
  createData(
    'Photo Grapher... ',
    'Oct 20 2021',
    <ColorButton variant="contained" color="primary">
      On Hold
    </ColorButton>,
  ),
  createData(
    'Video Grapher...',
    'Jan 20 2021',
    <GreenButton variant="contained" color="primary">
      Completed
    </GreenButton>,
  ),
];

const ProjectDashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState('about');
  const { userDetail } = useSelector(({ profileApp }) => profileApp);

  useEffect(() => {
    dispatch(getUserDetail());
  }, [dispatch]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <PageContainer heading="Project View" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <CmtCard className="mb20">
            <CmtCardHeader
              separator={object('Separator', {
                color: '#CCC',
              })}
              className="pt-4 pb-4"
              title="Customer Detail"
              titleProps={{
                variant: 'h4',
                component: 'div',
              }}
            />
            <CmtCardContent>
              <PerfectScrollbar>
                <Box mb={6} style={{ marginBottom: '0px' }}>
                  <Box display="flex" alignItems="center" mb={3} color="text.secondary">
                    <MailOutlineIcon />
                    <Box ml={3} md={3}>
                      <label className={classes.mutedText}> Email </label> <br />
                      Customer@gmail.com{' '}
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="center" mb={3} color="text.secondary">
                    <CallIcon />
                    <Box ml={3} md={3}>
                      <label className={classes.mutedText}> Phone </label> <br /> +91 93433 87324
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="center" mb={3} color="text.secondary">
                    <PersonOutlineIcon />
                    <Box ml={3}>
                      <label className={classes.mutedText}> Customer name </label>
                      <br /> Dinesh Kumar
                    </Box>
                  </Box>
                </Box>
              </PerfectScrollbar>
            </CmtCardContent>
          </CmtCard>

          <CmtCard className="mb20">
            <CmtCardHeader
              separator={object('Separator', {
                color: '#CCC',
              })}
              className="pt-4 pb-4"
              title="Finance Status"
              titleProps={{
                variant: 'h4',
                component: 'div',
              }}
            />
            <CmtCardContent>
              <PerfectScrollbar>
                <center>
                  {' '}
                  <img src={ValueImage} />{' '}
                </center>
              </PerfectScrollbar>
            </CmtCardContent>
          </CmtCard>

          <CmtCard className="Views">
            <CmtCardHeader
              separator={object('Separator', {
                color: '#CCC',
              })}
              className="pt-4 pb-4"
              title="Event Coordination Checklist"
              titleProps={{
                variant: 'h4',
                component: 'div',
              }}
            />
            <CmtCardContent>
              <PerfectScrollbar>
                <Table className={classes.table} aria-label="caption table">
                  {/* <caption>A basic table example with a caption</caption> */}
                  <TableHead>
                    <TableRow>
                      <TableCell> Task </TableCell>
                      <TableCell align="right"> Date </TableCell>
                      <TableCell align="right"> Status </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </PerfectScrollbar>
            </CmtCardContent>
          </CmtCard>
        </Grid>

        <Grid item xs={12} sm={12} md={8} xl={8}>
          <CmtCard className="mb20">
            <CmtCardHeader
              separator={object('Separator', {
                color: '#CCC',
              })}
              className="pt-4 pb-4"
              title="Project Details"
              titleProps={{
                variant: 'h4',
                component: 'div',
              }}
            />
            <CmtCardContent>
              <PerfectScrollbar>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3} mb={5} spacing={3}>
                    <label className={classes.mutedText}> Customer name </label>
                    <p> Company Pvt.Ltd. </p>
                  </Grid>
                  <Grid item xs={12} md={3} spacing={3}>
                    <label className={classes.mutedText}> Event Date </label>
                    <p> Oct 25, 1984</p>
                  </Grid>
                  <Grid item xs={12} md={3} spacing={3}>
                    <label className={classes.mutedText}> Customer Address </label>
                    <p> 15 Street, Korattur </p>
                    <p> Chennai - 600080 </p>
                  </Grid>
                </Grid>
                <CmtGridView
                  itemPadding={24}
                  responsive={{
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 1,
                    xl: 2,
                  }}
                />
              </PerfectScrollbar>
            </CmtCardContent>
          </CmtCard>
          {userDetail && <Events events={userDetail.events} />}

          {/* <CmtCard className="mb20">
            <CmtCardHeader
              className="pt-4"
              title="Event List"
              titleProps={{
                variant: 'h4',
                component: 'div',
              }}
            />
            <CmtCardContent>
              <PerfectScrollbar>
                <h4> Form Goes here </h4>
              </PerfectScrollbar>
            </CmtCardContent>
          </CmtCard> */}
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default ProjectDashboard;
