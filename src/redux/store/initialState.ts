export type TMainReducer = {
  forceRender: number;
};

export type TInitialState = {
  mainReducer: TMainReducer;
};

export const initialState: TInitialState = {
  mainReducer: {
    forceRender: 0,
  },
};
