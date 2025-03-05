import {Provider} from "react-redux";

import {ProjectsOverview} from "../pages/ProjectsOverview/ProjectsOverview";

import {store} from "./store/store.ts";

import 'typeface-roboto';

import './styles/index.scss'

function App() {

  return (
      <Provider store={store}>
        <ProjectsOverview/>
      </Provider>
  )
}

export default App
