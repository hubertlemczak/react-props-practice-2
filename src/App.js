import { useState } from 'react';
import Chat from './components/Chat';
import Title from './components/Title';

import './styles.css';

export const App = () => {
  const [user, setUser] = useState('Nicolas');
  return (
    <div className="app">
      <Title user={user} />
      <Chat user={user} />
    </div>
  );
};
