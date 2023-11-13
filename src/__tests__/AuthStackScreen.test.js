import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackScreen } from "../navigation";

describe("AuthStackScreen", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <NavigationContainer>
        <AuthStackScreen />
      </NavigationContainer>,
    );

    expect(getByText("Home")).toBeTruthy();
    expect(getByText("Me")).toBeTruthy();
  });
});
