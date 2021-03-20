import React from 'react';

import { Card } from '../components';

const Detail = () => (
  <div className="main">
    <h2 className="main__title">Catalog</h2>
    <div className="main__catalog">
      {Array(12).fill(0).map(() => <Card />)}
    </div>
  </div>
);

export default Detail;
