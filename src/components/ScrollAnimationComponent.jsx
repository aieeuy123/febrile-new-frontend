import { useRef,useEffect,useState } from "react";
import { motion } from "framer-motion";


export default function ScrollAnimationComponent({children,className}) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef();
  
    useEffect(() => {
      const currentRef = ref.current; // Ref değerini bir değişkene kopyala
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (currentRef) {
              observer.unobserve(currentRef);
            }
          }
        },
        { threshold: 0.1 } // Görüntü alanının %10'u girildiğinde tetiklenir
      );
  
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);
  
    return (
      <motion.div
        className={className}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
       
      >
        {children}
      </motion.div>
    );
  };
