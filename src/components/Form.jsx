import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <>
        <label htmlFor="name-input">
          Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            name="description-input"
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="acceleration">
          Aceleração
          <input
            type="number"
            name="acceleration"
            id="acceleration"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="max-speed">
          Velocidade Máxima
          <input
            type="number"
            name="max-speed"
            id="max-speed"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="power">
          Potência(cv)
          <input
            type="number"
            name="power"
            id="power"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="name-input">
          Imagem
          <input type="file" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select name="rare-input" id="rare-input" data-testid="rare-input">
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
          />
        </label>
        <label htmlFor="save-button">
          <input
            type="button"
            id="save-button"
            value="Salvar"
            data-testid="save-button"
          />
        </label>
      </>
    );
  }
}

export default Form;
