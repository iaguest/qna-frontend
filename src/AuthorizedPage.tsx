import { Page } from './Page';
import { useAuth0 } from '@auth0/auth0-react';
import { ReactNode } from 'react';

interface AuthorisedPageProps {
  children?: ReactNode;
}

export const AuthorizedPage = ({ children }: AuthorisedPageProps) => {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Page title="You do not have access to this page">{null}</Page>;
  }
};
