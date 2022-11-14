import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp.js";
import Message from "./Message";


function Tweet({tweet}) {
  return (
    <div className="tweet">

    <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData = {tweet.user} />
          <Timestamp time={tweet.timestamp} />  

        </div>

        <Message message={tweet.message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default Tweet;
