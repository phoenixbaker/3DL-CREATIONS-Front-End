import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useUnit from "../hooks/useUnit";

export default function Cart() {
  const { user, setUser } = useAuth();
  const { unit } = useUnit();
  function addToCard() {
    setUser((prev) => {
      if (!prev.cart.length) prev.cart = [unit._id];
      else prev.cart.push(unit._id);
      return {
        ...prev,
      };
    });
  }

  useEffect(() => {
    console.log(user.cart);
  }, [user]);

  return <button onClick={() => addToCard()}>ADD TO CART</button>;
}
