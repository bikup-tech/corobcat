export type TMainReducer = {
  forceRender: number;
  createTaskModal: {
    isOpen: boolean;
    selectedMachine: number;
  };
};

export type TInitialState = {
  mainReducer: TMainReducer;
};

export const initialState: TInitialState = {
  mainReducer: {
    forceRender: 0,
    createTaskModal: {
      isOpen: false,
      selectedMachine: 1,
    };
  },
};
