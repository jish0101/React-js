import { useEffect, useRef } from "react";

export default function useUpdateEffect(callback, depedencies) {
  const firstRenderRef = useRef();

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return
    }
    return callback()
  }, depedencies)
}