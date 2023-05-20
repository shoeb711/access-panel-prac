import React from 'react';
import { useDispatch } from 'react-redux';

import { FormItem } from '../../types';
import { deleteFormItem, updateFormData } from '../../logic/actions/action';

interface FormGeneratorProps {
  items: FormItem[];
  formData: any;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ items, formData }) => {
  const dispatch = useDispatch();

  const handleInputChange = (itemId: string, value: string) => {
    dispatch(updateFormData(itemId, value));
  };

  const handleDelete = (itemId: string) => {
    dispatch(deleteFormItem(itemId));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <label>{item.label}</label>
          {item.type === 'text' && (
            <input
              placeholder='Enter Name'
              type='text'
              value={formData[item.id] || ''}
              onChange={(e) => handleInputChange(item.id, e.target.value)}
            />
          )}
          {item.type === 'select' && (
            <select
              value={formData[item.id] || ''}
              onChange={(e) => handleInputChange(item.id, e.target.value)}>
              {item.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {item.type === 'checkbox' && (
            <input
              type='checkbox'
              checked={Boolean(formData[item.id])}
              onChange={(e) =>
                handleInputChange(item.id, e.target.checked ? 'true' : 'false')
              }
            />
          )}

          <button onClick={() => handleDelete(item.type)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default FormGenerator;
