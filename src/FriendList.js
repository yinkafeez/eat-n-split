import React from "react";

export default function FriendList({
  friendList,
  onSelectedFriend,
  selectedId,
}) {
  return (
    <ul>
      {friendList.map((friend) => {
        return (
          <li className="friend-list" key={friend.id}>
            <div className="list">
              <img
                src={`https://i.pravatar.cc/48?img=${friend.id}`}
                alt="pravatar"
                className="friend-img"
              />
              <div className="friend-profile">
                {/* name */}
                <p className="name">{friend.name} </p>

                {/* balance */}
                {friend.balance < 0 && (
                  <p className="red">
                    You owe {friend.name} ${Math.abs(friend.balance)}
                  </p>
                )}
                {friend.balance > 0 && (
                  <p className="green">
                    {friend.name} owes you ${friend.balance}
                  </p>
                )}
                {friend.balance === 0 && <p>You and {friend.name} are even</p>}
              </div>
              <button
                className="btn"
                onClick={() => onSelectedFriend(friend.name)}
              >
                {selectedId === friend.name ? "close" : "select"}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
