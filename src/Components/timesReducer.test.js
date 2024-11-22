import { initializeTimes, timesReducer } from "./BookingPage";

describe("initializeTimes", () => {
  test("debe devolver el array de horas iniciales", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe("timesReducer", () => {
  test("debe devolver el mismo array de horas cuando se llama con 'UPDATE_TIMES'", () => {
    const initialState = [];
    const action = { type: "UPDATE_TIMES" };
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const newState = timesReducer(initialState, action);

    expect(newState).toEqual(expectedTimes);
  });
});