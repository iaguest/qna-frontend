/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './Store';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { fontFamily, fontSize, gray2 } from './Styles';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';
const AskPage = React.lazy(() => import('./AskPage'));

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
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
                  <AskPage />
                </React.Suspense>
              }
            />
            <Route path="signin" element={<SignInPage />} />
            <Route path="questions/:questionId" element={<QuestionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
