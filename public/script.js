document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch('/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert('Booking submitted successfully!');
        e.target.reset();
      } else {
        alert('Failed to submit booking.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the booking.');
    }
  });
  