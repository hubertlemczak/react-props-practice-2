function Message({ message, user }) {
  return (
    <li className={`message ${message.user === user ? 'mine' : 'other'}`}>
      {message.text}
    </li>
  );
}

export default Message;
