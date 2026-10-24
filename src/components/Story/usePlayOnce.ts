import {useCallback, useEffect, useRef, useState} from 'react';
import {prefersMotion} from '@site/src/components/Editorial';

// Plays a figure's CSS choreography once when it scrolls into view. SMIL pulses marked
// data-at="<ms>" are started on the same clock, since CSS can't drive motion along a path.
export function usePlayOnce<T extends HTMLElement>(duration: number) {
  const ref = useRef<T>(null);
  const [animated, setAnimated] = useState(false);
  const timers = useRef<number[]>([]);

  const clear = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  const play = useCallback(() => {
    const el = ref.current;
    if (el?.dataset.motion === undefined) return;
    clear();
    delete el.dataset.in;
    delete el.dataset.done;
    void el.offsetWidth;
    el.dataset.in = '';
    el.querySelectorAll<SVGAnimationElement>('[data-at]').forEach((anim) => {
      timers.current.push(window.setTimeout(() => anim.beginElement(), Number(anim.dataset.at)));
    });
    timers.current.push(
      window.setTimeout(() => {
        el.dataset.done = '';
      }, duration),
    );
  }, [duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !prefersMotion()) return;
    el.dataset.motion = '';
    setAnimated(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        play();
      },
      {threshold: 0.35},
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
  }, [play]);

  return {ref, animated, play};
}
