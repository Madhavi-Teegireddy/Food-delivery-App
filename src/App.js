import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import {Header} from "./Components";


function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
