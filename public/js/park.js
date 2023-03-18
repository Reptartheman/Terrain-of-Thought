const parkIcon = document.querySelectorAll('.park-image')

const newHandler = async (e) => {
    e.preventDefault();
    console.log(e.target);

    if ( something ) {
      const response = await fetch(`/api/journalRoute`, {
        method: 'GET',
      });
  
      if (response.ok) {
        document.location.replace('/journal/:id');
      } else {
        alert('');
      }
    }
  };
  

    // const park = document.e.target.value.trim();


for (i of parkIcon) {
  i.addEventListener('click', function() {
    console.log(this);
  });
}