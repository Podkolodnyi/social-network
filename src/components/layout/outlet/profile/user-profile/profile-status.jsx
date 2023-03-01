import React, { useState, useEffect } from "react";
import classes from "./profile-status.module.css";

const ProfileStatus = React.memo((props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            onChange={onStatusChange}
          />
        </div>
      )}
      {!editMode && (
        <div className={classes.status} onDoubleClick={activateEditMode}>
          {props.status || "-----"}
        </div>
      )}
    </div>
  );
});

export default ProfileStatus;
