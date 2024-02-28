import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';

function Error(): JSX.Element {
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <h1>Error</h1>
      <h3>Unexpected Error has occured</h3>
      <Link to="/">
        <Button>
          Go Home
        </Button>
      </Link>
    </div>
  );
}

export default Error;
