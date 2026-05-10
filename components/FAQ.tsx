"use client";

import { motion } from "framer-motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    value: "item-0",
    q: "Apakah ini aman digunakan?",
    a: "MENTARI CLI hanya mengakses akun kamu menggunakan token login yang kamu dapatkan sendiri. Tidak ada data yang dikirim ke server pihak ketiga selain API Gemini untuk generate jawaban.",
  },
  {
    value: "item-1",
    q: "Apakah gratis?",
    a: "Ya, sepenuhnya gratis. Kamu hanya butuh Gemini API Key yang juga tersedia gratis dari Google AI Studio tanpa perlu kartu kredit.",
  },
  {
    value: "item-2",
    q: "Browser apa yang dibutuhkan?",
    a: "Google Chrome atau Microsoft Edge versi terbaru. CLI otomatis mendeteksi browser yang sudah terinstall — tidak perlu download tambahan.",
  },
  {
    value: "item-3",
    q: "Bagaimana jika quota Gemini habis?",
    a: 'Gunakan menu "Ganti Model AI" di CLI untuk beralih ke model Gemini lain yang masih tersedia. Quota free tier reset setiap hari pukul 07:00 WIB.',
  },
  {
    value: "item-4",
    q: "Apakah bisa dipakai di Windows, Mac, dan Linux?",
    a: "Ya, selama Node.js v18+ dan Google Chrome atau Microsoft Edge sudah terinstall di device kamu.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
            Pertanyaan <span className="text-orange-gradient">Umum</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <Accordion className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="font-sans font-semibold text-foreground text-sm text-left py-4 hover:text-primary hover:no-underline transition-colors [&>svg]:text-primary cursor-pointer">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 pl-1">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
