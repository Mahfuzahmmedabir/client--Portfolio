import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default duration
      easing: 'ease-in-out',
      // once: true, // Animation happens only once
      // ...options, // Allow custom options
    });
  }, [options]); // Reinitialize AOS when options change
};

export default useAOS;
