import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

import "./loginPage.css";

export default function LoginPage(props) {
  const { isAuth, setUserId } = useContext(UserContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(null)

  const formSubmitHandeler = (e) => {
    e.preventDefault();

    isAuth(name, password).then(({id, error}) => {
      const { history } = props;

      if (id) {
        setUserId(id);
        localStorage.setItem("user", JSON.stringify(id));
        history.push("/contacts");
      } else {
        setError(error)
        setUserId(null);
        localStorage.removeItem("user");
      }
    });
  };


  return (
    <>
      <div className='container px-3'>
        <div className='form-wrapper'>
          <form className='form' onSubmit={formSubmitHandeler}>
            <h2 className='title is-4'>Мои контакты</h2>
            <fieldset className='field'>
              <label className='control'>
                <input
                  className='input'
                  value={name}
                  type='text'
                  placeholder='login'
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </label>
            </fieldset>
            <fieldset className='field'>
              <label className='control'>
                <input
                  value={password}
                  className='input'
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </label>
            </fieldset>
            <button className='button is-primary  is-fullwidth' type='submit'>
              Войти
            </button>
            <p className="help is-danger mt-2">{error}</p>
          </form>
        </div>
      </div>
    </>
  );
}
