import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { useLocation } from 'react-router-dom';

function QRCodeGenerator() {
  const location = useLocation();
  const [qrValue, setQrValue] = useState('');

  useEffect(() => {
    setQrValue(window.location.href);
  }, [location]);

  return (
    <div className="absolute mt-8 ml-[-3%]">
      <QRCode value={qrValue} />
    </div>
  );
}

export default QRCodeGenerator;
