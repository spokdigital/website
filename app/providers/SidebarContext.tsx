"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SidebarContextValue {
  isOpen: boolean;
  isCollapsed: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  toggleCollapse: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const SidebarContext = createContext<SidebarContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function SidebarProvider({ children }: { children: ReactNode }) {
  // isOpen  → mobile drawer open/closed
  // isCollapsed → desktop sidebar collapsed to icon-only rail
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  const toggleCollapse = useCallback(() => setIsCollapsed((v) => !v), []);

  return (
    <SidebarContext.Provider
      value={{ isOpen, isCollapsed, open, close, toggle, toggleCollapse }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useSidebar(): SidebarContextValue {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used inside <SidebarProvider>");
  return ctx;
}
