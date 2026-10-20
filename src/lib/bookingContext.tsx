import { createContext, useContext, useState, type ReactNode } from 'react';

type BookingContextValue = {
  selectedServiceId: string | null;
  setSelectedServiceId: (serviceId: string | null) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  return (
    <BookingContext.Provider value={{ selectedServiceId, setSelectedServiceId }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingContext() {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBookingContext debe usarse dentro de BookingProvider.');
  return context;
}
