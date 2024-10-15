import React from "react";
import { useSelector } from "react-redux";
import CartIsEmpty from "./CartIsEmpty";
import CartIs from "./CartIs";

export default function Cart() {
  const isLogin = useSelector((store) => store.header.isUserLogin);

  return <div>{isLogin ? <CartIs /> : <CartIsEmpty />}</div>;
}
