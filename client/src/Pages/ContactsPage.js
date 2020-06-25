import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { nanoid } from "nanoid";

const contacts = [
  {
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
    phone: "010-692-6593 x09125",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    phone: "1-463-123-4447",
  },
  {
    id: 4,
    name: "Patricia Lebsack",

    phone: "493-170-9623 x156",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    phone: "(254)954-1289",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    phone: "1-477-935-8478 x6430",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    phone: "210.067.6132",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    phone: "586.493.6943 x140",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    phone: "(775)976-6794 x41206",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    phone: "024-648-3804",
  },
];

export default function ContactsPage(props) {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [newUser, setNewUser] = useState({ name: "", phone: "" });

  useEffect(() => {
    const localContacts = localStorage.getItem("contacts");

    if (localContacts == null) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
      setUsers(contacts);
    } else {
      setUsers(JSON.parse(localContacts));
    }
  }, []);

  const updateLocalStorage = (users) => {
    localStorage.setItem("contacts", JSON.stringify(users));
  };

  const editHandler = ({ id, phone, name }) => {
    const index = users.findIndex((u) => u.id === id);

    const updatedUser = { ...users[index], name, phone };

    let newUsers = [
      ...users.slice(0, index),
      updatedUser,
      ...users.slice(index + 1),
    ];

    setUsers(newUsers);
    updateLocalStorage(newUsers);
  };

  const deleteHandler = (id) => {
    const index = users.findIndex((u) => u.id === id);
    let newUsers = [...users.slice(0, index), ...users.slice(index + 1)];

    setUsers(newUsers);
    updateLocalStorage(newUsers);
  };

  const filterByName = (name) => {
    setFilter(name);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    let newUsers = users.slice();

    newUsers = [...newUsers, { ...newUser, id: nanoid(3) }];

    setUsers(newUsers);
    updateLocalStorage(newUsers);
    setNewUser({ name: "", phone: "" });
  };

  let filtredUsers = users.filter((u) => u.name.toLowerCase().includes(filter));

  return (
    <>
      <Header {...props} onSearch={filterByName} />
      <div className='container px-3'>
        <form
          className='field has-addons mb-5'
          onSubmit={(e) => submitFormHandler(e)}
        >
          <label className='control'>
            <input
              className='input mb-3'
              placeholder='Имя контакта'
              type='text'
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              value={newUser.name}
              required
            />
          </label>
          <label className='control'>
            <input
              className='input'
              placeholder='телефон(916-389-9900)'
              type='tel'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              onChange={(e) =>
                setNewUser({ ...newUser, phone: e.target.value })
              }
              value={newUser.phone}
              required
            />
          </label>
          <span className='control'>
            <button className='button'> добавить</button>
          </span>
        </form>
        {users &&
          filtredUsers.map((u) => (
            <Card
              key={u.id}
              user={u}
              onEdit={editHandler}
              onDelete={deleteHandler}
            />
          ))}
      </div>
    </>
  );
}
