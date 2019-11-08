import React, { useState } from 'react';
import QRreader from 'react-qr-reader';

type QRstate = {
  QR: string;
}

export const CheckInView: React.FC = () => {
  const [QR, setQR] = useState('');

  const handleScan = (data: string) => {
    if (data) {
      setQR(data);
    }
  }

  const handleError = (err: any) => {
    console.error(err);
  }

  return (
    <>
      <div className="checkIn">
        <QrReader
            delay={300}
            onError={handleError(err)}
            onScan={handleScan(data)}
            style={{ width: '100%' }}
          />
        <p>{QR}</p>
      </div>
    </>
  )
}