import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { decrement, increment } from "../../redux/slices/counterSlice";
import {
  decrementCartItem,
  incrementCartItem,
} from "../../redux/slices/cartSlice";

const CounterContainer = styled.span`
  display: flex;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 6px;
  width: fit-content;
`;

const CounterButton = styled.button`
  font-size: 20px;
  color: rgba(139, 139, 139, 1);
  background-color: transparent;
  padding: 15px 22px;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    color: rgb(83, 83, 83);
    border: 1px solid rgb(83, 83, 83);
  }
`;

const Integer = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin: 0 40px;
`;

export default function Counter({ cart }) {
  const storeCount = useSelector((state) => state.counter.value);
  const count = cart ? cart.quantity : storeCount;

  const dispatch = useDispatch();
  return (
    <CounterContainer>
      <CounterButton onClick={() => dispatch(decrement())}>-</CounterButton>
      <Integer>{count}</Integer>
      <CounterButton onClick={() => dispatch(increment())}>+</CounterButton>
    </CounterContainer>
  );
}

export function CounterCart({ cart }) {
  const dispatch = useDispatch();

  return (
    <CounterContainer>
      <CounterButton onClick={() => dispatch(decrementCartItem(cart.id))}>
        -
      </CounterButton>

      <Integer>{cart.quantity}</Integer>

      <CounterButton onClick={() => dispatch(incrementCartItem(cart.id))}>
        +
      </CounterButton>
    </CounterContainer>
  );
}
