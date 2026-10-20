import { useEffect, useState } from 'react';
import { siteConfig } from '../../config/site.config';

function getLocalTime(now: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: siteConfig.business.timezone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const dayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(values.weekday);
  return { day: dayIndex, minute: Number(values.hour) * 60 + Number(values.minute) };
}

function isOpenNow(now: Date) {
  const { day, minute } = getLocalTime(now);
  const previousDay = (day + 6) % 7;

  return siteConfig.schedule.weekly.some(({ day: scheduleDay, open, close }) => {
    const [openHour, openMinute] = open.split(':').map(Number);
    const [closeHour, closeMinute] = close.split(':').map(Number);
    const openAt = openHour * 60 + openMinute;
    const closeAt = closeHour * 60 + closeMinute;

    if (scheduleDay === day) {
      return openAt < closeAt ? minute >= openAt && minute < closeAt : minute >= openAt;
    }
    return scheduleDay === previousDay && openAt >= closeAt && minute < closeAt;
  });
}

export function TrustBar() {
  const [isOpen, setIsOpen] = useState(() => isOpenNow(new Date()));

  useEffect(() => {
    const interval = window.setInterval(() => setIsOpen(isOpenNow(new Date())), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="trust" className="border-y border-border bg-surface px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className={`h-3 w-3 shrink-0 rounded-full ${isOpen ? 'bg-success' : 'bg-danger'}`} aria-hidden="true" />
          <div>
            <h2 className="font-heading text-lg font-semibold text-fg">{siteConfig.copy.trust.title}</h2>
            {siteConfig.schedule.note && <p className="text-sm text-fg-muted">{siteConfig.schedule.note}</p>}
          </div>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-fg-muted">
          {siteConfig.copy.trust.items.map((item) => (
            <li className="flex items-center gap-2" key={item}>
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-success" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4 10 4 4 8-8" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
