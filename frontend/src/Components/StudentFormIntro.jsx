const StudentFormIntro = ({ next }) => {
  return (
    <div className="sf-form">
      <div className="sf-form-heading">
        Please remove the background of your profile image first
      </div>
      <div className="sf-form-text">
        <div>For your profile image it is necessary to </div>
        <div>
          remove the background of the image. You can easily do that on 
          <a href="https://www.remove.bg/de"> this webpage</a>:
        </div>
      </div>
      <div className="sf-image-backgroundRemoval-container">
        <a href="https://www.remove.bg/de">
          <img
            src="/backgroundRemoval.png"
            className="sf-image-backgroundRemoval"
          />
        </a>
      </div>

      <div className="sf-content-1C"></div>
      <div className="sf-buttons">
        <button className="sf-button" onClick={() => next()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentFormIntro;
