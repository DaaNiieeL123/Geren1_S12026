import { useState } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    loading?: 'lazy' | 'eager';
}

export const LazyImage = ({ src, alt, className = '', loading = 'lazy' }: LazyImageProps) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            onLoad={() => setLoaded(true)}
            className={`${className} transition-[opacity,filter] duration-500 ${loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
                }`}
        />
    );
};
