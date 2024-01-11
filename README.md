# Installation

1. Clone the project repository to your local machine:

        git clone <repository-url>

2. Navigate to the project directory:

        cd <project-directory>

3. Install project dependencies using npm:

        npm install

Ensure that you are using Node version 16. You can use NVM (Node Version Manager) to manage your Node.js versions. If NVM is installed, you can set the required Node version by running:

        nvm use

If you don't have Node version 16 installed, please install it before proceeding.

# Running the Project

To start the project, run the following command

        npm run start



# Pokedex Demo

A live demo of the sample project is available at:

https://upthereinteractive.com/pokedex/

Feel free to explore the demo without having to run the project locally.

If you would like to checkout how that is, please see the following video if that's any help

https://drive.google.com/file/d/1UEnVYpPQoTgv_0YG1rqz1DDCUyEzNp_A/view?pli=1


# Design Consideration

In terms of design, my aim was to replicate the aesthetic found in the Pokémon game. I strived to incorporate similar design elements into this sample project.

# Features Implemented

The following features have been implemented for the sample project:

**Pokemon Search:** Enables users to search for specific Pokemon.  

**Pokemon Details Board:** Displays basic data for the searched Pokemon.  

**Pokemon Stats Board:** Shows detailed stats for the searched Pokemon.  

**Pokemon Battle Board:** Displays attacks for the searched Pokemon.  

**Evolution Overlay:** Displays information about the evolutionary stages of the searched Pokemon. Allows users to select and load evolved forms.  

**Search History Overlay:** Provides a history of all previously searched Pokemon. Users can delete entries and select them to load again.


# Incomplete Feature

Given more time, the plan is to enhance the battle board feature by implementing a Pokémon battle. The idea is to have a randomly selected Pokémon battle against the one that was searched for.

The battle board feature is already setup to display two pokemons and would just have to add additional logic for the battle alone.

On top of that, I would have liked to update the Evolution/Search History layout and styling.


# Notes

When searching for Pokémon, please ensure that the names are entered in lowercase. The Pokémon API may throw an error if uppercase letters are used.

To mitigate this issue, input validation has been implemented to automatically convert the search input to lowercase. This helps prevent errors and ensures a smooth experience with the search feature.



