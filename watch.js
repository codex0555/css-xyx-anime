
        // JavaScript code to change container based on screen width
        window.addEventListener('resize', function () {
            const container = document.querySelector('.container');
            const isSmallScreen = window.innerWidth < 745;

            // Add or remove the Bootstrap classes based on the condition
            if (isSmallScreen) {
                container.classList.remove('container');
                container.classList.add('container-fluid');
            } else {
            }
        });

        // Trigger the resize event initially to apply the class on page load
        window.dispatchEvent(new Event('resize'));

        function reloadIframe() {
        // Get the iframe by ID
        var iframe = document.getElementById('myIframe');
        
        // Reload the iframe
        iframe.contentWindow.location.reload(true);
    }
