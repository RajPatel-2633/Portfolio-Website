import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { useInView } from 'framer-motion';

const SKILLS = [
  { name: "React", bg: "#61DAFB", color: "#000" },
  { name: "Node.js", bg: "#339933", color: "#fff" },
  { name: "Python", bg: "#3776AB", color: "#fff" },
  { name: "TensorFlow", bg: "#FF6F00", color: "#fff" },
  { name: "PyTorch", bg: "#EE4C2C", color: "#fff" },
  { name: "MongoDB", bg: "#47A248", color: "#fff" },
  { name: "Three.js", bg: "#000000", color: "#fff" },
  { name: "AWS", bg: "#232F3E", color: "#fff" },
  { name: "Tailwind CSS", bg: "#06B6D4", color: "#fff" },
  { name: "FastAPI", bg: "#009688", color: "#fff" },
  { name: "Docker", bg: "#2496ED", color: "#fff" },
  { name: "PostgreSQL", bg: "#4169E1", color: "#fff" }
];

export default function PhysicsSkills() {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const isInView = useInView(sceneRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !sceneRef.current) return;

    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    engineRef.current = engine;
    
    const width = sceneRef.current.clientWidth;
    const height = 400;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent'
      }
    });
    renderRef.current = render;

    // Boundaries
    const ground = Bodies.rectangle(width / 2, height + 30, width, 60, { isStatic: true });
    const wallLeft = Bodies.rectangle(-30, height / 2, 60, height, { isStatic: true });
    const wallRight = Bodies.rectangle(width + 30, height / 2, 60, height, { isStatic: true });

    Composite.add(engine.world, [ground, wallLeft, wallRight]);

    // Create skill blocks
    const blocks = SKILLS.map((skill, i) => {
      const x = Math.random() * (width - 150) + 75;
      const y = -150 - (i * 80); // Drop staggered from top
      return Bodies.rectangle(x, y, 140, 50, {
        chamfer: { radius: 10 },
        restitution: 0.6,
        friction: 0.1,
        render: {
          fillStyle: 'transparent',
          strokeStyle: 'transparent'
        }
      });
    });

    Composite.add(engine.world, blocks);

    // Mouse control (the render canvas catches mouse events)
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    Render.run(render);
    
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Animation loop to sync HTML elements to physics bodies
    let animationFrameId;
    const updatePositions = () => {
      blocks.forEach((block, i) => {
        const el = document.getElementById(`skill-block-${i}`);
        if (el) {
          el.style.transform = `translate(${block.position.x - 70}px, ${block.position.y - 25}px) rotate(${block.angle}rad)`;
        }
      });
      animationFrameId = requestAnimationFrame(updatePositions);
    };
    updatePositions();

    return () => {
      cancelAnimationFrame(animationFrameId);
      Render.stop(render);
      Runner.stop(runner);
      if (engineRef.current) Matter.Engine.clear(engineRef.current);
      if (renderRef.current && renderRef.current.canvas) {
        renderRef.current.canvas.remove();
      }
    };
  }, [isInView]);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tighter text-foreground mb-4">Tech Arsenal</h2>
        <p className="text-muted-foreground mb-12">Grab and throw the skills around!</p>

        <div className="w-full relative h-[400px] overflow-hidden bg-gray-50/50 rounded-3xl border border-border mx-auto max-w-4xl shadow-inner cursor-grab active:cursor-grabbing">
          {/* Matter.js canvas container */}
          <div ref={sceneRef} className="absolute inset-0 z-10" />
          
          {/* HTML Overlay for high-res text rendering */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {SKILLS.map((skill, i) => (
              <div 
                key={i}
                id={`skill-block-${i}`}
                className="absolute top-0 left-0 w-[140px] h-[50px] flex items-center justify-center font-bold text-sm rounded-[10px] shadow-sm pointer-events-none border border-black/10"
                style={{ 
                  backgroundColor: skill.bg, 
                  color: skill.color,
                  transform: `translate(-1000px, -1000px)`,
                  willChange: 'transform'
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>

          {!isInView && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm font-medium z-30">
              Scroll down to unleash the physics...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
