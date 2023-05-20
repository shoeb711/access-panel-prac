import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../logic/reducers/store';

const Problem2Page = () => {
  const { savedItems } = useSelector((state: RootState) => state.form);
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedItem(selectedValue);
  };

  const filteredItems = selectedItem
    ? savedItems.filter((item) => item.text === selectedItem)
    : savedItems;

  return (
    <div className='table-wrap'>
      {savedItems.length ? (
        <>
          <div>
            <h2>User Table : </h2>
            <select value={selectedItem} onChange={handleSelectChange}>
              <option value=''>-- Select Option --</option>
              {savedItems.map((item) => (
                <option key={item.text} value={item.text}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
          <div className='table-header th'>
            <div>Name</div>
            <div>isChecked</div>
            <div>Selected Options</div>
          </div>
          <div>
            {filteredItems.map((item) => (
              <div className='table-header' key={item.text}>
                <div>{item.text ? item.text : 'N/A'}</div>
                <div>{item.checkbox === 'true' ? 'True' : 'False'}</div>
                <div>{item.select ? item.select : 'N/A'}</div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Problem2Page;
