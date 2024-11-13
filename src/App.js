import React, { useState } from "react";
import FriendList from "./FriendList";
// import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";
import BillSplit from "./BillSplit";

const friendList = [
  {
    id: 1,
    name: "Clark",
    balance: -7,
  },
  {
    id: 2,
    name: "Sarah",
    balance: 20,
  },
  {
    id: 3,
    name: "Anthony",
    balance: 0,
  },
];

function App() {
  // name input form
  const [friendName, setFriendName] = useState("");

  // friendList array
  const [friends, setFriends] = useState(friendList);

  // add friend form toggle state
  const [isOpen, setIsOpen] = useState(false);

  // select people for bill split state
  const [selectedId, setSelectedId] = useState(null);

  const [billInput, setBillInput] = useState("");
  const [expense, setExpense] = useState("");
  const [payer, setPayer] = useState("you");
  let friendBill = billInput - expense;

  // get selected friend details function
  function handleSelectedFriend(id) {
    setSelectedId(id === selectedId ? null : id);
    setIsOpen(false);
  }

  // onchange function of friend name form
  function handleChange(e) {
    setFriendName(e.target.value);
  }
  // add friend toggle function
  function handleAddFriendToggle(e) {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
    setSelectedId(null);
  }

  // add friend submit button
  function handleAddFriend(e) {
    if (!friendName) return;
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      name: friendName,
      balance: 0,
      randNum: Math.floor(Math.random() * 100),
    };

    setFriends((friends) => [...friends, newItem]);
    setFriendName("");
    setIsOpen(false);
  }

  // split bill button
  function handleBillSplit(value) {
    if (!billInput || !expense) return;
    setSelectedId(null);
    setBillInput("");
    setExpense("");
    setPayer("you");

    setFriends((friends) =>
      friends.map((friend) =>
        friend.name === selectedId
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="App">
      <div>
        <FriendList
          friendList={friends}
          onSelectedFriend={handleSelectedFriend}
          selectedId={selectedId}
        />
        {isOpen && (
          <AddFriendForm
            friendName={friendName}
            onChange={handleChange}
            handleAddFriend={handleAddFriend}
          />
        )}

        <button className="add-friend-toggle" onClick={handleAddFriendToggle}>
          {isOpen ? "Close" : "Add Friend"}
        </button>
      </div>
      {selectedId && (
        <BillSplit
          selectedId={selectedId}
          billInput={billInput}
          setBillInput={setBillInput}
          expense={expense}
          setExpense={setExpense}
          payer={payer}
          setPayer={setPayer}
          friendBill={friendBill}
          onBillSplit={handleBillSplit}
        />
      )}
    </div>
  );
}

export default App;
