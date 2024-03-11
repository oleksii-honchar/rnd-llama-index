import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export function useDebouncedEffect(effect: EffectCallback, delay: number, deps?: DependencyList) {
  const callback = useRef<EffectCallback>();

  useEffect(() => {
    callback.current = effect;
  }, [effect]);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback.current!();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...(deps || []), delay]);
}
