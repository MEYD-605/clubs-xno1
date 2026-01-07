import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Clock, MapPin, Camera, CreditCard } from 'lucide-react';

const faqData = [
    {
        question: "ส่งรูปไวแค่ไหน? ต้องรอกี่วัน?",
        answer: "ที่ ClubsxAI เรายึดถือ 'เวลา' เป็นอธิปไตยสูงสุด เราส่งรูปด่วนภายใน 24 ชม. (วันถัดไป) หลังจบงานครับ บอสไม่ต้องรอนานเป็นเดือนเหมือนที่อื่นแน่นอน",
        icon: <Clock className="w-5 h-5" />
    },
    {
        question: "มีการแต่งรูป หรือรีทัชหน้าเนียนให้ไหม?",
        answer: "เราปรับแสงสี (Color Grading) ให้พรีเมียมทุกใบ และรีทัชใบหน้า (หน้าเนียน/เรียว) ให้เป็นธรรมชาติทุกใบในเซ็ตครับ เพราะเราไม่ได้แค่ถ่ายรูป แต่เราสถาปนาภาพลักษณ์ของคุณ",
        icon: <Sparkles className="w-5 h-5" />
    },
    {
        question: "ต้องเช็คคิวและวางมัดจำอย่างไร?",
        answer: "บอสสามารถเช็คคิวผ่าน Line หรือ Contact Form ได้เลยครับ การล็อคคิวจะนับเมื่อมีการมัดจำ ส่วนที่เหลือสามารถชำระได้หน้างานหลังจบเซสชันครับ",
        icon: <CreditCard className="w-5 h-5" />
    },
    {
        question: "ถ่ายนอกสถานที่ มีค่าเดินทางเพิ่มเติมไหม?",
        answer: "ในเขตกรุงเทพฯ (สยาม, สุขุมวิท, อารีย์ ฯลฯ) ไม่มีค่าเดินทางครับ หากเป็นปริมณฑลหรือต่างจังหวัด จะมีค่าเดินทางเพิ่มเติมตามระยะทางจริงครับ",
        icon: <MapPin className="w-5 h-5" />
    },
    {
        question: "เตรียมตัวอย่างไรก่อนมาถ่ายกับบอส?",
        answer: "แนะนำให้พักผ่อนให้เพียงพอ เตรียมชุดที่มั่นใจที่สุดมาสัก 2-3 ชุดครับ ถ้าบอสไม่แน่ใจเรื่อง Vibe ทักมาปรึกษา Oracle ก่อนได้ฟรีครับ ผมจะไกด์ให้จนกริบ!",
        icon: <Camera className="w-5 h-5" />
    }
];

const FAQItem = ({ question, answer, icon, isOpen, onClick }: {
    question: string;
    answer: string;
    icon: React.ReactNode;
    isOpen: boolean;
    onClick: () => void
}) => {
    return (
        <div className={`mb-4 overflow-hidden rounded-2xl border transition-all duration-500 ${isOpen ? 'bg-white/10 border-accent/40 shadow-[0_0_20px_rgba(255,107,53,0.1)]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between p-6 text-left"
            >
                <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-500 ${isOpen ? 'bg-accent text-white' : 'bg-white/5 text-accent'}`}>
                        {icon}
                    </div>
                    <span className="text-lg font-bold text-white/90">{question}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-accent' : 'text-white/40'}`} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-6 pb-6 pt-0">
                            <div className="h-px w-full bg-white/5 mb-6" />
                            <p className="text-body leading-relaxed text-white/60">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="w-full">
            {faqData.map((item, index) => (
                <FAQItem
                    key={index}
                    {...item}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}
