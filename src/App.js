import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

import Header from "./header";
import Footer from "./footer";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "react-firebase-crud");
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
          <div class="data-row">
            <label>Name:</label>
            <input type="text" />
          </div>
          <div class="data-row">
            <label>Age:</label> <input type="text" />
          </div>
          <div class="data-row">
            <label>City:</label> <input type="text" />
          </div>
          <div class="form-data-action">
            <a href="#">Save</a>
          </div>
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
                <a href="#">Edit</a>
                <a href="#">Delete</a>
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
