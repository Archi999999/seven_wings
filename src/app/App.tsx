import {Provider} from "react-redux";

import {ProjectsOverview} from "../pages/ProjectsOverview/ProjectsOverview";

import 'typeface-roboto';

import {store} from "./store/store.ts";

import './styles/index.scss'

function App() {

  return (
      <Provider store={store}>
        <ProjectsOverview/>
      </Provider>
  )
}

export default App
