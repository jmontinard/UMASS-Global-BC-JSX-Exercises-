const Tweet = ({username, name, date, msg}) => {
    // Format the date to a human-readable string
    const formattedDate = date.toLocaleDateString("en-US");
  
    return (
      <div className="tweet">
        <div className="tweet-header">
          <img src="logo.png" alt="default stock user" />
          <h3>{name}</h3>
          <small>@{username}</small>
        </div>
        <div className="msg-box">
          <p>{msg}</p>
        </div>
        <small>{formattedDate}</small>
      </div>
    );
  };