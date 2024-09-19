import React from "react";

const ContactPage = () => {
  return (
    <div className="m-10">
      <h4 className="text-xl font-semibold mb-3">Contribution</h4>
      <div className="bg-white p-10 rounded">
        <h5>You can contribution this project here</h5>
        <div className="mt-6">
          <a
            className="bg-blue-500 p-2  rounded-md text-white"
            href="https://github.com/dineshdevelope"
            target="_blank"
          >
            Go to Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
