import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Type, Image as ImageIcon, Download, Save, Trash2, Move, Undo, Redo, Palette, Plus, Grid, ZoomIn, ZoomOut, Layers, AlertCircle, Sparkles, Copy, LayoutTemplate, Wand2, ArrowRight, X } from 'lucide-react';
import { generateAIImage } from '../services/aiService';

// Design Presets Configuration
const PRODUCT_PRESETS = {
    'visiting-card': { name: 'Visiting Card', width: 350, height: 200, bleed: 10, safe: 20 },
    'flyer-a5': { name: 'Flyer (A5)', width: 420, height: 595, bleed: 15, safe: 30 },
    'instagram-post': { name: 'Instagram Post', width: 500, height: 500, bleed: 0, safe: 0 },
    'banner-landscape': { name: 'Banner', width: 800, height: 300, bleed: 20, safe: 40 },
    't-shirt': { name: 'T-Shirt Print', width: 400, height: 500, bleed: 0, safe: 0 },
};

const CARD_SHAPES = {
    'rectangle': { label: 'Rectangle', class: 'rounded-none', square: false },
    'rounded': { label: 'Rounded', class: 'rounded-2xl', square: false },
    'leaf': { label: 'Leaf', class: 'rounded-tl-3xl rounded-br-3xl', square: false },
    'oval': { label: 'Oval', class: 'rounded-[100px]', square: false }, // elliptical
    'circle': { label: 'Circle', class: 'rounded-full', square: true },
    'square': { label: 'Square', class: 'rounded-none', square: true },
};

const FONT_FAMILIES = [
    { name: 'Arial', value: 'Arial, sans-serif', type: 'System' },
    { name: 'Times New Roman', value: '"Times New Roman", serif', type: 'System' },
    { name: 'Courier New', value: '"Courier New", monospace', type: 'System' },
    { name: 'Inter', value: 'Inter, sans-serif', type: 'Google' },
    { name: 'Roboto', value: 'Roboto, sans-serif', type: 'Google' },
    { name: 'Playfair Display', value: '"Playfair Display", serif', type: 'Google' },
    { name: 'Montserrat', value: 'Montserrat, sans-serif', type: 'Google' },
    { name: 'Oswald', value: 'Oswald, sans-serif', type: 'Google' },
    { name: 'Dancing Script', value: '"Dancing Script", cursive', type: 'Google' },
    { name: 'Lato', value: 'Lato, sans-serif', type: 'Google' },
];

