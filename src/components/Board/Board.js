import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Column from '../Column/Column';
import * as cardsApi from '../../utils/cardsApi';

const Board = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    cardsApi.getCards().then((cardsResponse) => {
      setCards(cardsResponse);
      console.log(cardsResponse);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Column cards={cards} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Board;
