import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Phone, MapPin, Clock, CreditCard } from 'lucide-react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! 👋 I'm Sam's AI Assistant. How can I help you with your printing needs today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const quickReplies = [
        { label: "Check Prices", icon: <CreditCard size={14} />, action: "pricing" },
        { label: "Location", icon: <MapPin size={14} />, action: "location" },
        { label: "Timings", icon: <Clock size={14} />, action: "timings" },
        { label: "WhatsApp Order", icon: <Phone size={14} />, action: "whatsapp" },
    ];

    const handleSend = (text) => {
        if (!text.trim()) return;

        // Add user message
        const userMsg = { id: Date.now(), text: text, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        // Simulate bot thinking time
        setTimeout(() => {
            const botResponse = generateResponse(text);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 1000);
    };

    const generateResponse = (text) => {
        const lowerText = text.toLowerCase();

        if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('rate')) {
            return "We offer competitive pricing! \n• Visiting Cards: Start at ₹299/500pcs\n• Flyers: Start at ₹2.5/pc\nCheck our Pricing section for more details.";
        }
        if (lowerText.includes('location') || lowerText.includes('where') || lowerText.includes('address')) {
            return "📍 We are located in Kada Agrahara, Bangalore. We serve Sarjapur Road and nearby areas with pickup and delivery options.";
        }
        if (lowerText.includes('time') || lowerText.includes('open') || lowerText.includes('hour')) {
            return "⏰ We are open Monday to Saturday, 9:00 AM - 8:00 PM. We are closed on Sundays.";
        }
        if (lowerText.includes('whatsapp') || lowerText.includes('order') || lowerText.includes('contact')) {
            return "📲 The fastest way to order is via WhatsApp! You can send us your design or requirements directly.";
        }
        if (lowerText.includes('hello') || lowerText.includes('hi')) {
            return "Hello! How can I assist you with your printing today?";
        }

        return "I'm a simple AI 🤖. For detailed queries or custom quotes, please message us on WhatsApp or call +91-XXXXXXXXXX.";
    };

    const handleQuickReply = (action) => {
        let text = "";
        switch (action) {
            case 'pricing': text = "What are your prices?"; break;
            case 'location': text = "Where are you located?"; break;
            case 'timings': text = "What are your timings?"; break;
            case 'whatsapp':
                window.open('https://wa.me/919999999999', '_blank');
                text = "I want to order via WhatsApp";
                break;
            default: return;
        }
        handleSend(text);
    };

    return (
        <>
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
                >
                    <MessageSquare className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">1</span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="text-xl">🤖</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Sam's Assistant</h3>
                                <p className="text-xs text-green-100 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span> Online
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 h-96 overflow-y-auto p-4 bg-gray-50/50 space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-green-600 text-white rounded-br-none'
                                            : 'bg-white border border-gray-100 text-gray-800 shadow-sm rounded-bl-none'
                                        }`}
                                >
                                    {msg.text.split('\n').map((line, i) => (
                                        <p key={i} className={i > 0 ? 'mt-1' : ''}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies */}
                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 overflow-x-auto">
                        <div className="flex gap-2">
                            {quickReplies.map((reply, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuickReply(reply.action)}
                                    className="flex items-center gap-1 whitespace-nowrap bg-white border border-green-200 text-green-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-50 transition-colors"
                                >
                                    {reply.icon} {reply.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(inputText); }}
                            className="flex gap-2"
                        >
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type your question..."
                                className="flex-1 bg-gray-100 text-sm rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 transition-all"
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim()}
                                className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;
