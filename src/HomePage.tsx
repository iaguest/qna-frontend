import React from 'react';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions } from './QuestionData';

export const HomePage = () => (
  <Page>
    <div>
      <PageTitle>Unanswered Questions</PageTitle>
      <button>Ask a question</button>
    </div>
    <QuestionList data={getUnansweredQuestions()} />
  </Page>
);
