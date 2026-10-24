import React, {useEffect, useRef} from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';

const MobileSidebarToggle = (): React.JSX.Element => {
  const {toggle, shown} = useNavbarMobileSidebar();
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!shown) return;
    const sidebar = document.querySelector<HTMLElement>('.navbar-sidebar');
    if (!sidebar) return;

    const focusClose = () => {
      sidebar.querySelector<HTMLButtonElement>('.navbar-sidebar__close')?.focus({preventScroll: true});
    };
    const frame = requestAnimationFrame(focusClose);
    sidebar.addEventListener('transitionend', focusClose, {once: true});
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        toggle();
      }
      if (event.key !== 'Tab') return;
      const controls = [...sidebar.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]')]
        .filter((element) => !element.closest('[inert]') && element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first && last) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last && first) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      sidebar.removeEventListener('transitionend', focusClose);
      document.removeEventListener('keydown', onKeyDown);
      trigger.current?.focus();
    };
  }, [shown, toggle]);

  return (
    <button
      ref={trigger}
      onClick={toggle}
      aria-label={shown ? 'Close menu' : 'Open menu'}
      aria-expanded={shown}
      className="navbar__toggle clean-btn"
      type="button">
      <span>Menu</span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M1 6h16M1 12h16" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    </button>
  );
};

export default MobileSidebarToggle;
