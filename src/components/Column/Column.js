import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';
import CardItem from '../CardItem/CardItem';
import CardForm from '../CardForm/CardForm';

const Column = ({ cards }) => {
  const [cardFormEdit, setCardFormEdit] = useState(false);
  return (
    <Card style={{ backgroundColor: '#f6f5f5' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Went well
        </Typography>

        {cards.map((card) => <CardItem key={card.id} card={card} />)}

      </CardContent>
      <CardActions>
        { cardFormEdit
          ? (
            <CardForm handleCancelButton={setCardFormEdit} />
          )
          : (
            <Button
              onClick={() => setCardFormEdit(!cardFormEdit)}
              style={{ textTransform: 'capitalize' }}
              size="small"
              startIcon={<AddIcon />}
            >
              Add card
            </Button>
          )}
      </CardActions>
    </Card>
  );
};

Column.propTypes = {
  // FIXME Find a way to resolve this thing
  // eslint-disable-next-line react/forbid-prop-types
  cards: PropTypes.array.isRequired
};

export default Column;