const DESIGN_TEMPLATES = [
    {
        id: 'borcelle-luxury',
        name: 'Borcelle Luxury',
        bgColor: '#121212',
        front: [
            { id: 1, type: 'text', x: 145, y: 70, content: '∞', fontSize: 60, fontFamily: 'Inter, sans-serif', color: '#ffffff', fontWeight: 'bold' },
            { id: 2, type: 'text', x: 125, y: 140, content: 'Borcelle Inc.', fontSize: 18, fontFamily: 'Montserrat, sans-serif', color: '#ffffff', fontWeight: '500' }
        ],
        back: [
            { id: 1, type: 'text', x: 30, y: 80, content: '∞', fontSize: 40, fontFamily: 'Inter, sans-serif', color: '#ffffff', fontWeight: 'bold' },
            { id: 2, type: 'text', x: 20, y: 130, content: 'Borcelle Inc.', fontSize: 14, fontFamily: 'Montserrat, sans-serif', color: '#ffffff', fontWeight: '500' },
            { id: 3, type: 'text', x: 200, y: 60, content: 'Jackson Lee', fontSize: 24, fontFamily: 'Montserrat, sans-serif', color: '#ffffff', fontWeight: 'bold' },
            { id: 4, type: 'text', x: 200, y: 90, content: 'General Manager', fontSize: 12, fontFamily: 'Inter, sans-serif', color: '#cccccc' },
            { id: 5, type: 'text', x: 200, y: 130, content: '📞 +123-456-7890', fontSize: 10, fontFamily: 'Inter, sans-serif', color: '#ffffff' },
            { id: 6, type: 'text', x: 200, y: 150, content: '📍 123 Anywhere St., Any City', fontSize: 10, fontFamily: 'Inter, sans-serif', color: '#ffffff' },
            { id: 7, type: 'text', x: 200, y: 170, content: '✉ hello@reallygreatsite.com', fontSize: 10, fontFamily: 'Inter, sans-serif', color: '#ffffff' }
        ]
    },
    {
        id: 'modern-minimal',
        name: 'Modern Minimal',
        bgColor: '#ffffff',
        front: [
            { id: 1, type: 'text', x: 20, y: 80, content: 'JOHN DOE', fontSize: 24, fontFamily: 'Glacial Indifference, sans-serif', color: '#000000', fontWeight: 'bold' },
            { id: 2, type: 'text', x: 20, y: 110, content: 'Creative Director', fontSize: 14, fontFamily: 'Inter, sans-serif', color: '#666666' },
            { id: 3, type: 'text', x: 20, y: 150, content: '+1 234 567 890', fontSize: 12, fontFamily: 'Inter, sans-serif', color: '#333333' },
            { id: 4, type: 'text', x: 20, y: 170, content: 'john@example.com', fontSize: 12, fontFamily: 'Inter, sans-serif', color: '#333333' }
        ],
        back: []
    },
    {
        id: 'dark-elegance',
        name: 'Dark Elegance',
        bgColor: '#1a1a1a',
        front: [
            { id: 1, type: 'text', x: 150, y: 80, content: 'LUXE STUDIO', fontSize: 28, fontFamily: '"Playfair Display", serif', color: '#fbbf24', fontWeight: 'bold' },
            { id: 2, type: 'text', x: 110, y: 120, content: 'Premium Design Services', fontSize: 12, fontFamily: 'Montserrat, sans-serif', color: '#d1d5db' },
            { id: 3, type: 'text', x: 120, y: 160, content: 'www.luxestudio.com', fontSize: 10, fontFamily: 'Montserrat, sans-serif', color: '#9ca3af' }
        ],
        back: []
    },
    {
        id: 'tech-corp',
        name: 'Tech Corp',
        bgColor: '#eff6ff',
        front: [
            { id: 1, type: 'text', x: 30, y: 40, content: 'FUTURA', fontSize: 32, fontFamily: 'Roboto, sans-serif', color: '#2563eb', fontWeight: '900' },
            { id: 2, type: 'text', x: 30, y: 80, content: 'SYSTEMS', fontSize: 32, fontFamily: 'Roboto, sans-serif', color: '#1e40af', fontWeight: '900' },
            { id: 3, type: 'text', x: 30, y: 140, content: 'Alex Smith', fontSize: 18, fontFamily: 'Inter, sans-serif', color: '#111827' },
            { id: 4, type: 'text', x: 30, y: 165, content: 'Senior Developer', fontSize: 12, fontFamily: 'Inter, sans-serif', color: '#4b5563' }
        ],
        back: []
    },
    {
        id: 'artistic-vibe',
        name: 'Artistic Vibe',
        bgColor: '#fef2f2',
        front: [
            { id: 1, type: 'text', x: 100, y: 70, content: 'Sarah Kay', fontSize: 36, fontFamily: '"Dancing Script", cursive', color: '#dc2626' },
            { id: 2, type: 'text', x: 80, y: 120, content: 'Watercolor Artist', fontSize: 14, fontFamily: 'Lato, sans-serif', color: '#7f1d1d' },
            { id: 3, type: 'text', x: 110, y: 160, content: '@sarahart', fontSize: 12, fontFamily: 'Lato, sans-serif', color: '#991b1b' }
        ],
        back: []
    },
    {
        id: 'larana-eco',
        name: 'Larana Eco',
        bgColor: '#ffffff',
        front: [
            { id: 1, type: 'text', x: 230, y: 40, content: '✿', fontSize: 60, fontFamily: 'Inter, sans-serif', color: '#8FB168' },
            { id: 2, type: 'text', x: 180, y: 105, content: 'Larana, Inc.', fontSize: 24, fontFamily: 'Montserrat, sans-serif', color: '#1B3022', fontWeight: 'bold' },
            { id: 3, type: 'text', x: 180, y: 145, content: 'reallygreatsite.com', fontSize: 10, fontFamily: 'Inter, sans-serif', color: '#8FB168' }
        ],
        back: [
            { id: 1, type: 'text', x: 25, y: 35, content: 'Avery Davis', fontSize: 22, fontFamily: 'Montserrat, sans-serif', color: '#8FB168', fontWeight: 'bold' },
            { id: 2, type: 'text', x: 25, y: 65, content: 'Director', fontSize: 12, fontFamily: 'Inter, sans-serif', color: '#555555' },
            { id: 3, type: 'text', x: 25, y: 140, content: '✿', fontSize: 30, fontFamily: 'Inter, sans-serif', color: '#8FB168' },
            { id: 4, type: 'text', x: 25, y: 175, content: 'Larana, Inc.', fontSize: 14, fontFamily: 'Montserrat, sans-serif', color: '#1B3022', fontWeight: 'bold' },
            { id: 5, type: 'text', x: 160, y: 80, content: '📞 +123-456-7890', fontSize: 10, fontFamily: 'Inter, sans-serif', color: '#1B3022' },
            { id: 6, type: 'text', x: 160, y: 110, content: '🌐 www.reallygreatsite.com', fontSize: 10, fontFamily: 'Inter, sans-serif', color: '#1B3022' },
            { id: 7, type: 'text', x: 160, y: 140, content: '📍 123 Anywhere St., Any City', fontSize: 10, fontFamily: 'Inter, sans-serif', color: '#1B3022' }
        ]
    }
];

