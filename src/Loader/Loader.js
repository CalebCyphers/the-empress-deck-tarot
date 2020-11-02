import { render } from '@testing-library/react';
import React from 'react';
import { Alert } from 'react-bootstrap';

export default function Loader() {
  return(
    <Alert variant="light">Loading...</Alert>
  )
}