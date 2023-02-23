import { useState } from 'react';

function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
    });
    setName('');
    setEmail('');
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Popup Form</button>
      {isOpen && (
        <div className="overlay">
          <div className="popup">
            <h2>Popup Form</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            <button onClick={handleClose}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupForm;