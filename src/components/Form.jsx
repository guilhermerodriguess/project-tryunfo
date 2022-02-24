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
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      onKeyUp,
      trunfo,
    } = this.props;

    return (
      <section>
        <h2>
          Adicionar nova carta
        </h2>
        <label htmlFor="name-input">
          Nome
          <input
            id="name-input"
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            onKeyUp={ onKeyUp }
            onKeyDown={ trunfo }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            name="cardDescription"
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            onKeyUp={ onKeyUp }
          />
        </label>
        <label htmlFor="acceleration">
          Aceleração
          <input
            type="number"
            name="cardAttr1"
            id="acceleration"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            onClick={ onKeyUp }
            onKeyUp={ onKeyUp }
          />
        </label>
        <label htmlFor="max-speed">
          Velocidade Máxima
          <input
            type="number"
            name="cardAttr2"
            id="max-speed"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            onClick={ onKeyUp }
            onKeyUp={ onKeyUp }

          />
        </label>
        <label htmlFor="power">
          Potência(cv)
          <input
            type="number"
            name="cardAttr3"
            id="power"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            onClick={ onKeyUp }
            onKeyUp={ onKeyUp }
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            onKeyUp={ onKeyUp }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            name="cardRare"
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            onClick={ onKeyUp }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
          <label htmlFor="trunfo-input">
            Trunfo Super Carro ?
            <input
              type="checkbox"
              name="cardTrunfo"
              id="trunfo-input"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>)}
        <label htmlFor="save-button">
          <input
            name="isSaveButtonDisabled"
            type="button"
            id="save-button"
            value="Salvar"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
  onKeyUp: propTypes.func.isRequired,
  trunfo: propTypes.func.isRequired,
};
export default Form;
