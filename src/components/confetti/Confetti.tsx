import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  d: number;
  color: string;
  tilt: number;
  tiltAngleIncremental: number;
  tiltAngle: number;
  speed: number; // Velocidade das partículas
  draw: () => void;
}

const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const maxConfettis = 150;
  const particles: Particle[] = [];
  const possibleColors = [
    "DodgerBlue",
    "OliveDrab",
    "Gold",
    "Pink",
    "SlateBlue",
    "LightBlue",
    "Gold",
    "Violet",
    "PaleGreen",
    "SteelBlue",
    "SandyBrown",
    "Chocolate",
    "Crimson",
  ];

  // Função para gerar números aleatórios
  function randomFromTo(from: number, to: number): number {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  // Função para criar as partículas com a velocidade ajustada
  function createParticle(): Particle {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const fixedSpeed = Math.random() * (5 - 4) + 4; // Velocidade fixa entre 0.25 e 0.5

    return {
      x: Math.random() * W,
      y: Math.random() * H - H,
      r: randomFromTo(11, 33),
      d: Math.random() * maxConfettis + 11,
      color: possibleColors[Math.floor(Math.random() * possibleColors.length)],
      tilt: Math.floor(Math.random() * 33) - 11,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
      tiltAngle: 0,
      speed: fixedSpeed, // Define a velocidade fixa para a partícula
      draw() {
        const context = canvasRef.current?.getContext("2d");
        if (context) {
          context.beginPath();
          context.lineWidth = this.r / 2;
          context.strokeStyle = this.color;
          context.moveTo(this.x + this.tilt + this.r / 3, this.y);
          context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
          context.stroke();
        }
      },
    };
  }

  // Atualiza a posição das partículas com base na sua velocidade
  function updateParticles() {
    particles.forEach((particle) => {
      particle.y += particle.speed; // A partícula se move com a velocidade fixa
      particle.tiltAngle += particle.tiltAngleIncremental;
      particle.tilt = Math.sin(particle.tiltAngle) * 15;

      // Se a partícula sair da tela, ela é reposicionada
      if (particle.y > window.innerHeight) {
        particle.y = -particle.r; // Volta para o topo da tela
        particle.x = Math.random() * window.innerWidth; // Nova posição horizontal
      }
    });
  }

  useEffect(() => {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = W;
      canvas.height = H;
    }

    // Inicializa as partículas uma vez
    for (let i = 0; i < maxConfettis; i++) {
      particles.push(createParticle());
    }

    // Função de desenho que será chamada para cada quadro da animação
    function draw() {
      const context = canvas?.getContext("2d");
      if (context) {
        context.clearRect(0, 0, W, H); // Limpa o canvas a cada quadro
        particles.forEach((particle) => particle.draw()); // Desenha todas as partículas
        updateParticles(); // Atualiza a posição das partículas
        requestAnimationFrame(draw); // Solicita o próximo quadro
      }
    }

    draw(); // Inicia a animação
  }, []); // A animação inicial é executada apenas uma vez

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10"
      ></canvas>
    </div>
  );
};

export default Confetti;
