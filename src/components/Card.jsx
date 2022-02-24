import React, { Component } from 'react';
import propTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      className,
    } = this.props;

    return (
      <section>
        <h2>
          {className === 'add-card' && 'Pré-visualização'}
        </h2>
        <h2 data-testid="name-card">
          { cardName }
        </h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h3 data-testid="description-card">
          { cardDescription }
        </h3>
        <h4 data-testid="attr1-card">
          Aceleração:
          { cardAttr1 }
        </h4>
        <h4 data-testid="attr2-card">
          Velocidade Máxima:
          { cardAttr2 }
        </h4>
        <h4 data-testid="attr3-card">
          Potência(cv):
          { cardAttr3 }
        </h4>
        <h4 data-testid="rare-card">
          Raridade:
          { cardRare }
        </h4>
        { cardTrunfo === true
          && <h2 name="cardTrunfo" data-testid="trunfo-card">Super Trunfo</h2>}
      </section>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  className: propTypes.string.isRequired,
};

export default Card;
