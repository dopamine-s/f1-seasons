import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RootLayout from './components/RootLayout/RootLayout';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Round from './pages/Round';
import Seasons from './pages/Seasons';

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Seasons />} />
          <Route path=":seasonId" element={<Seasons />} />
          <Route path=":seasonId/:roundId" element={<Round />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
