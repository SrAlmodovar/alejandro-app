import React, { useReducer, useEffect, useState, useCallback } from "react";
import BookingForm from "./BookingForm.js";

// Reducer para manejar los estados de las horas disponibles
function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload; // Actualiza con los tiempos obtenidos de la API
    default:
      return state;
  }
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const [isAPILoaded, setIsAPILoaded] = useState(false); // Estado para manejar la carga del script

  // Función para actualizar las horas disponibles según la fecha seleccionada
  const updateTimes = useCallback(
    (selectedDate) => {
      if (isAPILoaded && window.fetchAPI) {
        const times = window.fetchAPI(selectedDate);
        console.log("Times from API:", times);
        dispatch({ type: "UPDATE_TIMES", payload: times });
      } else {
        console.error("fetchAPI is not available or the API script has not loaded yet.");
      }
    },
    [isAPILoaded]
  );

  // Cargar el script de la API
  useEffect(() => {
    const scriptSrc = "/api.js"; // La ruta al archivo `api.js`
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.onload = () => {
        console.log("API script loaded successfully.");
        if (window.fetchAPI) {
          setIsAPILoaded(true);
        } else {
          console.error("fetchAPI is not defined after script load.");
        }
      };
      script.onerror = () => {
        console.error("Error loading the API script.");
      };
      document.body.appendChild(script);
    } else {
      console.log("API script already exists, skipping load.");
      if (window.fetchAPI) {
        setIsAPILoaded(true);
      }
    }
  }, []);

  // Llamada inicial para actualizar los tiempos después de que la API esté lista
  useEffect(() => {
    if (isAPILoaded) {
      const today = new Date(); // Fecha actual
      updateTimes(today); // Actualiza con la fecha inicial
    }
  }, [isAPILoaded, updateTimes]);

  return (
    <div>
      {/* El formulario de reservas siempre se muestra aquí */}
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}

export default BookingPage;
