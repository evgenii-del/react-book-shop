import React from 'react';

import { Card, Header } from '../components';

const Detail = () => (
  <>
    <Header />
    <div className="main">
      <h2 className="main__title">Catalog</h2>
      <div className="main__catalog">
        {Array(12).fill(0).map(() => <Card />)}
      </div>
    </div>
  </>
);

export default Detail;
