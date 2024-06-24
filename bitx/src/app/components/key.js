import React from 'react'

const Key = ({transaction}) => {

    const formatDateTime = (isoString) => {
        const date = new Date(isoString);
         const options = {
           //weekday: 'long',
         //  year: 'numeric',
         // month: 'long',
          // day: 'numeric',
          // hour: '2-digit',
          // minute: '2-digit',
           //second: '2-digit',
          //timeZoneName: 'short'
         };
         return date.toLocaleDateString('en-US', options) + ' ' + date.toLocaleTimeString('en-US', options);
       };

  return (
    <div>
       <p>{transaction.amount}</p>
            <p>{transaction.type}</p>
            <p>{formatDateTime(transaction.date)}</p>
    </div>
  )
}

export default Key
