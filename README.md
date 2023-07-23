<h1 align="center" id="title">Warehouse Admin Panel</h1>



<p align="center"><img src="https://socialify.git.ci/er-rahulkr95/warehouse/image?language=1&logo=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F2300px-React-icon.svg.png&name=1&owner=1&pattern=Solid&theme=Auto" alt="warehouse" width="640" height="320" /></p>


# Warehouse Admin Panel

An interface for admins to see, search, filter, modify and update Ware House List.

## <h2>🚀 Demo</h2>

[ https://rahulkumar95-warehouse.netlify.app]( https://rahulkumar95-warehouse.netlify.app)

## Tech Stack

### Built With
Technologies used in building the project:
- React
- Javascript
- HTML
- CSS
- React Router
- Redux ToolKit + React-Redux
- React Toastify


## Requirements

The Project consists of two pages.

**Page 1:**
Give a list of warehouses in the most optimal and modular way possible.

The listing page should have these feature(you may add more)
-> search the warehouses by warehouse name
-> filter warehouse based on
	-> city
	-> cluster
	-> space available limit

**Page 2:**
Click on an item should redirect to the warehouse details page.

The details page should have edit functionality to edit the warehouse information such as cluster, warehouse name, city, space available, and warehouse live status.



## Features

- An interface for admins to see, search, filter, modify and update Ware House List.

**Home Page Features**

- Tabular layout to list warehouse.

- Admin can filter the list by city, cluster and space available.

- Admin can clear the filter by clicking on clear button.

- Search bar that can filter warehouses by warehouse name.

- Implemented debouncing for search operation for better user experience.

- Show a message when no result is found for searched term.

- Created a custom Pagination hook for Pagination. Each page contains 10 rows. Buttons at the bottom allow to jump to any page including special buttons for first page, previous page, next page and last page.

- Pagination update based on search/filtering. If there are 25 records for example that match a search query, then pagination buttons should only go till 3.

- Able to click on warehouse list, which will redirect to warehouse details page.

**Warehouse Details Page**

- Able to edit, save and update the details of warehouse.

- Able to go to back to home page by clicking on back button.

- A success message will be appear when updated the warehouse details successfully.



## Responsiveness

The Table view area and pagination section will adapt to responsiveness to different viewport width.

The Table header and body is made horizontally scrollable , whereas for vertical scrolling header is fixed and table body scrolls for mobile view.

Ware House details page is also responsive to different viewport width.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Run Locally

Clone the project

```bash
  git clone https://github.com/er-rahulkr95/warehouse.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
It will runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.


# Other available scripts

Builds the app for production to the `build` folder.

```bash
  npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Eject

```bash
  npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Feedback

If you have any feedback, please reach out to  er.rahulkr95@gmail.com

# License

MIT
