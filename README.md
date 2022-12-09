# WasteNot Frontend


## Table of Contents
- [About](#about)
- [Pantry](#pantry)
- [Search](#search)

## About
Waste Not is a recipe website that lets you search by items you have in your pantry and fridge. This will help reduce food waste by showing people how to use up those random items in their pantry that they can't think of a use for. 





## Tech Stack
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![REACT](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![REACT-ROUTER](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactRouter&logoColor=white)
![TAILWIND](https://img.shields.io/badge/TailWind_CSS-06B6D4?style=for-the-badge&logo=tailWindCss&logoColor=white)
![AUTH0](https://img.shields.io/badge/AUTH0-EB5424?style=for-the-badge&logo=AUTH0&logoColor=white)


## Pantry
### How to get access to your personal Pantry list
![Alt Text](https://github.com/Blue-ocean-HR/blueocean-client/blob/main/pantry_list.gif)
  1. click "My Pantry" on the navigation bar
  2. to edit item's name click edit button next to the item.
  3. to only see certain category of your pantry list, select a category under "Category"
  
### adding items to your pantry
![Alt Text](https://github.com/Blue-ocean-HR/blueocean-client/blob/main/pantry_item.gif)
  1. click the "+" icon at the bottom
  2. type your ingreident name under system ingredient and choose from the selection given below
  3. if your ingredient is not found, select custom ingredient and type your ingredient name
  4. select the expiry date by clicking the calender icon next to "Expiry Date"
  5. select a catgory under "Category" 
  6. click "Add Ingredient" button to add your item to your pantry


## Search
### Searching the recipe database
![Alt Text](https://github.com/Blue-ocean-HR/blueocean-client/blob/main/Dec-09-2022%2013-15-51.gif)
1. Search Bar - Search the database for recipes with keywords. This will return all recipes that contain ingredients that match your searched keywords. Recipes will be sorted by the number of ingredients in the recipe that you have in your pantry. 
2. Filter by Pantry Ingredients - Filter the recipes using specific items from your pantry. Recipes will again be sorted by the number of ingredients in the recipe that you have in your pantry
3. Favorites - You can favorite a recipe by clicking on the heart icon. You can also filter by favorites by clicking the my favorites button.

![Alt Text](https://github.com/Blue-ocean-HR/blueocean-client/blob/main/login_waste-not.gif)

## Unsplash API
The database we used to pull recipes from did not have pictures. We used the unsplash API to search for relevant pictures based on the recipe title. This is done one every API call to the database. In the future, we will populate the database with more relevant pictures.

## Performance and Accessibility 
To improve perfomance speeds and decrease first contentful paint, all text fiels were gzipped. Any unnecessary libraries were also removed. This helped reduce the lighthouse performance from an average of 45 to an average of 92.

<img src="https://github.com/Blue-ocean-HR/blueocean-client/blob/main/lighthouse.png"></img>

Typography and contrast were checked using the Stark chrome extension to ensure accessibility for visually impaired users.

## Contributors
<a href="https://github.com/Blue-ocean-HR/blueocean-client/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Blue-ocean-HR/blueocean-client" />
</a>
