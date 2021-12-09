import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import UploadButton from './UploadButton';
import { encode, decode } from '../steganography';
import { LadderLoading } from 'react-loadingg';

export default function App() {
  const [option, setOption] = useState('home');
  let [loading, setLoading] = useState(false);

  function handleClick(event) {
    const { name } = event.currentTarget;
    setLoading(true);
    if (name === 'home') {
      setTimeout(() => {
        setLoading(false);
        setOption('home');
      }, 2000);
      document.getElementById('encoded-image').style.display = 'none';
    } else if (name === 'encode') {
      setTimeout(() => {
        setLoading(false);
        setOption('encode');
      }, 2000);
    } else if (name === 'decode') {
      setTimeout(() => {
        setLoading(false);
        setOption('decode');
      }, 2000);
    }
  }

  return (
    <div className="content">
      <h1>
        IMAGE<span id="word"> STEGO</span>
      </h1>
      {!loading ? (
        <>
          {option === 'home' && (
            <Button
              style={{ margin: '1rem' }}
              name="encode"
              onClick={handleClick}
              variant="contained"
            >
              Encode
            </Button>
          )}
          {option === 'home' && (
            <Button
              style={{ margin: '1rem' }}
              name="decode"
              onClick={handleClick}
              variant="contained"
            >
              Decode
            </Button>
          )}
          {option === 'encode' && (
            <TextField
              variant="outlined"
              multiline
              type="text"
              id="secret"
              name="secret"
              placeholder="Enter secret message"
            />
          )}
          {option !== 'home' && <UploadButton />}
          {option === 'encode' && (
            <Button
              style={{ margin: '1rem' }}
              onClick={encode}
              variant="contained"
            >
              Encode
            </Button>
          )}
          {option === 'decode' && (
            <Button
              style={{ margin: '1rem' }}
              onClick={decode}
              variant="contained"
            >
              Decode
            </Button>
          )}
          {option !== 'home' && (
            <Button
              style={{ margin: '1rem' }}
              name="home"
              onClick={handleClick}
              variant="contained"
            >
              Return
            </Button>
          )}
          <img id="encoded-image" alt="encoded output"></img>

          <canvas id="canvas"></canvas>
        </>
      ) : (
        <LadderLoading color="#ffffff" size="large" />
      )}
    </div>
  );
}
