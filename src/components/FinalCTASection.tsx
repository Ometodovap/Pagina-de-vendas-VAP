import React from 'react';
import { ArrowRight, Clock, Shield, Gift, Star, Zap, Target, MessageCircle } from 'lucide-react';

const FinalCTASection = () => {
  const handleCTA = () => {
    window.open('https://wa.me/5521982134226?text=Olá! Quero garantir minha vaga no MÉTODO VAP com desconto especial!', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521982134226?text=Olá! Tenho interesse no curso O Método VAP.', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230AFF0F%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Urgency Header */}
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 text-red-400 px-8 py-4 rounded-full text-lg font-black mb-8 animate-pulse">
            <Clock className="w-6 h-6 mr-3" />
            ⚠️ ÚLTIMA CHANCE - OFERTA TERMINA EM BREVE
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-7xl font-black leading-tight mb-8 font-['Poppins']">
            Pare de{' '}
            <span className="text-red-400">PERDER DINHEIRO</span>{' '}
            todos os dias
          </h2>

          <p className="text-xl md:text-3xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto font-['Inter']">
            Enquanto você hesita, seus concorrentes estão fechando negócios. 
            <span className="text-[#0AFF0F] font-black"> Não deixe sua carreira para depois.</span>
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-[#0AFF0F]/50 transition-all duration-300">
              <Target className="w-16 h-16 text-[#0AFF0F] mx-auto mb-6" />
              <h3 className="font-black text-xl mb-4 text-white font-['Poppins']">RESULTADOS IMEDIATOS</h3>
              <p className="text-gray-300 font-['Inter']">Aplique hoje e veja mudanças nas suas vendas ainda esta semana</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-[#0AFF0F]/50 transition-all duration-300">
              <Zap className="w-16 h-16 text-[#0AFF0F] mx-auto mb-6" />
              <h3 className="font-black text-xl mb-4 text-white font-['Poppins']">MÉTODO COMPROVADO</h3>
              <p className="text-gray-300 font-['Inter']">Mais de 1.200 vendedores já transformaram suas carreiras</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-[#0AFF0F]/50 transition-all duration-300">
              <Shield className="w-16 h-16 text-[#0AFF0F] mx-auto mb-6" />
              <h3 className="font-black text-xl mb-4 text-white font-['Poppins']">ZERO RISCO</h3>
              <p className="text-gray-300 font-['Inter']">Garantia de 7 dias ou seu dinheiro de volta</p>
            </div>
          </div>

          {/* Final Price */}
          <div className="bg-gradient-to-r from-[#0AFF0F]/10 to-[#00CC0C]/10 border border-[#0AFF0F]/30 rounded-3xl p-8 mb-12">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <span className="text-4xl text-red-400 line-through font-['Inter']">R$ 997</span>
              <ArrowRight className="w-8 h-8 text-[#0AFF0F]" />
              <span className="text-6xl font-black text-[#0AFF0F]">R$ 197</span>
            </div>
            <p className="text-2xl text-gray-300 mb-4 font-['Inter']">
              ou <span className="text-[#0AFF0F] font-black">12x de R$ 19,70</span> sem juros
            </p>
            <div className="flex items-center justify-center text-[#0AFF0F] text-xl font-black">
              <Gift className="w-6 h-6 mr-3" />
              <span>ECONOMIA DE R$ 800 (80% OFF)</span>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-8">
            <button 
              onClick={handleCTA}
              className="group bg-gradient-to-r from-[#0AFF0F] to-[#00CC0C] hover:from-[#00CC0C] hover:to-[#0AFF0F] text-black font-black py-8 px-16 rounded-3xl text-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-[#0AFF0F]/30 flex items-center mx-auto animate-bounce"
            >
              🚀 QUERO TRANSFORMAR MINHA CARREIRA AGORA
              <ArrowRight className="w-10 h-10 ml-4 group-hover:translate-x-2 transition-transform" />
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </button>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1 text-[#0AFF0F]" />
                  Compra 100% segura
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-1 text-[#0AFF0F]" />
                  Acesso imediato
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-[#0AFF0F] fill-current" />
                  Garantia de 7 dias
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-4 font-['Inter']">
              Junte-se a mais de 1.200 vendedores que já transformaram suas vidas:
            </p>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#0AFF0F] fill-current" />
              ))}
              <span className="ml-4 text-[#0AFF0F] font-black text-xl">4.9/5 - 847 avaliações</span>
            </div>
          </div>

          {/* Final Emotional Appeal */}
          <div className="mt-16 bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-black text-red-400 mb-6 font-['Poppins']">
              ⚠️ ESTA PODE SER SUA ÚLTIMA CHANCE
            </h3>
            <p className="text-gray-300 leading-relaxed text-xl font-['Inter']">
              O mercado de vendas está cada vez mais competitivo. Enquanto você pensa, 
              outros profissionais estão se capacitando e <span className="text-red-400 font-bold">tomando seu lugar</span>. 
              <span className="font-black text-[#0AFF0F]"> Não seja mais um na multidão.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;