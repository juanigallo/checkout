import React, { useContext } from "react";
import Button from "../Button";
import ToggleCartContext from "../../contexts/ToggleCart";

function Navbar() {
  const { handleToggle } = useContext(ToggleCartContext);

  return (
    <nav>
      <h1>Checkout </h1>
      <Button
        onClick={handleToggle}
        label="Ver carrito"
        className="button-primary"
      />
    </nav>
  );
}

export default Navbar;
