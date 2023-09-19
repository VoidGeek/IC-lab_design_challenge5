import React, { useState } from 'react';

const cardStyle = {
  maxWidth: '18rem',
  marginBottom: '1rem',
};

const buttonStyle = {
  width: '100%',
};

const infoTextStyle = {
  whiteSpace: 'pre-wrap',
};

const Card = () => {
  const [info, setInfo] = useState('');

  const handleClick1 = () => {
    setInfo(
      "MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs."
    );
  };

  const handleClick2 = () => {
    setInfo(
      "Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to: Write handlers for requests with different HTTP verbs at different URL paths (routes)."
    );
  };

  const handleClick3 = () => {
    setInfo(
      "The React.js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript."
    );
  };

  const handleClick4 = () => {
    setInfo(
      "In a nutshell, Node.js is a popular programming environment that can be used for building high-scale applications that need to support multiple concurrent requests. Single-threaded non-blocking I/O makes it an excellent choice for both real-time and data streaming applications, too."
    );
  };

  return (
    <div className='card-container'>
      <div className='text-center mt-3'>
        <h1>Home</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='card' style={cardStyle}>
              <div className='card-header'>
                <img src="data:image/png;base64,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" alt="" className='card-img-top' />
              </div>
              <div className='card-body'>
                <button className='btn btn-outline-primary' style={buttonStyle} onClick={handleClick1}>
                  Info
                </button>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card' style={cardStyle}>
              <div className='card-header'>
                <img src="https://testrigor.com/wp-content/uploads/2023/02/express-logo_square.png" alt="" className='card-img-top' />
              </div>
              <div className='card-body'>
                <button className='btn btn-outline-primary' style={buttonStyle} onClick={handleClick2}>
                  Info
                </button>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card' style={cardStyle}>
              <div className='card-header'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="" className='card-img-top' />
              </div>
              <div className='card-body'>
                <button className='btn btn-outline-primary' style={buttonStyle} onClick={handleClick3}>
                  Info
                </button>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='card' style={cardStyle}>
              <div className='card-header'>
                <img src="https://miro.medium.com/v2/resize:fit:1000/1*TGwJKcxY8kGEenRLLedeLw.png" alt="" className='card-img-top' />
              </div>
              <div className='card-body'>
                <button className='btn btn-outline-primary' style={buttonStyle} onClick={handleClick4}>
                  Info
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='card mt-3'>
          <div className='card-body'>
            <p style={infoTextStyle}>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
