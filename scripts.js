document.addEventListener('DOMContentLoaded', function() {
    // Fetch the JSON data from post.json
    fetch('post.json')
        .then(response => response.json())
        .then(data => {
            // Get the container elements
            const titlesContainer = document.getElementById('titles-container');
            const titleElement = document.getElementById('title');
            const downloadButton = document.getElementById('download-button');

            // Loop through the JSON data and display titles
            data.forEach((post, index) => {
                // Create a <p> element for each title
                const titleElement = document.createElement('p');
                titleElement.textContent = `Key-${index}: ${post.title}`;

                // Append the <p> element to the container
                titlesContainer.appendChild(titleElement);

                // Create a download button for each title
                const downloadUrlButton = document.createElement('button');
                downloadUrlButton.textContent = 'Download URL';

                // Add a click event listener to the download button
                downloadUrlButton.addEventListener('click', function() {
                    // Open the URL of the current title in a new tab when the button is clicked
                    window.open(post.url, '_blank');
                });

                // Append the download button to the container
                titlesContainer.appendChild(downloadUrlButton);
            });
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});
