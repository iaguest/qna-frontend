import { Store, createStore, combineReducers } from 'redux';
import { QuestionData } from './QuestionsData';

interface QuestionsState {
  readonly loading: boolean; // whether a server request is being made
  readonly unanswered: QuestionData[]; // an array containing unanswered questions
  readonly viewing: QuestionData | null; // the question the user is viewing
  readonly searched: QuestionData[]; // an array containing questions matched in the search
}
export interface AppState {
  readonly questions: QuestionsState;
}

const initialQuestionState: QuestionsState = {
  loading: false,
  unanswered: [],
  viewing: null,
  searched: [],
};

export const GETTINGUNANSWEREDQUESTIONS = 'GettingUnansweredQuestions';
export const GOTUNANSWEREDQUESTIONS = 'GotUnansweredQuestions';
export const GETTINGQUESTION = 'GettingQuestion';
export const GOTQUESTION = 'GotQuestion';
export const SEARCHINGQUESTIONS = 'SearchingQuestions';
export const SEARCHEDQUESTIONS = 'SearchedQuestions';

export const gettingUnansweredQuestionsAction = () =>
  ({ type: GETTINGUNANSWEREDQUESTIONS } as const);

export const gotUnansweredQuestionsAction = (questions: QuestionData[]) =>
  ({ type: GOTUNANSWEREDQUESTIONS, questions: questions } as const);

export const gettingQuestionAction = () => ({ type: GETTINGQUESTION } as const);

export const gotQuestionAction = (question: QuestionData | null) =>
  ({ type: GOTQUESTION, question: question } as const);

export const searchingQuestionsAction = () =>
  ({ type: SEARCHINGQUESTIONS } as const);

export const searchedQuestionsAction = (questions: QuestionData[]) =>
  ({ type: SEARCHEDQUESTIONS, questions } as const);

type QuestionsActions =
  | ReturnType<typeof gettingUnansweredQuestionsAction>
  | ReturnType<typeof gotUnansweredQuestionsAction>
  | ReturnType<typeof gettingQuestionAction>
  | ReturnType<typeof gotQuestionAction>
  | ReturnType<typeof searchingQuestionsAction>
  | ReturnType<typeof searchedQuestionsAction>;

const questionsReducer = (
  state = initialQuestionState,
  action: QuestionsActions,
) => {
  switch (action.type) {
    case GETTINGUNANSWEREDQUESTIONS: {
      return { ...state, loading: true };
    }
    case GOTUNANSWEREDQUESTIONS: {
      return { ...state, unanswered: action.questions, loading: false };
    }
    case GETTINGQUESTION: {
      return { ...state, viewing: null, loading: true };
    }
    case GOTQUESTION: {
      return { ...state, viewing: action.question, loading: false };
    }
    case SEARCHINGQUESTIONS: {
      return { ...state, searched: [], loading: true };
    }
    case SEARCHEDQUESTIONS: {
      return { ...state, searched: action.questions, loading: false };
    }
  }
  return state;
};

const rootReducer = combineReducers<AppState>({
  questions: questionsReducer,
});

export function configureStore(): Store<AppState> {
  const store = createStore(rootReducer, undefined);
  return store;
}
