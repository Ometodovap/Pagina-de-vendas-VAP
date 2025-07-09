import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Smartphone, Globe, FileText, Clock, Shield, CreditCard, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Como recebo acesso ao curso após a compra?',
    answer: 'O acesso é liberado AUTOMATICAMENTE em até 5 minutos após a confirmação do pagamento. Você receberá por email as credenciais de login, links para download do app e instruções completas. É instantâneo!',
    icon: Clock
  },
  {
    question: 'O acesso é realmente vitalício?',
    answer: 'SIM! Uma vez adquirido, você terá acesso PERMANENTE a todo o conteúdo. Isso inclui o app mobile, portal web e todos os PDFs. Além disso, você receberá GRATUITAMENTE todas as atualizações e novos módulos que lançarmos.',
    icon: Shield
  },
  {
    question: 'Posso estudar pelo celular?',
    answer: 'CLARO! Nosso app nativo funciona perfeitamente no iOS e Android. Você pode baixar as aulas para assistir OFFLINE, sincronizar seu progresso entre dispositivos e estudar em qualquer lugar, até sem internet.',
    icon: Smartphone
  },
  {
    question: 'Há algum suporte disponível?',
    answer: 'Oferecemos suporte técnico COMPLETO por email e WhatsApp. Nossa equipe responde em até 12h úteis. Além disso, você terá acesso ao nosso grupo VIP no Telegram com outros alunos e instrutores.',
    icon: HelpCircle
  },
  {
    question: 'Posso parcelar o pagamento?',
    answer: 'SIM! Aceitamos cartão de crédito em até 12x SEM JUROS. Também oferecemos 5% de desconto para pagamento via Pix e aceitamos boleto bancário. Escolha a forma que for mais conveniente para você.',
    icon: CreditCard
  },
  {
    question: 'O que acontece se eu não gostar do curso?',
    answer: 'Oferecemos garantia INCONDICIONAL de 7 dias. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do valor pago. É só enviar um email e processamos o estorno IMEDIATAMENTE. Risco zero para você!',
    icon: Shield
  },
  {
    question: 'Os PDFs podem ser impressos?',
    answer: 'SIM! Todos os PDFs são liberados para impressão e não possuem restrições. São mais de 500 páginas de conteúdo em ALTA QUALIDADE, com design profissional e layout otimizado para impressão.',
    icon: FileText
  },
  {
    question: 'Preciso de experiência prévia em vendas?',
    answer: 'NÃO! O MÉTODO VAP foi desenvolvido tanto para INICIANTES quanto para vendedores experientes. Começamos do básico e evoluímos para técnicas avançadas. O conteúdo é progressivo e fácil de acompanhar.',
    icon: Globe
  }
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521982134226?text=Olá! Tenho dúvidas sobre o curso MÉTODO VAP.', '_blank');
  };

  return (
    <section className="py-20 bg-[#272525]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-['Poppins']">
            Perguntas{' '}
            <span className="text-[#0AFF0F]">FREQUENTES</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-['Inter']">
            Tire todas as suas dúvidas sobre o <span className="text-[#0AFF0F] font-bold">MÉTODO VAP</span>. 
            Se não encontrar a resposta que procura, <span className="text-white font-bold">entre em contato conosco</span>.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              const isOpen = openFAQ === index;
              
              return (
                <div
                  key={index}
                  className="bg-black/70 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[#0AFF0F]/50 overflow-hidden hover:shadow-xl hover:shadow-[#0AFF0F]/10 transition-all duration-300"
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-900/50 transition-colors"
                    onClick={() => setOpenFAQ(isOpen ? -1 : index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-[#0AFF0F]' : 'bg-gray-800'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${isOpen ? 'text-black' : 'text-gray-400'}`} />
                      </div>
                      <h3 className={`font-bold text-lg transition-colors font-['Poppins'] ${
                        isOpen ? 'text-[#0AFF0F]' : 'text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-[#0AFF0F]' : 'text-gray-400'}`} />
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="bg-[#0AFF0F]/10 rounded-xl p-6 border border-[#0AFF0F]/30">
                        <p className="text-gray-300 leading-relaxed font-['Inter']">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 border-2 border-[#0AFF0F]/30 max-w-3xl mx-auto">
            <h3 className="text-3xl font-black mb-4 text-[#0AFF0F] font-['Poppins']">
              🤔 AINDA TEM DÚVIDAS?
            </h3>
            <p className="mb-6 leading-relaxed text-gray-300 font-['Inter']">
              Nossa equipe está pronta para ajudar você. Entre em contato via WhatsApp 
              e receba <span className="text-[#0AFF0F] font-bold">atendimento personalizado</span>.
            </p>
            <button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;