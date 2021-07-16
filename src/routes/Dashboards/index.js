import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const Dashboards = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/leads`} />
        <Route path={`${requestedUrl}/crypto`} component={lazy(() => import('./Crypto'))} />
        <Route path={`${requestedUrl}/leads`} component={lazy(() => import('./Leads'))} />
        <Route path={`${requestedUrl}/dashboard`} component={lazy(() => import('./Leads/Dashboard'))} />
        <Route path={`${requestedUrl}/lead/create`} component={lazy(() => import('./Leads/CreateLead'))} />
        <Route path={`${requestedUrl}/lead/:id`} component={lazy(() => import('./Leads/editLead'))} />
        <Route path={`${requestedUrl}/project/edit`} component={lazy(() => import('./Projects/ViewProject'))} />
        <Route path={`${requestedUrl}/PDF/create`} component={lazy(() => import('./PDF/CreatePDF'))} />
        <Route path={`${requestedUrl}/listing`} component={lazy(() => import('./Listing'))} />
        <Route path={`${requestedUrl}/intranet`} component={lazy(() => import('./Intranet'))} />
        <Route path={`${requestedUrl}/crm`} component={lazy(() => import('./Crm'))} />
        <Route path={`${requestedUrl}/news`} component={lazy(() => import('./News'))} />
        <Route path={`${requestedUrl}/eCommerce`} component={lazy(() => import('./ECommerce'))} />
        <Route path={`${requestedUrl}/misc`} component={lazy(() => import('./Misc'))} />
        <Route path={`${requestedUrl}/leads`} component={lazy(() => import('./Leads'))} />
        <Route component={lazy(() => import('../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default Dashboards;
