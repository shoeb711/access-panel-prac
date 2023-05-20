import { CardData, FormItem } from '../../types';

interface FormState {
  items: FormItem[];
  formData: { [key: string]: string };
  savedItems: CardData[];
}

const initialFormState: FormState = {
  items: [],
  formData: {},
  savedItems: [
    {
      checkbox: 'true',
      select: 'yellow',
      text: 'test1',
    },
    {
      checkbox: 'true',
      select: 'blue',
      text: 'test2',
    },
    {
      checkbox: 'false',
      select: 'green',
      text: 'test3',
    },
    {
      checkbox: 'true',
      select: 'red',
      text: 'test4',
    },
  ],
};

export const formReducer = (state = initialFormState, action: any) => {
  switch (action.type) {
    case 'ADD_FORM_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'DELETE_FORM_ITEM':
      console.log(action.payload, 'sajhahd');

      return {
        ...state,
        items: state.items.filter((item) => item.type !== action.payload),
      };
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.id]: action.payload.value,
        },
      };
    case 'CLEAR_FORM_DATA':
      return {
        ...state,
        items: [],
        formData: {},
      };

    case 'SAVE_ITEMS':
      return {
        ...state,
        savedItems: [...state.savedItems, action.payload],
      };
    default:
      return state;
  }
};
