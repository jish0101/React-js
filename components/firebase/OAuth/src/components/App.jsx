import { signInWithGoogle } from "../Firebase";
function App() {
  return (
    <div className="container">
      <button
        className="login-with-google-btn"
        onClick={signInWithGoogle}
        type="button"
      >
        Sign In With Google{" "}
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("dp")} alt="" srcset="" />
    </div>
  );
}

export default App;
