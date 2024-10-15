import { useEffect } from 'react';

function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      // Sprawdź, czy kliknięto poza komponentem, który referujemy
      if (ref.current && !ref.current.contains(event.target)) {
        callback();  // Wywołaj callback, jeśli kliknięto poza elementem
      }
    }

    // Dodaj nasłuchiwanie zdarzeń na kliknięcia
    document.addEventListener("mousedown", handleClickOutside);

    // Wyczyszczenie event listenera, gdy komponent zostanie odmontowany
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);  // Dependency array - zaktualizuj hook, jeśli ref lub callback się zmienią
}

export default useClickOutside;