const DesignEditor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const initialServiceName = location.state?.serviceName || 'Custom Print';
    const canvasRef = useRef(null);

    // Load Google Fonts
    useEffect(() => {
        const linkId = 'google-fonts-link';
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link');
            link.id = linkId;
            link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Inter:wght@400;700&family=Lato:wght@400;700&family=Montserrat:wght@400;700&family=Oswald:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    }, []);

    // --- Global State ---
    const [activePreset, setActivePreset] = useState('visiting-card');

    // Page Management (Front/Back)
    const [activeSide, setActiveSide] = useState('front'); // 'front' or 'back'
    const [pages, setPages] = useState({ front: [], back: [] });

    // Current Side State (Synced with pages[activeSide])
    const [elements, setElements] = useState([]);

    // Customization State
    const [cardShape, setCardShape] = useState('rectangle');

    const [selectedId, setSelectedId] = useState(null);
    const [history, setHistory] = useState([[]]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [showGrid, setShowGrid] = useState(true);
    const [showSafeZone, setShowSafeZone] = useState(true);
    const [bgColor, setBgColor] = useState('#ffffff');
    const [isDragging, setIsDragging] = useState(false);
    const [isAIModalOpen, setIsAIModalOpen] = useState(false);
    const [aiMode, setAiMode] = useState('layout'); // 'layout' or 'image'
    const [aiPrompt, setAiPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    // --- Derived State ---
    const basePreset = PRODUCT_PRESETS[activePreset];
    const isCard = activePreset === 'visiting-card';
    const shapeConfig = CARD_SHAPES[cardShape];

    // Calculate dynamic dimensions based on shape
    const canvasDims = {
        width: (isCard && shapeConfig.square) ? 300 : basePreset.width,
        height: (isCard && shapeConfig.square) ? 300 : basePreset.height,
    };

    const selectedElement = elements.find(el => el.id === selectedId);

    // --- Side Switching Logic ---
    const handleSideSwitch = (newSide) => {
        if (newSide === activeSide) return;

        // Save current state to pages store
        const updatedPages = { ...pages, [activeSide]: elements };
        setPages(updatedPages);

        // Load new state
        setActiveSide(newSide);
        setElements(updatedPages[newSide]);
        setSelectedId(null);
        setHistory([updatedPages[newSide]]); // Reset history for simplicity on switch
        setHistoryIndex(0);
    };

    // --- Actions ---

    const addToHistory = (newElements) => {
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(JSON.parse(JSON.stringify(newElements)));
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);

        // Sync with pages store immediately to prevent data loss on unintended switches
        setPages(p => ({ ...p, [activeSide]: newElements }));
    };

    const handleElementUpdate = (id, updates) => {
        const newElements = elements.map(el => el.id === id ? { ...el, ...updates } : el);
        setElements(newElements);
        addToHistory(newElements);
    };

    const addElement = (type, payload = {}) => {
        const centerX = canvasDims.width / 2;
        const centerY = canvasDims.height / 2;

        const newElement = {
            id: Date.now(),
            type,
            x: centerX - 50,
            y: centerY - 20,
            rotation: 0,
            zIndex: elements.length + 1,
            ...payload
        };

        if (type === 'text') {
            newElement.content = 'Double Click to Edit';
            newElement.fontSize = 24;
            newElement.fontFamily = FONT_FAMILIES[0].value;
            newElement.color = '#000000';
            newElement.fontWeight = 'normal';
            newElement.width = 'auto';
        } else if (type === 'image') {
            newElement.width = 150;
            newElement.height = 'auto';
        }

        const newElements = [...elements, newElement];
        setElements(newElements);
        setSelectedId(newElement.id);
        addToHistory(newElements);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                addElement('image', { src: event.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const loadTemplate = (template) => {
        if (elements.length > 0 || pages.back.length > 0) {
            if (!window.confirm("This will replace your current design (both sides). Are you sure?")) return;
        }

        const remapElements = (els) => (els || []).map(el => ({
            ...el,
            id: Date.now() + Math.random(), // New IDs to avoid conflicts
            zIndex: el.zIndex || 10,
            rotation: 0
        }));

        const frontElements = remapElements(template.front || template.elements);
        const backElements = remapElements(template.back);

        setBgColor(template.bgColor);

        const newPages = { front: frontElements, back: backElements };
        setPages(newPages);

        // Update current visible elements
        setElements(newPages[activeSide]);
        addToHistory(newPages[activeSide]);

        // Reset specific states
        setSelectedId(null);
    };

    const handleAIGenerate = async () => {
        if (!aiPrompt.trim()) return;
        setIsGenerating(true);

        try {
            if (aiMode === 'image') {
                // Real AI Image Generation
                const imageUrl = await generateAIImage(aiPrompt);
                addElement('image', { src: imageUrl, width: 300, height: 'auto' });
            } else {
                // Mock Layout Generation (Existing Logic)
                await new Promise(resolve => setTimeout(resolve, 1500));

                const lowerPrompt = aiPrompt.toLowerCase();
                let newElements = [];
                let bgColor = '#ffffff';
                const centerY = canvasDims.height / 2;
                const centerX = canvasDims.width / 2;

                // 1. Theme Extraction (Background)
                if (lowerPrompt.includes('dark') || lowerPrompt.includes('black') || lowerPrompt.includes('luxury')) bgColor = '#1a1a1a';
                if (lowerPrompt.includes('blue') || lowerPrompt.includes('tech') || lowerPrompt.includes('corporate')) bgColor = '#eff6ff';
                if (lowerPrompt.includes('green') || lowerPrompt.includes('nature') || lowerPrompt.includes('eco')) bgColor = '#f0fdf4';
                if (lowerPrompt.includes('red') || lowerPrompt.includes('food') || lowerPrompt.includes('sale')) bgColor = '#fef2f2';
                if (lowerPrompt.includes('yellow') || lowerPrompt.includes('bright') || lowerPrompt.includes('kids')) bgColor = '#fefce8';

                // 2. Content Generation logic
                // Title
                newElements.push({
                    id: Date.now(),
                    type: 'text',
                    x: centerX - 100,
                    y: centerY - 80,
                    content: lowerPrompt.includes('coffee') ? 'The Daily Brew' :
                        lowerPrompt.includes('tech') ? 'Future Systems' :
                            lowerPrompt.includes('sale') ? 'MEGA SALE' : 'Company Name',
                    fontSize: 32,
                    fontFamily: lowerPrompt.includes('tech') ? 'Roboto, sans-serif' :
                        lowerPrompt.includes('coffee') ? '"Dancing Script", cursive' :
                            'Montserrat, sans-serif',
                    color: bgColor === '#1a1a1a' ? '#fbbf24' : '#111827',
                    width: 'auto',
                    zIndex: 1,
                    rotation: 0
                });

                // Subtitle
                newElements.push({
                    id: Date.now() + 1,
                    type: 'text',
                    x: centerX - 80,
                    y: centerY - 30,
                    content: lowerPrompt.includes('coffee') ? 'Freshly Roasted • Open Daily' :
                        lowerPrompt.includes('tech') ? 'Innovating Tomorrow' :
                            lowerPrompt.includes('sale') ? 'Up to 50% Off' : 'Tagline Goes Here',
                    fontSize: 16,
                    fontFamily: 'Inter, sans-serif',
                    color: bgColor === '#1a1a1a' ? '#9ca3af' : '#4b5563',
                    width: 'auto',
                    zIndex: 2,
                    rotation: 0
                });

                // Contact Info (Bottom)
                newElements.push({
                    id: Date.now() + 2,
                    type: 'text',
                    x: centerX - 90,
                    y: centerY + 60,
                    content: '+91 98765 43210  |  www.example.com',
                    fontSize: 12,
                    fontFamily: 'Arial, sans-serif',
                    color: bgColor === '#1a1a1a' ? '#d1d5db' : '#6b7280',
                    width: 'auto',
                    zIndex: 3,
                    rotation: 0
                });

                setBgColor(bgColor);
                setElements(newElements);
                addToHistory(newElements);
            }
        } catch (error) {
            alert("AI Generation Failed: " + error.message);
        } finally {
            setAiPrompt("");
            setIsGenerating(false);
            setIsAIModalOpen(false);
        }
    };

    // --- Mouse / Drag Handlers ---

    const handleMouseDown = (e, id) => {
        e.stopPropagation();
        setSelectedId(id);
        setIsDragging(true);
        const element = elements.find(el => el.id === id);
        if (element) {
            setDragStart({
                x: (e.clientX / zoom) - element.x,
                y: (e.clientY / zoom) - element.y
            });
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging && selectedId) {
            const newX = (e.clientX / zoom) - dragStart.x;
            const newY = (e.clientY / zoom) - dragStart.y;

            setElements(elements.map(el =>
                el.id === selectedId ? { ...el, x: newX, y: newY } : el
            ));
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            addToHistory(elements);
        }
    };

    // --- Layout Helpers ---
    const GridOverlay = () => (
        <div
            className="absolute inset-0 pointer-events-none opacity-20 rounded-inherit"
            style={{
                backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}
        />
    );

    const SafeZoneOverlay = ({ width, height, safe, bleed }) => (
        <>
            <div
                className="absolute border border-red-400 border-dashed pointer-events-none opacity-50 z-50"
                style={{ left: -bleed, top: -bleed, right: -bleed, bottom: -bleed }}
            ></div>
            <div
                className="absolute border border-green-500 border-dashed pointer-events-none opacity-50 z-50"
                style={{ left: safe, top: safe, right: safe, bottom: safe }}
            ></div>
        </>
    );

    return (
        <div className="h-screen bg-gray-100 flex flex-col overflow-hidden" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>

            {/* 1. Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-20 shadow-sm gap-4">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-gray-900 leading-tight">Design Studio</h1>
                        <select
                            value={activePreset}
                            onChange={(e) => { setActivePreset(e.target.value); setCardShape('rectangle'); }}
                            className="text-xs text-indigo-600 font-medium bg-transparent border-none p-0 cursor-pointer focus:ring-0"
                        >
                            {Object.entries(PRODUCT_PRESETS).map(([key, val]) => (
                                <option key={key} value={key}>{val.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button onClick={() => setZoom(z => Math.max(0.5, z - 0.1))} className="p-1.5 hover:bg-white rounded shadow-sm"><ZoomOut className="w-4 h-4" /></button>
                    <span className="text-xs font-mono w-12 text-center">{Math.round(zoom * 100)}%</span>
                    <button onClick={() => setZoom(z => Math.min(3, z + 0.1))} className="p-1.5 hover:bg-white rounded shadow-sm"><ZoomIn className="w-4 h-4" /></button>
                </div>

                {/* Finish Action */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowGrid(!showGrid)}
                        className={`p-2 rounded ${showGrid ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-gray-100 text-gray-500'}`}
                    >
                        <Grid className="w-5 h-5" />
                    </button>
                    <button
                        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 shadow-md transition"
                        onClick={() => {
                            const text = `New Order: ${basePreset.name} (${cardShape}).\nFront Elements: ${pages.front.length}\nBack Elements: ${pages.back.length}`;
                            window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, '_blank');
                        }}
                    >
                        <Save className="w-4 h-4" />
                        Finish & Order
                    </button>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">

                {/* 2. Sidebar Tools */}
                <div className="w-72 bg-white border-r border-gray-200 flex flex-col z-10 overflow-y-auto shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
                    <div className="p-5 space-y-6">

                        {/* Insert Tools */}
                        <section>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Insert</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <button onClick={() => addElement('text')} className="tool-btn flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-indigo-50 hover:border-indigo-200 transition group">
                                    <Type className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 mb-2" />
                                    <span className="text-xs font-medium text-gray-700">Text Box</span>
                                </button>
                                <label className="tool-btn flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-indigo-50 hover:border-indigo-200 transition group cursor-pointer">
                                    <ImageIcon className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 mb-2" />
                                    <span className="text-xs font-medium text-gray-700">Upload Image</span>
                                    <input type="file" className="hidden" onChange={handleImageUpload} />
                                </label>
                            </div>

                            {/* AI Tools */}
                            <div className="space-y-2 mt-3">
                                <button
                                    onClick={() => { setAiMode('layout'); setIsAIModalOpen(true); }}
                                    className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group"
                                >
                                    <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                                    <span className="text-sm font-bold">Auto-Layout AI</span>
                                </button>
                                <button
                                    onClick={() => { setAiMode('image'); setIsAIModalOpen(true); }}
                                    className="w-full flex items-center justify-center gap-2 p-3 bg-white border border-indigo-100 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all font-medium"
                                >
                                    <Wand2 className="w-4 h-4" />
                                    <span className="text-sm">Generate AI Image</span>
                                </button>
                            </div>
                        </section>

                        {/* Shape Selector (Only for Visiting Cards) */}
                        {isCard && !selectedElement && (
                            <section>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <Sparkles className="w-3 h-3 text-indigo-500" />
                                    Card Shape
                                </h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {Object.entries(CARD_SHAPES).map(([key, config]) => (
                                        <button
                                            key={key}
                                            onClick={() => setCardShape(key)}
                                            className={`p-2 rounded-lg border text-xs font-medium transition-all ${cardShape === key
                                                ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-500'
                                                : 'border-gray-200 text-gray-600 hover:border-indigo-200'
                                                }`}
                                        >
                                            <div className={`w-6 h-4 mx-auto mb-1 bg-current opacity-20 ${config.class} border border-current`}></div>
                                            {config.label}
                                        </button>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Properties Panel */}
                        <section className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    {selectedElement ? 'Element Properties' : 'Canvas Settings'}
                                </h3>
                                {selectedElement && (
                                    <button onClick={() => {
                                        const newElements = elements.filter(el => el.id !== selectedId);
                                        setElements(newElements);
                                        setSelectedId(null);
                                        addToHistory(newElements);
                                    }} className="text-red-500 hover:bg-red-50 p-1.5 rounded transition">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {selectedElement ? (
                                <div className="space-y-4 animate-slide-up">
                                    {/* Position */}
                                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <label className="text-[10px] text-gray-500">X Position</label>
                                                <input type="number" value={Math.round(selectedElement.x)} onChange={(e) => handleElementUpdate(selectedElement.id, { x: parseInt(e.target.value) })} className="w-full text-xs p-1 rounded border-gray-200" />
                                            </div>
                                            <div>
                                                <label className="text-[10px] text-gray-500">Y Position</label>
                                                <input type="number" value={Math.round(selectedElement.y)} onChange={(e) => handleElementUpdate(selectedElement.id, { y: parseInt(e.target.value) })} className="w-full text-xs p-1 rounded border-gray-200" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Props */}
                                    {selectedElement.type === 'text' && (
                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-xs font-medium text-gray-600">Content</label>
                                                <textarea
                                                    value={selectedElement.content}
                                                    onChange={(e) => handleElementUpdate(selectedElement.id, { content: e.target.value })}
                                                    className="w-full mt-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                                    rows={2}
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs font-medium text-gray-600 block mb-1">Typography</label>

                                                {/* Font Family Selector */}
                                                <select
                                                    value={selectedElement.fontFamily}
                                                    onChange={(e) => handleElementUpdate(selectedElement.id, { fontFamily: e.target.value })}
                                                    className="w-full text-xs p-2 mb-2 bg-white border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-indigo-500"
                                                >
                                                    {FONT_FAMILIES.map(font => (
                                                        <option key={font.name} value={font.value} style={{ fontFamily: font.value }}>
                                                            {font.name}
                                                        </option>
                                                    ))}
                                                </select>

                                                <div className="flex gap-2">
                                                    <input type="number" value={selectedElement.fontSize} onChange={(e) => handleElementUpdate(selectedElement.id, { fontSize: parseInt(e.target.value) })} className="w-16 text-sm p-2 bg-white border border-gray-200 rounded-lg" />
                                                    <div className="flex-1 flex items-center px-2 bg-white border border-gray-200 rounded-lg">
                                                        <input type="color" value={selectedElement.color} onChange={(e) => handleElementUpdate(selectedElement.id, { color: e.target.value })} className="w-6 h-6 border-none p-0 cursor-pointer" />
                                                        <span className="text-xs text-gray-500 ml-2 font-mono uppercase">{selectedElement.color}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Image Props */}
                                    {selectedElement.type === 'image' && (
                                        <div>
                                            <label className="text-xs font-medium text-gray-600">Width (px)</label>
                                            <input
                                                type="range" min="50" max="600"
                                                value={parseInt(selectedElement.width)}
                                                onChange={(e) => handleElementUpdate(selectedElement.id, { width: parseInt(e.target.value) })}
                                                className="w-full mt-2 accent-indigo-600"
                                            />
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {/* Background Color */}
                                    <div>
                                        <label className="text-xs font-medium text-gray-600 mb-2 block">Background Color</label>
                                        <div className="flex flex-wrap gap-2">
                                            {['#ffffff', '#000000', '#f3f4f6', '#fee2e2', '#e0e7ff', '#dcfce7'].map(color => (
                                                <button
                                                    key={color}
                                                    onClick={() => setBgColor(color)}
                                                    className={`w-8 h-8 rounded-full border shadow-sm transition transform hover:scale-110 ${bgColor === color ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Guidelines */}
                                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                                        <div className="flex gap-2 items-start">
                                            <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                                            <div>
                                                <h4 className="text-xs font-bold text-yellow-800 mb-1">Safety Guide</h4>
                                                <p className="text-[10px] text-yellow-700">
                                                    Red line = Cut line (Bleed). Green line = Safe zone.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-3 space-y-2">
                                            <label className="flex items-center gap-2 text-xs text-gray-600">
                                                <input type="checkbox" checked={showSafeZone} onChange={(e) => setShowSafeZone(e.target.checked)} className="rounded text-indigo-600" />
                                                Show Safe Zones
                                            </label>
                                            <label className="flex items-center gap-2 text-xs text-gray-600">
                                                <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} className="rounded text-indigo-600" />
                                                Show Grid Alignment
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>
                </div>

                {/* 3. Infinite Workspace & Templates Container */}
                <div className="flex-1 bg-gray-200 overflow-hidden relative flex flex-col">

                    {/* Canvas Area (Top 70%) */}
                    <div className="flex-1 overflow-hidden relative flex flex-col items-center justify-center">

                        {/* Side Toggles (Front/Back) */}
                        {isCard && (
                            <div className="absolute top-6 z-10 bg-white p-1 rounded-full shadow-lg flex gap-1 border border-gray-200">
                                <button
                                    onClick={() => handleSideSwitch('front')}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeSide === 'front' ? 'bg-indigo-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    Front Side
                                </button>
                                <button
                                    onClick={() => handleSideSwitch('back')}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeSide === 'back' ? 'bg-indigo-600 text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    Back Side
                                </button>
                            </div>
                        )}

                        {/* Active Artboard */}
                        <div className="relative cursor-grab active:cursor-grabbing p-12 overflow-visible">
                            <div
                                className={`relative bg-white shadow-2xl transition-all duration-300 ease-out origin-center overflow-hidden ${isCard ? CARD_SHAPES[cardShape].class : ''}`}
                                onClick={() => setSelectedId(null)}
                                style={{
                                    width: canvasDims.width,
                                    height: canvasDims.height,
                                    backgroundColor: bgColor,
                                    transform: `scale(${zoom})`,
                                }}
                            >
                                {showGrid && <GridOverlay />}
                                {showSafeZone && <SafeZoneOverlay {...basePreset} />}

                                {/* Render Elements */}
                                {elements.map(el => (
                                    <div
                                        key={el.id}
                                        onMouseDown={(e) => handleMouseDown(e, el.id)}
                                        // Handle Double Click for Text Editing
                                        onDoubleClick={(e) => {
                                            e.stopPropagation();
                                            if (el.type === 'text') {
                                                // Simple prompt for quick editing, or we could focus sidebar
                                                const newText = window.prompt("Edit Text:", el.content);
                                                if (newText !== null) handleElementUpdate(el.id, { content: newText });
                                            }
                                        }}
                                        className={`absolute cursor-move select-none group ${selectedId === el.id ? 'z-50' : ''}`}
                                        style={{
                                            left: el.x,
                                            top: el.y,
                                            width: el.type === 'image' ? el.width : 'auto',
                                            zIndex: el.zIndex,
                                        }}
                                    >
                                        {/* Selecting Element Toolbar */}
                                        {selectedId === el.id && (
                                            <div
                                                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border border-gray-200 rounded-lg flex items-center p-1 gap-1 z-[60] whitespace-nowrap"
                                                onMouseDown={(e) => e.stopPropagation()} // Prevent drag when clicking toolbar
                                            >
                                                <button
                                                    className="p-1.5 hover:bg-gray-100 rounded text-gray-600 hover:text-indigo-600"
                                                    title="Edit Text"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (el.type === 'text') {
                                                            const newText = window.prompt("Edit Text:", el.content);
                                                            if (newText !== null) handleElementUpdate(el.id, { content: newText });
                                                        }
                                                    }}
                                                >
                                                    {el.type === 'text' ? <Type size={14} /> : <ImageIcon size={14} />}
                                                </button>
                                                <div className="w-px h-4 bg-gray-200 mx-0.5"></div>
                                                <button
                                                    className="p-1.5 hover:bg-gray-100 rounded text-gray-600"
                                                    title="Bring to Front"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleElementUpdate(el.id, { zIndex: Math.max(...elements.map(e => e.zIndex)) + 1 });
                                                    }}
                                                >
                                                    <Layers size={14} />
                                                </button>
                                                <button
                                                    className="p-1.5 hover:bg-gray-100 rounded text-gray-600"
                                                    title="Duplicate"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        addElement(el.type, { ...el, id: undefined, x: el.x + 20, y: el.y + 20, zIndex: elements.length + 1 });
                                                    }}
                                                >
                                                    <Copy size={14} />
                                                </button>
                                                <div className="w-px h-4 bg-gray-200 mx-0.5"></div>
                                                <button
                                                    className="p-1.5 hover:bg-red-50 rounded text-red-500 hover:text-red-600"
                                                    title="Delete Element"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        const newElements = elements.filter(item => item.id !== el.id);
                                                        setElements(newElements);
                                                        setSelectedId(null);
                                                        addToHistory(newElements);
                                                    }}
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        )}

                                        {el.type === 'text' ? (
                                            <div
                                                className={`px-2 py-1 leading-none whitespace-nowrap border-2 ${selectedId === el.id ? 'border-indigo-500' : 'border-transparent hover:border-indigo-200 dashed'}`}
                                                style={{
                                                    color: el.color,
                                                    fontSize: el.fontSize,
                                                    fontFamily: el.fontFamily
                                                }}
                                            >
                                                {el.content}
                                            </div>
                                        ) : (
                                            <div className={`relative ${selectedId === el.id ? 'ring-2 ring-indigo-500' : ''}`}>
                                                <img src={el.src} alt="" className="w-full h-auto block pointer-events-none" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Zoom & Dimensions Badge */}
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-200 text-gray-400 text-[10px] font-mono shadow-sm z-20">
                                {canvasDims.width}px x {canvasDims.height}px
                            </div>
                        </div>
                    </div>

                    {/* 4. Bottom Template Panel (Bottom 30%) */}
                    <div className="h-[30%] bg-white border-t border-gray-200 z-10 flex flex-col shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-indigo-50 rounded-lg">
                                    <LayoutTemplate className="w-4 h-4 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-800">Design Templates</h3>
                                    <p className="text-[10px] text-gray-500">Choose a professional starting point</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md border border-indigo-100">
                                    {DESIGN_TEMPLATES.length} Designs Available
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-x-auto custom-scrollbar p-6 flex gap-6 items-start">
                            {DESIGN_TEMPLATES.map(template => (
                                <button
                                    key={template.id}
                                    onClick={() => loadTemplate(template)}
                                    className="min-w-[240px] group text-left transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div
                                        className="w-full aspect-[1.75] rounded-xl shadow-md border border-gray-200 group-hover:border-indigo-500 group-hover:ring-4 group-hover:ring-indigo-50 transition-all relative overflow-hidden mb-3 bg-white"
                                        style={{ backgroundColor: template.bgColor }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        {/* Mini Preview of Elements - Scaled to Fit */}
                                        <div className="absolute inset-0 origin-top-left transform scale-[0.68] pointer-events-none p-4">
                                            {(template.front || template.elements || []).slice(0, 5).map((el, idx) => (
                                                <div
                                                    key={idx}
                                                    className="absolute whitespace-nowrap opacity-90"
                                                    style={{
                                                        left: el.x,
                                                        top: el.y,
                                                        color: el.color,
                                                        fontFamily: el.fontFamily.split(',')[0],
                                                        fontSize: el.fontSize,
                                                        fontWeight: el.fontWeight || 'normal',
                                                        textShadow: el.color === '#ffffff' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                                                    }}
                                                >
                                                    {el.content}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between px-1">
                                        <span className="text-xs font-bold text-gray-700 group-hover:text-indigo-600 transition-colors">
                                            {template.name}
                                        </span>
                                        <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-indigo-400 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Prompt Modal */}
            {isAIModalOpen && (
                <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up border border-white/20">
                        <div className={`p-8 bg-gradient-to-br ${aiMode === 'image' ? 'from-rose-500 via-pink-600 to-fuchsia-700' : 'from-indigo-600 via-purple-600 to-indigo-800'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                                    {aiMode === 'image' ? <Wand2 className="w-6 h-6 text-white" /> : <Sparkles className="w-6 h-6 text-yellow-300" />}
                                </div>
                                <button onClick={() => setIsAIModalOpen(false)} className="text-white/60 hover:text-white transition">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                {aiMode === 'image' ? 'AI Image Generator' : 'AI Layout Designer'}
                            </h2>
                            <p className="text-white/80 text-sm mt-2 leading-relaxed">
                                {aiMode === 'image'
                                    ? "Describe your vision, and our neural engine will bring it to life as a high-quality asset for your design."
                                    : "Briefly explain your business or idea, and we'll craft a professional layout optimized for your brand."}
                            </p>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="space-y-3">
                                <label className="flex justify-between text-sm font-semibold text-gray-700">
                                    <span>Prompt Description</span>
                                    <span className="text-[10px] text-gray-400 font-mono">{aiPrompt.length}/500</span>
                                </label>
                                <textarea
                                    value={aiPrompt}
                                    onChange={(e) => setAiPrompt(e.target.value)}
                                    placeholder={aiMode === 'image' ? "E.g., A minimalist logo of a golden leaf with subtle gradients..." : "E.g., A luxury wedding planner business card with floral accents and serif typography..."}
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none bg-gray-50/50 min-h-[120px] text-sm resize-none transition-all placeholder:text-gray-400"
                                />
                            </div>

                            <div className="flex gap-4 pt-2">
                                <button
                                    onClick={() => setIsAIModalOpen(false)}
                                    className="px-6 py-4 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-all flex-[1]"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAIGenerate}
                                    disabled={!aiPrompt.trim() || isGenerating}
                                    className={`flex-[2.5] py-4 text-white font-bold rounded-2xl shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all duration-300 ${aiMode === 'image' ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-200 hover:shadow-rose-300' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200 hover:shadow-indigo-300'}`}
                                >
                                    {isGenerating ? (
                                        <>
                                            <span className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            <span>Crafting Magic...</span>
                                        </>
                                    ) : (
                                        <>
                                            {aiMode === 'image' ? <Wand2 className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                                            <span>Generate Design</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DesignEditor;
