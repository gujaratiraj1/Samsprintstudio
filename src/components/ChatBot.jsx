import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Phone, MapPin, Clock, CreditCard, Info, HelpCircle } from 'lucide-react';
import { chatbotData } from '../data/chatbotData';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: `Hi! 👋 I'm Sam's AI Assistant. I can help you with pricing, services, and location details for ${chatbotData.businessName}. How can I help you today?`, sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const quickReplies = [
        { label: "Pricing", icon: <CreditCard size={14} />, action: "pricing" },
        { label: "Services", icon: <Info size={14} />, action: "services" },
        { label: "Location", icon: <MapPin size={14} />, action: "location" },
        { label: "Hours", icon: <Clock size={14} />, action: "timings" },
        { label: "How to Order", icon: <HelpCircle size={14} />, action: "order" },
    ];

    const generateResponse = (text) => {
        const lowerText = text.toLowerCase();

        // Helper for random responses
        const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

        // 0. Conversational Small Talk
        if (['hi', 'hello', 'hey', 'greetings', 'morning', 'afternoon'].some(w => lowerText.includes(w))) {
            return randomChoice([
                "Hello! 👋 How can I assist you with your printing needs today?",
                "Hi there! Welcome to Sam's Print Studio. What can I do for you?",
                "Hey! Looking for high-quality prints? I'm here to help!",
                "Greetings! 😊 How can use our services today?"
            ]);
        }

        if (['thank', 'thanks', 'thx', 'appreciate'].some(w => lowerText.includes(w))) {
            return randomChoice([
                "You're very welcome! Let me know if you need anything else. 😊",
                "Happy to help! Have a great day.",
                "Anytime! We look forward to serving you.",
                "Glad I could help! Don't hesitate to ask more questions."
            ]);
        }

        if (['bye', 'goodbye', 'see you', 'later'].some(w => lowerText.includes(w))) {
            return "Goodbye! 👋 Hope to see you soon at Sam's Print Studio.";
        }

        if (['cool', 'awesome', 'great', 'nice', 'good'].some(w => lowerText === w || lowerText.includes(` ${w}`))) {
            return randomChoice(["Glad you like it! 🚀", "Awesome! Let us know if you're ready to order.", "That's what we aim for! 🌟"]);
        }

        // 1. Check for specific Service matches
        for (const service of chatbotData.services) {
            if (service.keywords.some(kw => lowerText.includes(kw)) || lowerText.includes(service.name.toLowerCase())) {
                return `**${service.name}**\n${service.description}\n\n💰 **Pricing:** ${service.pricing}\n\nWould you like to get a custom quote or see design templates?`;
            }
        }

        // 2. Check for FAQ matches
        for (const faq of chatbotData.faqs) {
            if (faq.keywords.some(kw => lowerText.includes(kw)) || lowerText.includes(faq.question.toLowerCase())) {
                return faq.answer;
            }
        }

        // 3. Check for specific keywords (Semantic fallbacks)
        if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('rate') || lowerText.includes('how much')) {
            const serviceList = chatbotData.services.slice(0, 4).map(s => `• ${s.name}: ${s.pricing.split(',')[0]}`).join('\n');
            return `Here is a quick pricing overview for our popular items:\n${serviceList}\n\n...and many more! For bulk orders or custom sizes, message us on WhatsApp for the best rates!`;
        }

        if (lowerText.includes('service') || lowerText.includes('do you offer') || lowerText.includes('what do you do') || lowerText.includes('products')) {
            const serviceList = chatbotData.services.map(s => `• ${s.name}`).join('\n');
            return `We offer a wide range of printing services:\n${serviceList}\n\nWhich one are you interested in?`;
        }

        if (lowerText.includes('location') || lowerText.includes('where') || lowerText.includes('address') || lowerText.includes('area') || lowerText.includes('shop')) {
            return `📍 We are located in ${chatbotData.location}.\n\nWe serve Kada Agrahara, Sarjapur Road, and nearby areas with pickup and delivery options.`;
        }

        if (lowerText.includes('time') || lowerText.includes('open') || lowerText.includes('hour') || lowerText.includes('when')) {
            return `⏰ **Our Hours:**\n${chatbotData.operatingHours}`;
        }

        if (lowerText.includes('order') || lowerText.includes('buy') || lowerText.includes('contact') || lowerText.includes('whatsapp') || lowerText.includes('phone') || lowerText.includes('call')) {
            return `📲 The fastest way to order is via WhatsApp at ${chatbotData.contact.whatsapp}.\n\nYou can also call us or visit our studio during business hours.`;
        }

        if (lowerText.includes('feature') || lowerText.includes('quality') || lowerText.includes('why choose') || lowerText.includes('guarantee')) {
            const featureList = chatbotData.features.map(f => `• ${f}`).join('\n');
            return `Here's why customers choose **${chatbotData.businessName}**:\n${featureList}`;
        }

        // 4. Fallback
        return randomChoice([
            "I'm not sure I understand that completely. 🤖\n\nI can help you with **services**, **pricing**, **location**, or **how to order**. You can also chat with us directly on WhatsApp for complex queries!",
            "I'm still learning! Could you rephrase that? I can tell you about our prices, location, or services.",
            "Hmm, I didn't quite catch that. Do you want to know about our **pricing** or **location**?"
        ]);
    };

    const handleSend = (text) => {
        if (!text.trim()) return;

        const userMsg = { id: Date.now(), text: text, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = generateResponse(text);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 800);
    };

    const handleQuickReply = (action) => {
        let text = "";
        switch (action) {
            case 'pricing': text = "Tell me about your prices"; break;
            case 'services': text = "What services do you offer?"; break;
            case 'location': text = "Where are you located?"; break;
            case 'timings': text = "What are your business hours?"; break;
            case 'order': text = "How can I place an order?"; break;
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
                    className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center group"
                >
                    <MessageSquare className="w-6 h-6" />
                    <span className="absolute right-full mr-3 bg-white text-gray-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
                        Chat with us!
                    </span>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center font-bold">1</span>
                    </span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 max-h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 flex justify-between items-center text-white shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center ring-2 ring-white/30">
                                <span className="text-xl">🤖</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Sam's Smart Assistant</h3>
                                <p className="text-xs text-green-100 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span> Online & Ready
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white transition-colors bg-white/10 p-1.5 rounded-lg"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 min-h-[300px] overflow-y-auto p-4 bg-gray-50/50 space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-green-600 text-white rounded-br-none shadow-md'
                                        : 'bg-white border border-gray-100 text-gray-800 shadow-sm rounded-bl-none'
                                        }`}
                                >
                                    {msg.text.split('\n').map((line, i) => (
                                        <p key={i} className={i > 0 ? 'mt-2' : ''}>
                                            {line.startsWith('**') ? <strong>{line.replace(/\*\*/g, '')}</strong> : line}
                                        </p>
                                    ))}
                                    {msg.sender === 'bot' && msg.text.includes('WhatsApp') && (
                                        <button
                                            onClick={() => window.open(`https://wa.me/${chatbotData.contact.whatsapp.replace(/\D/g, '')}`, '_blank')}
                                            className="mt-3 w-full bg-green-50 text-green-700 border border-green-200 py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-100 transition-colors"
                                        >
                                            <Phone size={14} /> Chat on WhatsApp
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies */}
                    <div className="px-4 py-3 bg-white border-t border-gray-100 overflow-x-auto">
                        <div className="flex gap-2">
                            {quickReplies.map((reply, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuickReply(reply.action)}
                                    className="flex items-center gap-1.5 whitespace-nowrap bg-gray-50 border border-gray-200 text-gray-700 text-xs px-3 py-2 rounded-full hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-all shadow-sm"
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
                                placeholder="Ask about prices, services..."
                                className="flex-1 bg-gray-50 text-sm border border-gray-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all shadow-inner"
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim()}
                                className="bg-green-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-green-200 active:scale-95 shrink-0"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                        <p className="text-[10px] text-gray-400 text-center mt-2">
                            Real humans usually reply within minutes on WhatsApp.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;

