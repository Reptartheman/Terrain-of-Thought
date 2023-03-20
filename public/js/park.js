// When working, this function will generate the journal page for 
// the selected park when an image is clicked on the homepage.

const parkIcon = document.querySelectorAll('.park-image')

const newHandler = async function (e) {
    e.preventDefault();
    console.log(e.target);
    if ( parkIcon ) {
      const response = await fetch('/journal', {
        method: 'GET',
      }); 
      if (response.ok) {
        document.location.replace('/journal/');
      } else {
        alert('Error 404 Not Found');
      }
    }
  };

    for (i of parkIcon) {
      i.addEventListener('click', newHandler);
    }