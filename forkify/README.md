281. Project Overview and Planning(1)

User story: Description of the application functionality from the user's perspective 
Common format : As a [type of user], i want [an action] so that [a benfit]

1. As a user, i want to search for recipes, so that i can find new ideas for meals 
2. As a user, i want to be able to update the number of servings, so that i can cook a meal for different number of people 
3. As a user, i want to bookmark recipes, so that i can review them later 
4. As a user, i want to be able to create my own recipes, so that i have them all organized in the same app 
5. As a user, i want to be able to see my bookmarks and own recipes when i leave the app and come back later, so that i can clsoe the app safely after cooking 

Features

User story -> Features
1. Search for recipes -> Search functionality
2. Update the number of servings -> Change servings funcitnlity 
3. Bookmark recipes -> Bookmarking funcitonlity 
4. Create my own recipes -> User can upload own recipes / User can only see thier own recipes, not recipes from other users 
5. See my bookmarks and own recipes when i leave the app and comeback -> Store bookmark in LS 

User searches -> Load search results(ASYNC) -> Render search results 

User clicks pagination 

Page load with recipe ID -> Loade recipe -> Render recipe 


282. Loading a Recipe from API
npm i parcel & format the API style


283. Rendering the recipe 
recipeContainer.insertAdjacentHTML('afterbegin', markup);
add spinner and use map 
add polyfill for es6 (async stuff with core-js & regenerator-runtime


284. Listening for load and hashchange Events
#hash in url, it does change  

285. The MVC Architecture 
Structure: We organize our code
Maintainability : To easily change it in the future 
Expandability : To easily add new feature 

Components of any architecture 
Business Logic : Solve the actual business problem 
State : stores all the data about the application
HTTP libaray : Responsible for making and receiving AJAX request
Appliction logic(Router) : implementaiton of application itself. Handles navigation and UI events
Presentation (UI Layer) : All of visible part of application, esp display application state 


Model : Business logic, state, HTTP library          
Controller : Application logic like a bridge
View : Presentation logic

0. user clicks search result 
1. controlRecipes()
2. loadRecipe() in Model and renderSpinner() in View
3. export loadRecipe() 
4. recipe{} to render() which is UI


286. Refactoring for MVC
Create files for MVC


287. Helpers and Configuration