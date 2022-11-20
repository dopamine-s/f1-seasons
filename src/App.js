import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import MainMock from './mock-data/MainMock';

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<MainMock />}></Route>
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
