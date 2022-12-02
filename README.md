# Development

### Link to Deployed Website
Website: https://luckyrabbit232.github.io/Development/

### Goal and Value of the Application
Problem: I am trying to solve this issue of planning the total cooking time given a set of recipes. It will then output the total price of goods, total time to prepare, then total time to cook.

Why it is important: There are many steps to cooking that people tend to over and underestimate. This may be budgeting, time to prepare in the afternoon, then time to cook before the guests arrive. This website makes it simple so that you can plan your time and budget accordingly, so that you can prepare your food for your guests (or yourself!) closer to the approximate time. 

How this website will help: I will be using UX designs to help the user easily navigate through the website to choose the recipes that he wants to cook. Then, the website will aggregate the costs together to form the grocery part of cooking. Then, it will aggregate the time it takes to prepare the food. Finally, the website will aggregate the time to cook the recipes chosen. Hopefully, the user will be able to smoothly plan his next cookout more efficiently. 

### Usability Principles Considered
My page utilizes filters and sorting through radio buttons. Users will be able to sort and filter any combination of recipes that they wish to see. This is done by selecting the radio buttons that fits their desires. Moreover, if they would like to revert their selection, there is an "all" button for them to press.

For the aggregator, I have allowed users to click on a button to add the recipes into a 'cart'. The cart will then aggregate the ingredient price, preperation time needed, and cooking time for the user to plan. If the user decides that he does not want a specific recipe, under the recipe, the button converts into a 'remove' button which enables the user to remove the recipe from the 'cart'.

Finally, the buttons are quite clearly visible and intuitive. The sorting and filtering buttons are placed all on the left, which helps the user identify that the left bar is meant to sort or filter the items. Text are accompanied which helps the user to know which category they are sorting or filtering. Meanwhile, the button is placed below the recipe, right under each characteristic of the recipe. This is so that once they have scanned through the descriptions, placing the button below the descriptions will enable them to understand that the next step is to choose whether the recipe should be in their 'cart'. Finally, the aggregation is placed on the right. This enables users to know where they want to see the total 'cart' once they are done selecting their recipes.

### Organization of Components
My components are organized very simply. It utilizes two components, a cart and a recipe. For the cart, the purpose is to keep track of the index of each item such that they can easily be referenced when finding the item's price, cooking time, and preperation time. The cart only takes in a prop which is the index at which the cart can be accessed for each of the variables listed in the cart component. Meanwhile, the recipe component has a state item and a state setCount. The item is just storing the object that is accessed. Meanwhile, the count is to identify if the button under each recipe has been clicked or not. This is to transition between the add and remove buttons. The props used are the events of clicking the button, which activates the two helper functions created in the recipe component.

I believe that I could also add a filter component, which would help me create a checkbox that keeps track of whether the checkbox are individually checked or not. 

### How Data is Passed Down Through Components
Data is passed down through the components by calling a map function which passes in the object as a prop for the component. Then, several parameters are filled out such as the add and remove functions that are used inside the component. Then, the data will be parsed individually then outputted onto the website as a recursive solution.

### How the User Triggers State Changes
The user will activate the state changes by pressing buttons. This activates indiviudal functions which leads to changes in the states. For example, pressing the add button leads to a change of state in the recipe component which changes the button from add to remove. Meanwhile, it also changes the state of the cart to add or remove cart items by incrementing or decrementing the count.
