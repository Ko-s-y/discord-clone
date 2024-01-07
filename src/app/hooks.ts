import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { APppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";

export const useAppDispatch: () => APppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
