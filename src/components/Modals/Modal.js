import React from 'react';
import './Modal.scss';

export default ({ opened, children, onClose }) =>
  opened ? (
    <div class="modal" id="modal">
      <header>
        <button onClick={onClose}>CERRAR</button>
      </header>
      <div class="content">{children}</div>
    </div>
  ) : null;
