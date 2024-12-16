import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const SignInPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    // Automatically trigger login when this component mounts
    loginWithRedirect();
  }, [loginWithRedirect]);

  return <div>Redirecting to sign in...</div>;
};
