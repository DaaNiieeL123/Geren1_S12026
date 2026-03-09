import { useState, useEffect } from 'react';

export const useAnimatedNumber = (endValue: number, duration: number = 400) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        const startValue = value;
        const changeInValue = endValue - startValue;

        const easeOutExpo = (t: number): number => {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        };

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            setValue(startValue + changeInValue * easeOutExpo(progress));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [endValue, duration]); // Intentionally omitting `value` so it animates from its current spot

    return value;
};
