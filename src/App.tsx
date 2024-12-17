/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { fontFamily, fontSize, gray2 } from './Styles';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';
import { Auth0Provider } from '@auth0/auth0-react';
import { SignOutPage } from './SignOutPage';
import { authSettings } from './AppSettings';
import { AuthorizedPage } from './AuthorizedPage';
const AskPage = React.lazy(() => import('./AskPage'));

function App() {
  return (
    <Auth0Provider
      domain={authSettings.domain}
      clientId={authSettings.clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <BrowserRouter>
        <div
          // this is a tagged template literal
          css={css`
            font-family: ${fontFamily};
            font-size: ${fontSize};
            color: ${gray2};
          `}
        >
          <Header />
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route
              path="ask"
              element={
                <React.Suspense
                  fallback={
                    <div
                      css={css`
                        margin-top: 100px;
                        text-align: center;
                      `}
                    >
                      Loading...
                    </div>
                  }
                >
                  <AuthorizedPage>
                    <AskPage />
                  </AuthorizedPage>
                </React.Suspense>
              }
            />
            <Route path="signin" element={<SignInPage />} />
            <Route path="signout" element={<SignOutPage />} />
            <Route path="questions/:questionId" element={<QuestionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
