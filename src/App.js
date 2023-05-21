import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import Header from "./header";
import Footer from "./footer";

import "./App.css";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newCity, setNewCity] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "user-table");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      age: newAge,
      city: newCity,
    });
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "user-table", id);
    await deleteDoc(userDoc);
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <Header />
      <div class="main">
        <div class="form-block">
          <form>
            <div class="data-row">
              <label>Name:</label>
              <input
                type="text"
                required
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
            </div>
            <div class="data-row">
              <label>Age:</label>{" "}
              <input
                type="text"
                required
                onChange={(event) => {
                  setNewAge(event.target.value);
                }}
              />
            </div>
            <div class="data-row">
              <label>City:</label>{" "}
              <input
                type="text"
                required
                onChange={(event) => {
                  setNewCity(event.target.value);
                }}
              />
            </div>
            <div class="form-data-action">
              <button onClick={createUser}>Save</button>
            </div>
          </form>
        </div>
        {users.map((user) => {
          return (
            <div class="data-block">
              <div class="data-row">
                <label>Name:</label>
                {user.name}
              </div>
              <div class="data-row">
                <label>Age:</label>
                {user.age}
              </div>
              <div class="data-row">
                <label>City:</label>
                {user.city}
              </div>
              <div class="data-action">
                <button>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
