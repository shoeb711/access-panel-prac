import { CardData, FormItem } from '../../types';

export const addFormItem = (item: FormItem) => ({
  type: 'ADD_FORM_ITEM',
  payload: item,
});

export const deleteFormItem = (itemId: string) => ({
  type: 'DELETE_FORM_ITEM',
  payload: itemId,
});

export const updateFormData = (itemId: string, value: string) => ({
  type: 'UPDATE_FORM_DATA',
  payload: {
    id: itemId,
    value,
  },
});
export const saveItems = (items: CardData[]) => ({
  type: 'SAVE_ITEMS',
  payload: items,
});

export const clearFormData = () => ({
  type: 'CLEAR_FORM_DATA',
});
