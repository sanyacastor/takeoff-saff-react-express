import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";

export default function Header({ history, onSearch }) {
  const [logined, setLogined] = useState(false);


  useEffect(() => {
    const userId = localStorage.getItem("user");
    if (userId) {
      setLogined(true);
    }
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <>
      <nav
        className='navbar level mt-3 mb-5 container'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='level-left'>
          <Link
            className='navbar-item level-left-item'
            to='/Contacts'
          >
            Мои контакты
          </Link>
          <div className='navbar-item level-left'>{logined && <Search onSearch={onSearch}/>}</div>
        </div>

        <div className='navbar-item level-right'>
          {logined ? (
            <button className='button' onClick={logOutHandler}>
              Выйти
            </button>
          ) : (
            <Link to='/login'>Войти</Link>
          )}
        </div>
      </nav>
    </>
  );
}
