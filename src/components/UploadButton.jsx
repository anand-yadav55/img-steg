import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { loadImage } from '../steganography';
import { SemipolarLoading } from 'react-loadingg';

export default function UploadButton() {
  let [loading, setLoading] = useState(false);
  let [uploadButtonText, setuploadButtonText] = useState('Upload Image');
  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
    if (document.getElementById('upload-photo').value != '') {
      setuploadButtonText('Reupload Image');
    }
  };
  return (
    <label htmlFor="upload-photo">
      {!loading ? (
        <>
          <input
            style={{ display: 'none' }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={(e) => {
              loadImage(e);
              handleUpload(e);
            }}
          />
          <div>
            <Button
              style={{ margin: '1rem' }}
              variant="contained"
              component="span"
            >
              {uploadButtonText}
            </Button>
          </div>
        </>
      ) : (
        <SemipolarLoading color="#ffffff" size="large" />
      )}
    </label>
  );
}
