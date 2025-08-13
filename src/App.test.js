// App.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

describe("BookingForm Component", () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  const availableTimes = { availableTimes: ["17:00", "18:00", "19:00"] };

  beforeEach(() => {
    mockDispatch.mockClear();
    mockSubmitForm.mockClear();
  });

  test("renders all form fields correctly", () => {
    render(<BookingForm dispatch={mockDispatch} submitForm={mockSubmitForm} availableTimes={availableTimes} />);

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Make Your Reservation/i })).toBeDisabled();
  });

  test("enables submit button when form is valid", () => {
    render(<BookingForm dispatch={mockDispatch} submitForm={mockSubmitForm} availableTimes={availableTimes} />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: "2025-08-20" } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: 4 } });

    expect(screen.getByRole("button", { name: /Make Your Reservation/i })).toBeEnabled();
  });

  test("calls dispatch when date changes", () => {
    render(<BookingForm dispatch={mockDispatch} submitForm={mockSubmitForm} availableTimes={availableTimes} />);
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: "2025-08-20" } });
    expect(mockDispatch).toHaveBeenCalledWith("2025-08-20");
  });

  test("calls submitForm when form is submitted", () => {
    render(<BookingForm dispatch={mockDispatch} submitForm={mockSubmitForm} availableTimes={availableTimes} />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: "2025-08-20" } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: 4 } });

    const submitButton = screen.getByRole("button", { name: /Make Your Reservation/i });
    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
