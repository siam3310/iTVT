import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div id="popup" className="fixed inset-0 bg-black bg-opacity-100 flex justify-center items-center z-50">
      <div className="bg-black p-8 rounded shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Weryfikacja uprawnień</h2>
        <p className="mb-4">Witaj, wchodząc na stronę, zgadzasz się na udostępnianie twojego IP do administratora strony</p>
        <p className="mb-4">Oraz wyrażasz zgodę na zapisywanie plików cookie (zwanych ciastkami) w twojej przeglądarce</p>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">
          Akceptuje ryzyko
        </button>
      </div>
    </div>
  );
};

export default Popup;