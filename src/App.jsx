import { useContext, useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider, ThemeContext } from './Context/ThmeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    document.body.classList.remove('dark', 'light')
    document.body.classList.add(theme)
  })

  return (
    <div className={`App`}>
      <button onClick={toggleTheme}>Switch Theme</button>
      <div className='formdiv' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='from_wrapper'>
          <h1>Enter Details</h1>
          <form className='form' onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%' }}>
            <input
              type='text'
              placeholder='Enter Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px 15px' }}
            />
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px 15px' }}
            />
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px 15px' }}
            />
            <button className='custom-btn'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
