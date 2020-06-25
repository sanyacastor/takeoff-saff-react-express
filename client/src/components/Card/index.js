import React, { useState } from "react";

export default function Card({ user, onDelete, onEdit }) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);

  const editHandler = (e) => {
    e.preventDefault();

    const { id } = user;

    const editedUser = {
      id,
      name,
      phone,
    };

    if (edit) {
      onEdit(editedUser);
    }

    setEdit(!edit);
  };

  return (
    <div>
      <div className='card mb-5'>
        <div className='card-content columns level'>
          {!edit ? (
            <>
              <div className='column'>
                <p className='title is-6'>{name}</p>
                <p className='subtitle is-6'>{phone}</p>
              </div>

              <div className='is-8 column has-text-right'>
                <button
                  type='button'
                  className='button mr-2'
                  onClick={(e) => editHandler(e)}
                >
                  редактировать
                </button>
                <button
                  className='button is-danger'
                  onClick={() => onDelete(user.id)}
                >
                  X
                </button>
              </div>
            </>
          ) : (
            <>
              <div className='column'>
                <form onSubmit={(e) => editHandler(e)} id='form1'>
                  <label className='label'>
                    <input
                      className='title is-6 input'
                      value={name}
                      type='text'
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                  <label>
                    <input
                      className='title is-6 input'
                      value={phone}
                      type='tel'
                      pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </label>
                </form>
              </div>

              <div className='is-8 column has-text-right'>
                <button
                  form='form1'
                  type='submit'
                  className='button mr-2'
                >
                  Ok
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
