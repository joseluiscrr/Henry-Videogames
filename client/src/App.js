import { Route, Switch } from "react-router";
import Landing from "./components/Landing";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import Error from "./components/detail/Error";
import { ThemeProvider } from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
          <Route path='/home/:id' component={Detail} />
          <Route path='/create' component={Form} />
          <Route component={Error} />
        </Switch>
      </ThemeProvider>
    </>
  );
};

const theme = {
  glassBlack: '#8080801c',
  glassTransparent: 'rgba(255, 255, 255, 0.35)',
  glassBorder: '1px solid rgb(255 255 255 / 0%)',
  darkBorder: '1px solid rgb(255 255 255 / 50%)',
  glassBorderRadius: `10px`,
  hoverShadow: '0 5px 15px #ffffff78'
};

export default App;