import {Provider} from "react-redux";
import 'typeface-roboto';

import {ProjectsOverview} from "../pages/ProjectsOverview/ProjectsOverview";
import {ToastProvider} from "../widgets";

import {store} from "./store/store.ts";

import './styles/index.scss'

function App() {

  return (
      <Provider store={store}>
        <ProjectsOverview/>
          <ToastProvider/>
      </Provider>
  )
}

export default App
