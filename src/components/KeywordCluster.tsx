
import React, { useRef, useEffect } from 'react';

interface Keyword {
  text: string;
  size: number;
  color: string;
}

const keywords: Keyword[] = [
  { text: 'SEO', size: 40, color: '#2563eb' },
  { text: 'Content', size: 36, color: '#10b981' },
  { text: 'Keywords', size: 34, color: '#8b5cf6' },
  { text: 'Link Building', size: 30, color: '#f59e0b' },
  { text: 'Search Rankings', size: 32, color: '#2563eb' },
  { text: 'Technical SEO', size: 30, color: '#10b981' },
  { text: 'Analytics', size: 28, color: '#8b5cf6' },
  { text: 'Mobile Optimization', size: 26, color: '#f59e0b' },
  { text: 'Page Speed', size: 27, color: '#2563eb' },
  { text: 'User Experience', size: 25, color: '#10b981' },
  { text: 'Backlinks', size: 29, color: '#8b5cf6' },
  { text: 'Meta Tags', size: 23, color: '#f59e0b' },
  { text: 'Structured Data', size: 22, color: '#2563eb' },
  { text: 'Local SEO', size: 26, color: '#10b981' },
  { text: 'Voice Search', size: 21, color: '#8b5cf6' },
  { text: 'Algorithm Updates', size: 20, color: '#f59e0b' },
  { text: 'SERP Features', size: 22, color: '#2563eb' },
  { text: 'Internal Linking', size: 24, color: '#10b981' },
  { text: 'Anchor Text', size: 19, color: '#8b5cf6' },
  { text: 'LSI Keywords', size: 18, color: '#f59e0b' },
];

interface KeywordNode extends Keyword {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const KeywordCluster: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const nodesRef = useRef<KeywordNode[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const isMouseDown = useRef(false);
  
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        
        // Reinitialize nodes with new canvas dimensions
        initializeNodes();
      }
    };
    
    const initializeNodes = () => {
      nodesRef.current = keywords.map((keyword) => {
        return {
          ...keyword,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        };
      });
    };
    
    const draw = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update node positions with forces
      nodesRef.current.forEach((node, i) => {
        // Apply mouse force if mouse is down
        if (isMouseDown.current) {
          const dx = mousePos.current.x - node.x;
          const dy = mousePos.current.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const force = 0.2 * (1 - distance / 200);
            node.vx += dx * force / distance;
            node.vy += dy * force / distance;
          }
        }
        
        // Apply repulsive forces between nodes
        nodesRef.current.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const force = 0.05 * (1 - distance / 100);
              node.vx += dx * force / distance;
              node.vy += dy * force / distance;
            }
          }
        });
        
        // Apply boundary forces
        const padding = 50;
        if (node.x < padding) node.vx += 0.1 * (1 - node.x / padding);
        if (node.x > canvas.width - padding) node.vx -= 0.1 * (1 - (canvas.width - node.x) / padding);
        if (node.y < padding) node.vy += 0.1 * (1 - node.y / padding);
        if (node.y > canvas.height - padding) node.vy -= 0.1 * (1 - (canvas.height - node.y) / padding);
        
        // Apply friction
        node.vx *= 0.95;
        node.vy *= 0.95;
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Draw node (text)
        ctx.font = `${node.size}px Arial`;
        ctx.fillStyle = node.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.text, node.x, node.y);
      });
      
      animationFrameRef.current = requestAnimationFrame(draw);
    };
    
    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    
    const handleMouseDown = () => {
      isMouseDown.current = true;
    };
    
    const handleMouseUp = () => {
      isMouseDown.current = false;
    };
    
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);
    
    resizeCanvas();
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="w-full h-[400px] relative rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-md"
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full cursor-pointer"
      />
      <div className="absolute bottom-4 left-4 text-sm text-gray-500">
        <p>Drag your cursor to interact with the keywords</p>
      </div>
    </div>
  );
};

export default KeywordCluster;
