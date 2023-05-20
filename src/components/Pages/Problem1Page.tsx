import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormGenerator from '../FormGenerator/FormItem';
import { FormItem } from '../../types';
import {
  addFormItem,
  clearFormData,
  saveItems,
} from '../../logic/actions/action';
import { RootState } from '../../logic/reducers/store';

const Problem1Page: React.FC = () => {
  const dispatch = useDispatch();
  const { items, formData, savedItems } = useSelector(
    (state: RootState) => state.form
  );

  const handleAddItem = (item: FormItem) => {
    dispatch(addFormItem(item));
  };

  const handleSaveDetails = () => {
    const data = formData ? formData : {};
    dispatch(saveItems(data as any));
    dispatch(clearFormData());
  };

  return (
    <div>
      <div>
        <h2>Actions</h2>
        <button
          disabled={items.length > 2}
          onClick={() =>
            handleAddItem({ id: 'text', type: 'text', label: 'Text Field' })
          }>
          Add Text-field
        </button>
        <button
          disabled={items.length > 2}
          onClick={() =>
            handleAddItem({
              id: 'select',
              type: 'select',
              label: 'Select Box',
              options: ['Red', 'Blue', 'Green'],
            })
          }>
          Add Select Box
        </button>
        <button
          disabled={items.length > 2}
          onClick={() =>
            handleAddItem({
              id: 'checkbox',
              type: 'checkbox',
              label: 'Checkbox',
            })
          }>
          Add Checkbox
        </button>
        <button className='save-btn' onClick={handleSaveDetails}>
          Save Details
        </button>
      </div>
      <div className='form-generator-wrap'>
        <h2>Form generator :</h2>
        <FormGenerator items={items} formData={formData} />
      </div>
      <div>
        <h2>Cards :</h2>
        <div className='card-div'>
          {savedItems.map((item, index) => (
            <div key={index} className='card-item'>
              <div>text : {item.text ? item.text : 'No text inputed'}</div>
              <div>
                isChecked : {item.checkbox === 'true' ? 'True' : 'False'}
              </div>
              <div>
                select option :{' '}
                {item.select ? item.select : 'No option selected'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problem1Page;
