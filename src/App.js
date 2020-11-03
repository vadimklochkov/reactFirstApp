import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/Reg">Регистрация</Link>
            </li>
            <li>
              <Link to="/Log">Авторизация</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/Reg">
              <Reg />
            </Route>
            <Route path="/Log">
              <Log />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Главная страница</h2>;
}

function Reg() {
  return <div>
    <h2>Регистрация</h2>
    <h3>Введите Логин</h3>
    <input type="text" name="login"/>
    <h3>Введите пароль</h3>
    <input type="password" name="password"/>
    <h3>Введите Имя</h3>
    <input type="text" name="name"/>
    <h3>Введите Фамилию</h3>
    <input type="text" name="sername"/>
    <h3>Введите EMail</h3>
    <input type="email" name="email"/>
    <h2><button>Зарегестрироватся</button></h2>
  </div>;
}

function Log() {
  let match = useRouteMatch();

  return (
      <div>
        <h2>Авторизация</h2>

        <div>
          <h3>Введите Логин</h3>
          <input type="text" name="login"/>
          <h3>Введите пароль</h3>
          <input type="password" name="password"/>
          <h2><button>Авторизоватся</button></h2>
        </div>
      </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
