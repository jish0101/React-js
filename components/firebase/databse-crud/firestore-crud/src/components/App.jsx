import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    if (name && age) {
      setLoading(true);
      await addDoc(usersCollectionRef, { name: name, age: Number(age) });
    }
    setLoading(false);
  };

  const getUSers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getUSers();
  }, []);

  const updateUser = async (id, age) => {
    setLoading(true);
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
    setLoading(false);
  };

  const deleteUser = async (id) => {
    setLoading(true);
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    setLoading(false);
  };

  return (
    <div className="App even-columns">
      <div className="container">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <br />
              <h2>Name: {user.name}</h2>
              <br />
              <h2>Age: {user.age}</h2>
              <br />
              <button
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
                disabled={loading}
              >
                Increase Age
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
                disabled={loading}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
      <div className="container">
        <h1>Create User</h1>
        <input
          type="text"
          placeholder="Name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age.."
          min={3}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={createUser} disabled={loading}>
          Create User
        </button>
      </div>
    </div>
  );
}

export default App;