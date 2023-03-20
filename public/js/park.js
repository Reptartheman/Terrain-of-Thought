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
    // const park = document.e.target.value.trim();
    for (i of parkIcon) {
      i.addEventListener('click', newHandler);
    }







// const parkIcon = document.querySelectorAll('.park-image')

// const newHandler = async (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     if (e.target.hasAttribute('id')) {
//       const id = e.target.getAttribute('id');

//       console.log(id);
  
//       const response = await fetch(`/journalRoute`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace(`/journal`);
//       } else {
//         alert('');
//       }
//     }
//   };
  

// for (i of parkIcon) {
//   i.addEventListener('click', newHandler);
// }