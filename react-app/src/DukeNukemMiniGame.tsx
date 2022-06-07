import React from "react";

const css = `
.iFrame {
    width: 560px;
    height: 384px;
    padding: 200px;
    background-color: grey;
    border: none;
}`;

export default function DukeNukemMiniGame() {
  return (
    <div>
      <style>{css}</style>
      <iframe
        className="iFrame"
        src="https://archive.org/embed/DukeNukem"
      ></iframe>
    </div>
  );
}
