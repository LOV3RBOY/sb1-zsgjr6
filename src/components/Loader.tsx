import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-charcoal flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full overflow-hidden mb-4">
        <h1 className="loader-text animate-slide-left">
          Loverboy <span className="out-line">Hoodies</span> Loverboy <span className="out-line">Hoodies</span> Loverboy <span className="out-line">Hoodies</span>
        </h1>
      </div>
      <div className="w-full overflow-hidden">
        <h1 className="loader-text animate-slide-right">
          Premium <span className="out-line">Quality</span> Designed to <span className="out-line">Speak</span> Premium <span className="out-line">Quality</span> Designed to <span className="out-line">Speak</span>
        </h1>
      </div>
      <div className="paint-drop absolute inset-0 animate-paint-drop"></div>
    </div>
  );
};

export default Loader;