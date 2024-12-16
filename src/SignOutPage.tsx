import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const SignOutPage: React.FC = () => {
  const { logout } = useAuth0();

  React.useEffect(() => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }, [logout]);

  return <div>Signing out...</div>;
};
