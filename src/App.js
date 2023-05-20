import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React & Firebase CRUD App</p>
      </header>
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
        <div class="data-block">
          <div class="data-row">
            <label>Name:</label>My Name
          </div>
          <div class="data-row">
            <label>Age:</label>23
          </div>
          <div class="data-row">
            <label>City:</label>Denver
          </div>
          <div class="data-action">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
        </div>
        <div class="data-block">
          <div class="data-row">
            <label>Name:</label>My Name
          </div>
          <div class="data-row">
            <label>Age:</label>23
          </div>
          <div class="data-row">
            <label>City:</label>Denver
          </div>
          <div class="data-action">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
        </div>
        <div class="data-block">
          <div class="data-row">
            <label>Name:</label>My Name
          </div>
          <div class="data-row">
            <label>Age:</label>23
          </div>
          <div class="data-row">
            <label>City:</label>Denver
          </div>
          <div class="data-action">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
        </div>
        <div class="data-block">
          <div class="data-row">
            <label>Name:</label>My Name
          </div>
          <div class="data-row">
            <label>Age:</label>23
          </div>
          <div class="data-row">
            <label>City:</label>Denver
          </div>
          <div class="data-action">
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </div>
        </div>
      </div>
      <div class="footer">
        &copy; 2023{" An Opensource Project by "}
        <a href="https://github.com/mrdumog" target="_new">
          Ishwar Acharya
        </a>
      </div>
    </div>
  );
}

export default App;
