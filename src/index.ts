function HelpButton(url: string) {
  if (typeof Window === 'undefined') return;
  var button = document.createElement('button');
  button.innerHTML = '? Help';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = '998';

  // Style the button as needed
  button.style.padding = '10px 25px';
  button.style.background = '#808080';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '20px'; // Adjust the border-radius to match the image
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'; // Add a subtle shadow
  button.style.outline = 'none';
  button.style.transition = 'transform 0.15s ease-in-out'; // Add a transition for a press effect

  // Hover effect
  button.addEventListener('mouseenter', function () {
    button.style.transform = 'scale(1.1)'; // Scale up the button a bit
    button.style.opacity = '0.85'; // Slightly see-through
    button.style.boxShadow = '0 6px 12px rgba(50, 50, 93, 0.25), 0 3px 6px rgba(0, 0, 0, 0.12)'; // Increase the shadow for a "lifted" effect
  });

  button.addEventListener('mouseleave', function () {
    button.style.transform = 'scale(1)'; // Reset the scale
    button.style.opacity = '1'; // Solid color
    button.style.boxShadow = '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'; // Reset the shadow
  });

  // Add an active state style for when the button is clicked
  button.addEventListener('mousedown', function () {
    this.style.transform = 'scale(0.95)';
  });
  button.addEventListener('mouseup', function () {
    this.style.transform = 'scale(1)';
  });
  button.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });

  // Create modal element
  var modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '999';
  modal.style.visibility = 'hidden'; // Hide modal initially

  // Create modal content container
  var modalContent = document.createElement('div');
  modalContent.style.width = '100%';
  modalContent.style.height = '100%';
  modalContent.style.background = 'white';
  modalContent.style.paddingTop = '60px';
  modalContent.style.borderRadius = '10px';

  // Create close button element
  var closeButton = document.createElement('button');
  closeButton.innerHTML = '&times;'; // HTML entity for 'X'
  closeButton.style.position = 'absolute';
  closeButton.style.top = '-5px';
  closeButton.style.right = '15px';
  closeButton.style.zIndex = '1001';
  closeButton.style.background = 'transparent';
  closeButton.style.color = 'black';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '44px'; // Make 'X' larger
  closeButton.style.cursor = 'pointer';
  closeButton.style.borderRadius = '5px';
  closeButton.style.lineHeight = '1';

  // Style the close button on hover
  closeButton.onmouseover = function () {
    closeButton.style.background = 'rgba(0,0,0,0.1)'; // Light background on hover
  };
  closeButton.onmouseleave = function () {
    closeButton.style.background = 'transparent'; // Transparent background when not hovered
  };

  // Add click event listener to close button to hide modal
  closeButton.addEventListener('click', hideModal);

  // Prevent modal from closing when clicking inside modalContent
  modalContent.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  // Create iframe
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', url); // Set the src to your desired URL
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';

  // Append iframe to modal content container
  modalContent.appendChild(iframe);
  // Append modal content container to modal
  modal.appendChild(modalContent);

  // Function to show modal
  function showModal() {
    modal.style.visibility = 'visible';
  }

  // Function to hide modal
  function hideModal() {
    modal.style.visibility = 'hidden';
  }

  // Add click event listener to button to show modal
  button.addEventListener('click', showModal);

  // Append button to body
  document.body.appendChild(button);
  // Append modal to body (hidden initially)
  document.body.appendChild(modal);
  modalContent.appendChild(closeButton);
}

export default HelpButton;
