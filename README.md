Project Pitch
The Basic Story
The application will be a Rick and Morty character viewer. Users can browse through characters, view their details, and filter them by status (alive, dead, unknown).

Core Features of MVP
Fetch and display a list of characters from the Rick and Morty API.
Display detailed information about a character when selected.
Filter characters based on their status.

Index.HTML explanation:
This code represents an HTML document, which is the standard language for creating and displaying web pages in a browser. The document starts with a <!DOCTYPE html> declaration to define the version of HTML being used. Inside the <html> tag, the lang="en" attribute specifies that the language of the document is English. The <head> section contains meta-information about the document, such as the character encoding set to UTF-8, ensuring that all characters are correctly displayed, and the viewport settings, which control the page's dimensions and scaling on different devices, making it responsive. The <title> tag sets the title of the webpage as "Rick and Morty Character Viewer," which appears on the browser tab. Within the <style> tags, some CSS (Cascading Style Sheets) is included to style the elements on the page. For example, the body is styled to use the Arial font, and the #character-list is set to display its child elements in a flexible layout that wraps onto the next line if there isn't enough space. The .character class adds a border, margin, padding, and width to each character's container, and ensures that images inside these containers do not exceed their width. The #character-details is given a top margin to space it from the content above.

The <body> section contains the main content of the webpage. An <h1> tag displays a heading with the text "Rick and Morty Character Viewer". An input field of type text with the id search-input is provided, allowing users to filter characters by their status. Two empty <div> elements, #character-list and #character-details, are placeholders where JavaScript will dynamically insert content: the list of characters and the details of a selected character, respectively. Finally, the <script> tag at the bottom of the body links to an external JavaScript file (index.js) that will add functionality to the page, such as fetching data from an API and handling user interactions. This structure and layout make the page both functional and aesthetically pleasing while providing interactivity through embedded and external scripts.

Index.JS explanation:





