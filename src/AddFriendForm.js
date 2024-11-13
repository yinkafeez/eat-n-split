import React from "react";

export default function AddFriendForm({
  friendName,
  onChange,
  handleAddFriend,
}) {
  return (
    <div className="add-friend-container">
      <form className="add-friend-form" onSubmit={handleAddFriend}>
        <div className="div-container">
          <label> 👬 Friend Name</label>
          <input
            type="text"
            className="add-friend-input"
            value={friendName}
            onChange={onChange}
          />
        </div>
        <div className="div-container">
          <label>🔼 Image URL</label>
          <input
            type="text"
            value="https://i.pravatar.cc/48"
            disabled
            onChange={() => {}}
            className="add-friend-input"
          />
        </div>

        <button className="add-friend-btn">Add </button>
      </form>
    </div>
  );
}
