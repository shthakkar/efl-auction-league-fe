import React from "react";

export default function Login() {
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Team Name" className="form--input" />
        <input type="text" placeholder="Passcode" className="form--input" />
        <button className="form--button">Log me in</button>
      </div>
    </main>
  );
}
