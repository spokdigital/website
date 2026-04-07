"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import { ReactLenis, useLenis } from "lenis/react";

interface LenisContextType {
  stop: () => void;
  start: () => void;
}

const LenisContext = createContext<LenisContextType | null>(null);

export const useLenisContext = () => {
  const context = useContext(LenisContext);
  if (!context)
    throw new Error("useLenisContext must be used inside LenisProvider");
  return context;
};

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<any>(null);

  const LenisControls = () => {
    const lenis = useLenis();
    useEffect(() => {
      lenisRef.current = lenis;
    }, [lenis]);
    return null;
  };

  const value: LenisContextType = {
    stop: () => lenisRef.current?.stop(),
    start: () => lenisRef.current?.start(),
  };

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, duration: 1.5 }}>
      <LenisControls />
      <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
    </ReactLenis>
  );
};
