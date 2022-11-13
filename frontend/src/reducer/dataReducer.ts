interface StateType {
  isSuccess: boolean,
  total: number,
  urls: any[]
}

export const initialState: StateType | any = {
  isSuccess: true,
  total: 0,
  urls: []
};

export const dataReducer = (state = initialState, action: { type: string, value: any }) => {
  switch(action.type) {
    case 'GENERATE_URL':
      return {...state, urls: [...state.urls, action.value]};
    default:
      return state;
  }
};
