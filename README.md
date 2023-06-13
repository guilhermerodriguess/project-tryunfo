# Project Triunfo

Hello! Welcome to my Tryunfo project repository! In this project, I developed a Super Trump style game, where you can create a deck with the theme of your choice, add and remove cards from the deck, view all the added cards and play with the created deck.

## Requirements Developed

1. I created the form that is used to add cards to the deck. The form has fields to enter the name, image, description, category and rarity of the card.

2. I added the necessary props to the form component. The Form component receives props to control the values of form fields, as well as a function to handle changes to inputs.

3. I created and rendered the Card component with the necessary props. The Card component receives props to display card information, such as name, image, description, category and rarity.

4. I created a preview of the letter being created by the form. The Form and Card components share the same state, allowing information entered into form fields to be displayed in real time in the card preview.

5. I validated the Save button on the form. The button is only enabled if all the information in the form is filled out correctly.

6. I created the Save button function, which adds a new card to the deck. It is now possible to create a deck with multiple cards.

7. Created Super Trump validation, ensuring that only one Super Trump card can be added to the deck.

8. Display the list of letters that are saved in the state. It is now possible to view all cards added to the deck, and the list is automatically updated when a new card is added.

9. Added a button on each card in the deck to remove it. It is now possible to remove a card from the deck when desired.

## Bonus requirements

In addition to the mandatory requirements, I added some bonus requirements to the project:

10. I created the filter by card name, allowing you to filter cards by the name typed in a text field.

11. I created the filter by card rarity, allowing you to filter cards by the rarity selected in a select field.

12. I created the Super Asset filter, allowing you to filter cards by the Super Asset criteria selected in a checkbox field.

## Non-evaluative requirements

In addition to the mandatory and bonus requirements, I also added some extra functionality to the project:

- Game Rules: I implemented a feature that allows playing with created cards. When starting the game, the cards are shuffled and a card is displayed. It is possible to advance to the next card and, when all the cards are displayed, it is possible to reshuffle and start the game again.

## How to Run the Project

To run the project on your local machine, follow the

  steps below:

1. Clone this repository to your computer.

2. Navigate to the project directory: `cd project-tryunfo`.

3. Install the project's dependencies: `npm install`.

4. Run the project: `npm start`.

The application will open in your default browser, and you will be able to use all the features of the Tryunfo game.

Thanks for checking out my Tryunfo project. Have fun creating and playing with your own deck! If you have any questions or need help, I'm here to help.
