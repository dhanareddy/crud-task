import React from "react";

const EditForm = () => {
  return (
    <div>
      <form>
        <h1>Update Form</h1>
        <div>
          <input type="text" name="designation" />
        </div>
        <div>
          <input type="text" name="company" />
        </div>
        <div>
          <input type="text" name="workingFrom" />
        </div>
        <div>
          <input type="text" name="workingtill" />
        </div>
        <div>
          <input type="text" name="city" />
        </div>
      </form>
    </div>
  );
};

export default EditForm;
