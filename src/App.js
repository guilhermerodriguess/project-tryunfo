import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.hasTrunfo = this.hasTrunfo.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onKeyUp() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const acceleration = parseInt(cardAttr1, 10);
    const maxSpeed = parseInt(cardAttr2, 10);
    const power = parseInt(cardAttr3, 10);
    const sum = acceleration + maxSpeed + power;
    const maxPoints = 210;
    const maxPoint = 90;
    const minPoint = 0;
    let disable = false;

    if (!cardName
      || !cardDescription
      || !cardImage
      || !cardRare) disable = true;
    if (sum > maxPoints) disable = true;
    if (acceleration > maxPoint
      || maxSpeed > maxPoint
      || power > maxPoint) disable = true;
    if (acceleration < minPoint
      || maxSpeed < minPoint
      || power < minPoint) disable = true;
    this.setState({
      isSaveButtonDisabled: disable,
    });
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    this.setState((prevState) => ({
      cards: [...prevState.cards, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }));

    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    }));
  }

  hasTrunfo() {
    const { cards } = this.state;
    return cards.some(({ cardTrunfo }) => cardTrunfo);
  }

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
      isSaveButtonDisabled,
      cards,
    } = this.state;
    return (

      <main>
        <section className="Card1">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ this.hasTrunfo() }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            onKeyUp={ this.onKeyUp }
            cards={ cards }
          />
          <Card
            className="add-card"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <section className="showAllCards">
          {cards.map((card) => (<Card
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />))}
        </section>
      </main>
    );
  }
}

export default App;
