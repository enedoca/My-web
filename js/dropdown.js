        // Get all dropdown buttons
        const dropdownButtons = document.querySelectorAll('.dropdown > button');

        dropdownButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                // Prevent the default link behavior if it's an anchor
                // event.preventDefault();

                // Close other open dropdowns
                dropdownButtons.forEach(otherButton => {
                    if (otherButton !== button) {
                        otherButton.nextElementSibling.classList.add('hidden');
                        const otherSvg = otherButton.querySelector('svg');
                        if (otherSvg) {
                           otherSvg.style.transform = 'rotate(0deg)';
                        }
                    }
                });

                // Toggle the current dropdown
                const dropdownContent = this.nextElementSibling;
                dropdownContent.classList.toggle('hidden');

                // Rotate arrow
                const svg = this.querySelector('svg');
                if (svg) {
                    if (dropdownContent.classList.contains('hidden')) {
                        svg.style.transform = 'rotate(0deg)';
                    } else {
                        svg.style.transform = 'rotate(180deg)';
                    }
                }
            });
        });

        // Close dropdown when clicking outside
        window.addEventListener('click', function(event) {
            dropdownButtons.forEach(button => {
                const dropdownContent = button.nextElementSibling;
                const svg = button.querySelector('svg');
                // If the click is outside the button and its dropdown content
                if (!button.contains(event.target) && !dropdownContent.contains(event.target)) {
                    dropdownContent.classList.add('hidden');
                    if (svg) {
                        svg.style.transform = 'rotate(0deg)';
                    }
                }
            });
        });