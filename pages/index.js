import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
const { createHash } = require("crypto");

export const data = [
  {
    name: "Ilham",
    age: 21,
  },
  {
    name: "Nisa",
    age: 19,
  },
  {
    name: "Trisia",
    age: 27,
  },
];

export default function Home() {
  const [biodata, setBiodata] = React.useState(null);
  // fetch
  const [fetchedData, setFetchedData] = React.useState(null);
  // hash
  const [name, setName] = React.useState(null);
  const [gender, setGender] = React.useState(null);
  const [hashed, setHashed] = React.useState(null);
  // auth
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState(null);

  function hash() {
    const string = Date.now() + name + gender + "ifabula";
    setHashed(createHash("sha256").update(string).digest("hex"));
    console.log(createHash("sha256").update(string).digest("hex"));
  }

  React.useEffect(() => {
    setBiodata(data);
  }, [biodata]);

  function login() {
    localStorage.setItem("username", username);
    setUsername(localStorage.getItem("username"));
    setLoggedIn(true);
  }

  function logout() {
    localStorage.removeItem("username", username);
    setLoggedIn(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Kodegiri Test</title>
        <meta name="description" content="Generated by Kodegiri Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Array of Object Data 1-2</h1>
          <ul>
            {biodata?.map((data, index) => (
              <div key={index}>
                <li>
                  {data.name}, {data.age}
                </li>
                <button
                  onClick={() =>
                    setBiodata((old) => [
                      ...old,
                      (biodata[index].age = data.age + 1),
                    ])
                  }
                >
                  Add age
                </button>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h1 className={styles.title}>Fetch Data 3-5</h1>
          <button
            onClick={() =>
              fetch(`http://jsonplaceholder.typicode.com/posts`)
                .then((e) => e.json())
                .then((res) => setFetchedData(res))
            }
          >
            Fetch API
          </button>
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Action</th>
              </tr>
              {fetchedData?.map((data, index) =>
                index > 9 ? null : (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                    <td>
                      <button
                        onClick={() => {
                          console.log(index);
                          setFetchedData(
                            fetchedData.filter(
                              (item, spec_index) => index !== spec_index
                            )
                          );
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setFetchedData((old) => [...old, delete data.body]);
                          console.log(data.body);
                        }}
                      >
                        Delete Body
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div>
          <h1 className={styles.title}>Hash SHA256 7</h1>
          <div>
            <label>
              Date:
              <input value={Date.now()} readOnly />
            </label>
            <label>
              Name:
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Gender:
              <input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <button onClick={hash} style={{ marginLeft: 10 }}>
              HASH
            </button>
          </div>
          {hashed && <p>HASHED: {hashed}</p>}
        </div>
        <div>
          <h1 className={styles.title}>Auth Page 9 </h1>
          {loggedIn ? (
            <div>
              <p>Welcome, {username}</p>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div>
              <label>
                Username{" "}
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type={"text"}
                />
              </label>
              <label>
                Password <input type={"password"} />
              </label>
              <button onClick={login}>Login</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
