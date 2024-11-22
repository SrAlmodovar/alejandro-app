import React, { useState, useEffect } from "react";

// Función para enviar los datos del formulario
const submitAPI = (formData) => {
  console.log("Formulario enviado con los siguientes datos:", formData);
  return true; // Simula una respuesta exitosa
};

function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [ocassion, setOcassion] = useState("");
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true); // Estado para controlar la visibilidad

  // Manejar el cambio de fecha
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(new Date(newDate));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, ocassion };
    const success = submitAPI(formData);
    if (success) {
      setReservationConfirmed(true);
    }
  };

  // Manejar el cierre del cuadro de confirmación
  const handleCloseForm = () => {
    setIsFormVisible(false); // Oculta todo el formulario
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    setDate(today);
    updateTimes(new Date(today));
  }, [updateTimes]);

  if (!isFormVisible) return null; // No renderizar el formulario si no está visible

  return (
    <div>
      <form className="bookingForm" onSubmit={handleSubmit}>
        <label htmlFor="reserve-date">Choose date</label>
        <input
          className="bookingInput"
          type="date"
          id="reserve-date"
          value={date}
          onChange={handleDateChange}
        />
        <label htmlFor="reserve-time">Choose time</label>
        <select
          className="bookingSelect"
          id="reserve-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.length > 0 ? (
            availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))
          ) : (
            <option value="">No available times</option>
          )}
        </select>
        <label htmlFor="reserve-guests">Number of guests</label>
        <input
          className="bookingInput"
          id="reserve-guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          max="10"
        />
        <label htmlFor="reserve-ocassion">Occasion</label>
        <select
          className="bookingSelect"
          id="reserve-ocassion"
          value={ocassion}
          onChange={(e) => setOcassion(e.target.value)}
        >
          <option value="Regular">Regular</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Wedding">Wedding</option>
        </select>
        <button type="submit" className="bookingButton">Make your reservation</button>
        {reservationConfirmed && (
          <div className="confirmationMessage">
            <p>✔ Your reservation has been confirmed!</p>
            <button onClick={handleCloseForm}>
              Close
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default BookingForm;
