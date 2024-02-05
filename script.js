document.addEventListener('DOMContentLoaded', function() {
    // Fetch the JSON data from post.json
    fetch('post.json')
        .then(response => response.json())
        .then(data => {
            // Get the container elements
            const titlesContainer = document.getElementById('titles-container');
            const titleElement = document.getElementById('title');
            const downloadButton = document.getElementById('download-button');

            // Display the first title
            titleElement.textContent = data[0].title;

            // Add a click event listener to the download button
            downloadButton.addEventListener('click', function() {
                // Open the URL of the first title in a new tab when the button is clicked
                window.open(data[0].url, '_blank');
            });
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});
