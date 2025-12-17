import { useEffect, useRef } from 'react';

export const HologramBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Criar o conteúdo do holograma baseado no arquivo 8621.html
      const hologramHTML = `
        <style>
          @page {size:A4 portrait; margin:0}
          @media screen {.pdfpage{margin:10px;}}.pdfpage{position:relative;background:white;overflow:hidden;transform-origin:50% 50%;} .pdfpage p {position:absolute;white-space:pre;transform-origin:0 0;margin:0 0;}
          .pdfpage .ce {shape-rendering: crispEdges;} .pdfpage .ann p {margin:0} .pdfpage a {color:inherit; text-decoration:inherit;} .pdfpage .pdfformfield {white-space: pre-wrap}.pdfpage image {position:absolute;left:0px;top:0px;width:1px;height:1px;transform-origin:0 0} .pdfpage svg {position:absolute;stroke:none;fill:none;white-space:pre}.pdfpage text {unicode-bidi:bidi-override} clipPath path {clip-rule: evenodd}
          
          /* Estilos customizados para o background */
          .hologram-container {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            opacity: 0.3;
          }
          
          .pdfpage {
            background: transparent;
            width: 100%;
            height: 100%;
            transform: scale(1.5);
          }
          
          /* Animação de brilho */
          @keyframes hologram-glow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          
          .pdfpage {
            animation: hologram-glow 4s ease-in-out infinite;
          }
          
          /* Animação de rotação suave */
          @keyframes hologram-rotate {
            0% { transform: scale(1.5) rotate(0deg); }
            100% { transform: scale(1.5) rotate(360deg); }
          }
          
          .pdfpage {
            animation: hologram-glow 4s ease-in-out infinite, hologram-rotate 20s linear infinite;
          }
          
          /* Animação de pulsação */
          @keyframes hologram-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          .hologram-container {
            animation: hologram-pulse 8s ease-in-out infinite;
          }
        </style>
        
        <div class="hologram-container">
          <div class="pdfpage" data-orientation="portrait" data-toc-id="pdfpage0" data-index="0" id="pdfpage0" style="width:100%;height:100%;">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
              <defs>
                <radialGradient id="holoGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style="stop-color:#00ffff;stop-opacity:0.8" />
                  <stop offset="50%" style="stop-color:#0080ff;stop-opacity:0.5" />
                  <stop offset="100%" style="stop-color:#004080;stop-opacity:0.2" />
                </radialGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/> 
                  </feMerge>
                </filter>
                
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ffff" stroke-width="0.5" opacity="0.3"/>
                </pattern>
                
                <pattern id="hexGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <polygon points="30,5 55,20 55,40 30,55 5,40 5,20" fill="none" stroke="#00ffff" stroke-width="0.5" opacity="0.2"/>
                </pattern>
              </defs>
              
              <!-- Grid de fundo -->
              <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3"/>
              
              <!-- Hexágonos -->
              <rect width="100%" height="100%" fill="url(#hexGrid)" opacity="0.2"/>
              
              <!-- Círculos concêntricos -->
              <circle cx="50%" cy="50%" r="30%" fill="none" stroke="#00ffff" stroke-width="1" opacity="0.4" filter="url(#glow)"/>
              <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#0080ff" stroke-width="1" opacity="0.6" filter="url(#glow)"/>
              <circle cx="50%" cy="50%" r="10%" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.8" filter="url(#glow)"/>
              
              <!-- Linhas dinâmicas -->
              <g opacity="0.6">
                <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#00ffff" stroke-width="0.5" filter="url(#glow)">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#0080ff" stroke-width="0.5" filter="url(#glow)">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#00ffff" stroke-width="0.5" filter="url(#glow)">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#0080ff" stroke-width="0.5" filter="url(#glow)">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite"/>
                </line>
              </g>
              
              <!-- Elementos flutuantes -->
              <g>
                <polygon points="20%,20% 25%,15% 30%,20% 25%,25%" fill="#00ffff" opacity="0.6" filter="url(#glow)">
                  <animateTransform attributeName="transform" type="rotate" from="0 25 20" to="360 25 20" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                </polygon>
                
                <polygon points="80%,30% 85%,25% 90%,30% 85%,35%" fill="#0080ff" opacity="0.6" filter="url(#glow)">
                  <animateTransform attributeName="transform" type="rotate" from="0 85 30" to="-360 85 30" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
                </polygon>
                
                <polygon points="15%,70% 20%,65% 25%,70% 20%,75%" fill="#00ffff" opacity="0.5" filter="url(#glow)">
                  <animateTransform attributeName="transform" type="rotate" from="0 20 70" to="360 20 70" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite"/>
                </polygon>
              </g>
              
              <!-- Centro brilhante -->
              <circle cx="50%" cy="50%" r="5%" fill="url(#holoGradient)" opacity="0.8" filter="url(#glow)">
                <animate attributeName="r" values="3%;5%;3%" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
              </circle>
              
              <!-- Partículas flutuantes -->
              <g>
                <circle cx="10%" cy="15%" r="1" fill="#00ffff" opacity="0.6" filter="url(#glow)">
                  <animate attributeName="cy" values="15%;85%;15%" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.8;0" dur="8s" repeatCount="indefinite"/>
                </circle>
                
                <circle cx="90%" cy="25%" r="1.5" fill="#0080ff" opacity="0.6" filter="url(#glow)">
                  <animate attributeName="cy" values="25%;75%;25%" dur="10s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.8;0" dur="10s" repeatCount="indefinite"/>
                </circle>
                
                <circle cx="20%" cy="80%" r="1" fill="#ffffff" opacity="0.8" filter="url(#glow)">
                  <animate attributeName="cy" values="80%;20%;80%" dur="12s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;1;0" dur="12s" repeatCount="indefinite"/>
                </circle>
                
                <circle cx="80%" cy="70%" r="1.2" fill="#00ffff" opacity="0.6" filter="url(#glow)">
                  <animate attributeName="cy" values="70%;30%;70%" dur="9s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.8;0" dur="9s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              <!-- Linhas de conexão -->
              <g opacity="0.3" stroke="#00ffff" stroke-width="0.5" fill="none">
                <line x1="10%" y1="15%" x2="50%" y2="50%">
                  <animate attributeName="opacity" values="0;0.5;0" dur="4s" repeatCount="indefinite"/>
                </line>
                <line x1="90%" y1="25%" x2="50%" y2="50%">
                  <animate attributeName="opacity" values="0;0.5;0" dur="5s" repeatCount="indefinite"/>
                </line>
                <line x1="20%" y1="80%" x2="50%" y2="50%">
                  <animate attributeName="opacity" values="0;0.5;0" dur="6s" repeatCount="indefinite"/>
                </line>
                <line x1="80%" y1="70%" x2="50%" y2="50%">
                  <animate attributeName="opacity" values="0;0.5;0" dur="4.5s" repeatCount="indefinite"/>
                </line>
              </g>
            </svg>
          </div>
        </div>
      `;
      
      containerRef.current.innerHTML = hologramHTML;
    }
  }, []);

  return <div ref={containerRef} className="hologram-background" />;
};