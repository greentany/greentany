import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer ScrollTrigger avec GSAP
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.client-card');
    
    // Animation d'entrée pour chaque carte
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        {
          y: 100,
          opacity: 0,
          rotationX: -20,
          scale: 0.8,
          rotationY: -10
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animation de hover avec GSAP
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      
      cardElement.addEventListener('mouseenter', () => {
        gsap.to(cardElement, {
          y: -15,
          rotationX: 5,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      cardElement.addEventListener('mouseleave', () => {
        gsap.to(cardElement, {
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Animation des statistiques
    const statsElements = containerRef.current.querySelectorAll('.stat-number');
    statsElements.forEach((stat, index) => {
      gsap.fromTo(stat,
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: stat,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return containerRef;
};

export const useCardClickAnimation = () => {
  const handleCardClick = (clientName: string) => {
    const card = document.querySelector(`[data-client="${clientName}"]`) as HTMLElement;
    if (card) {
      // Animation de clic
      gsap.to(card, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });

      // Effet de particules
      const particles = gsap.to({}, {
        duration: 0.5,
        onUpdate: function() {
          const progress = this.progress();
          const particle = document.createElement('div');
          particle.className = 'absolute w-2 h-2 bg-blue-400 rounded-full pointer-events-none';
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          
          card.appendChild(particle);
          
          gsap.to(particle, {
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            opacity: 0,
            scale: 0,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => particle.remove()
          });
        }
      });
    }
  };

  return handleCardClick;
}; 