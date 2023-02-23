import { useState } from 'react';
import axios from 'axios';

const BookingFlightForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [flightnew, setFlightNew] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (name.trim() === '') {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (surname.trim() === '') {
      formErrors.surname = 'Surname is required';
      isValid = false;
    }

    if (email.trim() === '') {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (flightnew.trim() === '') {
      formErrors.flightnew = 'Flight number is required';
      isValid = false;
    }

    setErrors(formErrors);

    return isValid;
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFlightNewChange = (event) => {
    setFlightNew(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const formData = {
        name: name,
        surname: surname,
        email: email,
        flightnew: flightnew,
      };

      axios.post('your-api-url', formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });

      setName('');
      setSurname('');
      setEmail('');
      setFlightNew('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <br />
      <label>
        Surname:
        <input type="text" value={surname} onChange={handleSurnameChange} />
        {errors.surname && <span className="error">{errors.surname}</span>}
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <br />
      <label>
        Flight New:
        <input type="text" value={flightnew} onChange={handleFlightNewChange} />
        {errors.flightnew && <span className="error">{errors.flightnew}</span>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingFlightForm;
