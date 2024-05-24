# PRGX - Frontend Technical Test

# Posts App

Welcome to the Posts App, an application designed to help you manage users posts.

<img src="https://github.com/jvalentinavelez/test-posts-app/assets/55290812/f77a9f9c-5262-478c-af92-496667351a3c" width="700">

## Features

You can perform actions on a post. Each action will display a modal, which will either send the information when Confirm is pressed or cancel the action when Cancel is pressed.

- **Add Post:** In the table header, you'll find a button to add a post. By default, the userId will be 1. You can write a title and a body. A new record will be generated with a new id.

<img src="https://github.com/jvalentinavelez/test-posts-app/assets/55290812/db81bbc0-9061-46ef-a0ab-98f3a625a58c" width="500">
<img src="https://github.com/jvalentinavelez/test-posts-app/assets/55290812/f3f3e9b5-ade2-42d5-8468-f7b03c11aec3" width="500">

- **Edit Post:** With the pencil icon, you can edit the content of the user's post. You can edit the title and the body fields.


<img src="https://github.com/jvalentinavelez/test-posts-app/assets/55290812/ed5f89b4-0777-478c-82c9-b197e8c21fdd" width="500">


- **Delete Post:** With the trash icon, you can delete the content of the user's post.

<img src="https://github.com/jvalentinavelez/test-posts-app/assets/55290812/5581346d-b550-4bb8-a812-410005156702" width="500">

Additionally, you can search an specific post, filter by userId and Id columns, display the columns of interest, and view the number of pages at the bottom and customize it to your liking.

## Public URL

## Installation

Follow the next steps to set up the project

1. Clone the repository

2. Install the project dependencies with
   ```sh
   npm install
   ```
3. Install mui v5 and it's icon pack and Install MUI-Datatables

   ```sh
   npm --save install @mui/material @emotion/react @emotion/styled @mui/icons-material
   npm install mui-datatables --save

   ```

4. Install prop-types for type checking

   ```sh
   npm install --save prop-types
   ```

## Testing with Jest + React Testing Library

1. Install React testing library dependencies and Jest dependecies

   ```sh
   npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react
   npm install --save-dev @testing-library/react @types/jest jest-environment-jsdom
   ```

2. Configure Jest by adding files jest.config.cjs and jest.setup.cjs

3. Integrate Jest with ESLint

   ```sh
   npm install --save-dev eslint-plugin-jest
   ```

4. Add testing scripts

5. For a more detailed explanation: https://dev.to/ivadyhabimana/setup-jest-and-react-testing-library-in-a-react-project-a-step-by-step-guide-1mf0
