# Coding Note-Taking App

(my first project in javascript and using GitHub)

This app is designed to help you take notes while programming. 
You can use it to jot down ideas and write code snippets and reminders.

## Project Objectives

- Create a functional note-taking application using HTML, CSS, and JavaScript.
- Implement features to add, delete, and clear notes.
- Ensure the app is user-friendly and responsive.

# Installation
Clone the repository: (I used vs. code to do the project)  
  `sh git clone https://github.com/snawabi1/coding-note-taking-app.git

OR navigate to the project directory 
  `sh cd coding-note-taking-app
## Key Features

- **Add Notes:** Users can add new notes with title and content.
- **Delete Notes:** Users can delete individual notes.
- **Clear Input Fields:** Users can clear the input fields
  after adding a note.

## Development Process

- **Planning:** Defined project objectives and requirements.
- **Research and Preparation:** Reviewed course materials and similar projects.
- **Development:** Wrote the code and implemented features with regular testing and debugging.
- **Documentation:** Created clear and concise documentation.

## Challenges and Solutions

- **Challenge 1:** The add button wasn't functioning correctly.

  - **Solution:** Initially, the event listener for the add button was not correctly set up. I realized that I was using `textContent.textContent` instead of `textContent`when setting the title and content. Correcting this typo resolved this issue, and the add button started working as expected.

- **Challenge 2:** The title was not saved to the note.

  - **Solution:** Discovered that the title was not correctly assigned to the note due to a missing `textContent` assignment. Fixed the issue by ensuring the title input value was properly assigned to the note title's `textContent.`

- **Challenge 3:** Styling issues on different screen sizes.

  -**Solution:** Added responsive CSS to ensure the app looks good on both large and small screens. Used media queries to adjust the layout and styling on the screen size.

# How To use

1. **Open the App**:

   - Use a local server to run the app. For example, with `npx http-server`, navigate to the project directory and run: ```sh
     npx http-server

   ```
    -Access the app by opening  `http://127.0.01:8080` in your webrowser.

   ```

2. **Add Notes**

   - Enter a title and content for your note.
   - Click the "Add Note" button to save the note.

3. **Delete Notes**:

   - Click the "Delete" button to reset the input fields.

4. **Clear Input Fields**:

   - Click the "Clear button to reset the input fields.

### Installation

Clone the repository: (i used vs code to do project) ```sh git clone https://github.com/snawabi1/coding-note-taking-app.git

or navigate to project directory ```sh cd coding-note-taking-app

Start the HTTP server:
npx http-server

#### Future Improvements

    -Search Functionality: Add a search bar to filter based on title or content
    -Category Tags: Allow users to add categories to notes and filter by category
    -Pin Important Notes: Add the ability to pin important notes at the top.
    -Voice Notes: Add fuctionality to create voice notes.

##### Final Report

- Project Overview: This project is a note-taking application designed to help programmers jot down ideas, code snippets and reminders. It includes features to add, delete, and clear notes.

- Development Timeline: The project was developed over approximately 20 hours, including planning, research, development, testing and documentation.

- Lessons Learned:

Upon completion of this project and the course, 
I have achieved the following learning outcomes:

Write algorithms to solve common client-side scriping problems: Developed a Javascript function to add, delete, and manage notes effienctly.

Design and implement clientside scripts using JavaScript: Used JavaScript to add dynamic behavior to the note-taking app.

Use the Document Object Model (DOM) to manipulate the contents of web pages: Manipulated DOM elements to display and manage notes.

Design and implement scripts to vaidate web forms: Implemented basic validation to ensure notes are not empty before adding them.

Understand Object-Oriented Programming, especially the JavaScript prototype-based object model: Applied basic OOP principals by organizing code into functions and understanding prototypes.

Understanding the basics of Functional Programming, including higher-order functions and closures: Utilized higher-order functions for event handling and local storage.

###### Submission

- This project is submitted as part of the course requirements for Computer Science 81 JavaScript Programming at Santa Monica College.

- Instructor: Vicky Tanya Seno

- Date: July 27, 2024
