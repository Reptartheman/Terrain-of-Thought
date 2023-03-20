// When working, this function will post and display the form information
// for each journal entry a user creates.

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const journalEntry = document.querySelector('#exampleFormControlTextarea1').value.trim();
    
  
    if (journalEntry) {
      const response = await fetch(`/api/journal`, {
        method: 'POST',
        body: JSON.stringify({ journalEntry}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('#journalhistory');
      } else {
        alert('Failed to create post.');
      }
    }
  };
  
  document
  .querySelector('#journalform')
  .addEventListener('submit', newFormHandler);