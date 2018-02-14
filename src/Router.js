import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const Mover = ({ to, onMoved }) => {
  if (to) {
    onMoved();
    return <Redirect to={to} />;
  }
  return null;
};

export { BrowserRouter as Router, Route, Mover };
