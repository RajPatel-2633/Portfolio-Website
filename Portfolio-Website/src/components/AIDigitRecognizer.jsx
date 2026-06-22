import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

export default function AIDigitRecognizer() {
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadModel() {
      try {
        const m = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mnist_transfer_cnn_v1/model.json');
        setModel(m);
        setLoading(false);
      } catch (e) {
        console.error("Failed to load model", e);
        setLoading(false);
      }
    }
    loadModel();
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setPrediction(null);
  };

  // Initialize canvas
  useEffect(() => {
    clearCanvas();
  }, []);

  const getCoordinates = (e) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    const rect = canvasRef.current.getBoundingClientRect();
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault(); // Prevent scrolling on touch
    const { x, y } = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(x, y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    predict();
  };

  const predict = async () => {
    if (!model || !canvasRef.current) return;
    
    // tf.tidy cleans up tensors to prevent memory leaks
    const result = tf.tidy(() => {
      // Get image data from canvas
      const tensor = tf.browser.fromPixels(canvasRef.current)
        .resizeBilinear([28, 28])
        .mean(2) // convert to grayscale
        .expandDims(2) // add channel dimension
        .expandDims(0) // add batch dimension
        .toFloat()
        .div(255.0);
        
      // Invert colors (MNIST is trained on white digits on black background)
      // Since we drew black on white, we invert: 1.0 - pixel
      const inverted = tf.scalar(1.0).sub(tensor);

      const predictions = model.predict(inverted);
      return predictions.dataSync();
    });
    
    // Find max probability
    let maxVal = -1;
    let maxIdx = -1;
    for (let i = 0; i < 10; i++) {
      if (result[i] > maxVal) {
        maxVal = result[i];
        maxIdx = i;
      }
    }
    
    // Only predict if there's actually a drawing (confidence > threshold or just output it)
    if (maxVal > 0.1) {
      setPrediction({ digit: maxIdx, confidence: maxVal * 100 });
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Info */}
        <div className="flex flex-col space-y-6">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 font-semibold text-xs rounded-full w-max">
            Live AI Demo
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
            In-Browser CNN Digit Recognizer
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I don't just build APIs; I run deep learning models entirely on the edge. 
            Draw a number (0-9) in the box, and a TensorFlow.js Convolutional Neural Network will process your drawing in real-time right inside your browser. No server required.
          </p>
          
          <div className="bg-gray-50 border border-border rounded-xl p-6 shadow-inner">
            <h3 className="font-bold text-foreground mb-4">Prediction Result</h3>
            {prediction ? (
              <div className="flex items-center space-x-6">
                <div className="text-7xl font-black text-primary">{prediction.digit}</div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-muted-foreground">Confidence</span>
                  <span className="text-2xl font-bold text-green-600">{prediction.confidence.toFixed(1)}%</span>
                </div>
              </div>
            ) : (
              <div className="text-4xl font-bold text-gray-300">?</div>
            )}
          </div>
        </div>

        {/* Right Side: Canvas */}
        <div className="flex flex-col items-center">
          <div className="bg-white border-4 border-gray-200 rounded-3xl shadow-xl overflow-hidden relative">
            {loading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2" />
                <span className="text-sm font-semibold text-primary">Loading CNN Weights...</span>
              </div>
            )}
            <canvas
              ref={canvasRef}
              width={300}
              height={300}
              className="touch-none cursor-crosshair bg-white"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
          </div>
          <div className="mt-6 flex space-x-4">
            <button 
              onClick={clearCanvas}
              className="px-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              Clear Canvas
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
