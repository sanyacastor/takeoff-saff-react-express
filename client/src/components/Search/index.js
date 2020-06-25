import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [value, setValue] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onSearch(value.toLowerCase());
  };

  return (
    <form className='field has-addons' onSubmit={(e) => formSubmitHandler(e)}>
      <div className='control'>
        <input
          className='input'
          type='text'
          onChange={(e) => setValue(e.target.value)}
          placeholder='Найти контакт'
          value={value}
        />
      </div>
      <div className='control'>
        <button className='button' type='submit'>
          Поиск
        </button>
      </div>
    </form>
  );
}
