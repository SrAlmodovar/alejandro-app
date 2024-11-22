import { render, screen, waitFor } from "@testing-library/react";
import BookingPage from "./BookingPage"; // Asegúrate de que la ruta sea correcta
import { fetchAPI } from "../public/api";  // Asegúrate de que la importación sea correcta

// Simulamos la función fetchAPI globalmente
global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

describe("timesReducer", () => {
  test("debe devolver el array de horas cuando se llama con 'UPDATE_TIMES'", () => {
    const initialState = [];
    const action = { type: "UPDATE_TIMES", payload: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };

    // Llamamos al reducer con la acción
    const newState = timesReducer(initialState, action);

    // Comprobamos que el nuevo estado coincida con el payload
    expect(newState).toEqual(action.payload);
  });
});

describe("BookingPage", () => {
  test("debe mostrar las horas disponibles después de cargar la API", async () => {
    // Renderizamos el componente
    render(<BookingPage />);
    
    // Simulamos la carga de la API
    await waitFor(() => expect(fetchAPI).toHaveBeenCalledTimes(1)); // Verifica que la API haya sido llamada

    // Verificamos que las horas se muestren correctamente en el DOM
    const availableTimes = await screen.findByText("17:00"); // Verifica si "17:00" se muestra
    expect(availableTimes).toBeInTheDocument();

    // Verifica que otros horarios también estén presentes
    expect(screen.getByText("18:00")).toBeInTheDocument();
    expect(screen.getByText("19:00")).toBeInTheDocument();
    expect(screen.getByText("20:00")).toBeInTheDocument();
    expect(screen.getByText("21:00")).toBeInTheDocument();
    expect(screen.getByText("22:00")).toBeInTheDocument();
  });
});
