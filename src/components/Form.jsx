import React, { Component } from 'react';
import propTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      onInputChange,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <label htmlFor="name-input">
          Nome
          <input
            id="name-input"
            type="text"
            data-testid="name-input"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            name="description-input"
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="acceleration">
          Aceleração
          <input
            type="number"
            name="acceleration"
            id="acceleration"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="max-speed">
          Velocidade Máxima
          <input
            type="number"
            name="max-speed"
            id="max-speed"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }

          />
        </label>
        <label htmlFor="power">
          Potência(cv)
          <input
            type="number"
            name="power"
            id="power"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            name="rare-input"
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Trunfo Super Carro
          <input
            type="checkbox"
            name="trunfo-input"
            id="trunfo-input"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="save-button">
          <input
            type="button"
            id="save-button"
            value="Salvar"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  onInputChange: propTypes.func.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
