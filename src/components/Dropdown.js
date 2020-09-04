import React, { useState } from "react";

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {}

  return (
    <div class="dd-wrapper">
      <div
        tabIndex={0}
        class="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div class="dd-header_title">
          <p class="dd-header_title--bold">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
