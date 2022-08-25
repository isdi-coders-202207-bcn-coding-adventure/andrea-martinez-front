import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Given a Counter component", () => {
  describe("When instantiated with a date as a final date", () => {
    test("Then it should display a counter", () => {
      render(<Counter />);

      const data = [
        screen.getByText("days"),
        screen.getByText("hours"),
        screen.getByText("minutes"),
        screen.getByText("seconds"),
      ];

      data.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
