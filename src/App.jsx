import React from 'react';

import { Catalog } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Catalog />
    </div>
  );
}

export default App;
