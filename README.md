<p align="center">
  <a href="https://dathuis-assigment.netlify.app/">
   <img src="https://www.vacaturevia.nl/wp-content/uploads/job-manager-uploads/company_logo_image/2018/03/dathuisLogo-ginny-1.png" alt="Logo" width="300" height="150">
<h2 align="center"> Dut Huis 	:bow_and_arrow: ⚔️</h2>
<p align="center"> :pushpin: Please  Cick on image to find the live demo 	:shield: :rocket:	:rocket: </p>
  </a>
  </br>
<h2> DatHuis frontend assignment </h2>

The goal of this assignment is to give you an idea of how it would be to work in the DatHuis stack and us an idea of the quality of code we can expect from you working at DatHuis. For the assignment we would like you to build a search as you type dropdown component. The user story is defined as follows:

## User Story

The user story we want to support can be summarized as follows:

### Step 1: The user sees an input

![Step 1](https://user-images.githubusercontent.com/23367061/71768244-b9b94680-2f14-11ea-8e06-e9b81165f544.png)

### Step 2: Mouse hovers over the input

![Step 2](https://user-images.githubusercontent.com/23367061/71768523-043bc280-2f17-11ea-9e26-b28e5633ff3a.png)

Once the user mouses over the input we want to give visual feedback that the user can interact with it.

### Step 3: User clicks on the input

![Step 3](https://user-images.githubusercontent.com/23367061/71768592-afe51280-2f17-11ea-9071-0008d0e0e9d4.png)

Once the user clicks on the input we move the placeholder label (‘Contact’ in the example) to the top to remind the user what this field is filling in. The dropdown already opens so the user can make a selection. Use the list of names in the provided JSON to be your list of names.

Make sure that the dropdown is always visible (so if there is not enough space below the input it should be moved so that it is still in place without the page changing size).

The placeholder should react as follows:

![Placeholder gif](https://user-images.githubusercontent.com/23367061/71768642-339eff00-2f18-11ea-85f2-2a8ac2dfb8c0.gif)

Note: The scrollbar was styled in the sketches, but you can ignore that. No special scrollbar styling.

### Step 4: User starts typing

![Step 4](https://user-images.githubusercontent.com/23367061/71768597-bb383e00-2f17-11ea-83bf-4344fd81cd4e.png)

Once the user starts typing the list in the dropdown will be filtered.

### Step 5: Selection made

![Step 5](https://user-images.githubusercontent.com/23367061/71768605-c68b6980-2f17-11ea-89d1-75c64ea82ea3.png)

Once a selection is made it is shown in the dropdown.

#### Technical points to keep in mind

- The component will be a part of multiple pages with multiple components. So make sure that it can be used by many components. That will mean that the component should accept a list of names and the currently selected name as a prop. Tip: place 2 underneath each other and see how that works.
- The dropdown should always be visible, so you will have to reposition it if the default position goes outside of the window. The page should not get bigger because of the dropdown.


## Scripts

To start the server you can run:

`npm run dev`

To run the tests:

`npm run test`

## Styled components

For our css we use [styled-components](https://www.styled-components.com/). We would like you to use this as well. It is already set up!


