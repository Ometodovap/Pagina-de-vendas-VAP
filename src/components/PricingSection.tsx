import React from 'react';
import { Check, Clock, Shield, Gift, CreditCard, ArrowRight, Star, Zap, Target } from 'lucide-react';

const PricingSection = () => {
  const handleCTA = () => {
    window.open('https://wa.me/5521982134226?text=Olá! Quero garantir minha vaga no MÉTODO VAP com desconto!', '_blank');
  };

  return (
    <section id="comprar" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230AFF0F%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 text-red-400 px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            ⚠️ OFERTA ESPECIAL TERMINA EM BREVE
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black mb-6 font-['Poppins']">
            <span className="text-white">Transforme sua</span>{' '}
            <span className="text-[#0AFF0F]">CARREIRA HOJE</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-['Inter']">
            Não deixe para amanhã o <span className="text-[#0AFF0F] font-bold">sucesso que você pode conquistar hoje</span>. 
            Esta é sua oportunidade de dominar as vendas de uma vez por todas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border-2 border-[#0AFF0F]/30 p-8 md:p-12 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#0AFF0F] text-black px-8 py-3 rounded-full font-black text-lg flex items-center animate-bounce">
                <Star className="w-5 h-5 mr-2 fill-current" />
                MAIS ESCOLHIDO - 97% SATISFAÇÃO
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-black mb-4 text-white font-['Poppins']">MÉTODO VAP COMPLETO</h3>
                  <p className="text-gray-300 leading-relaxed font-['Inter']">
                    Acesso vitalício a <span className="text-[#0AFF0F] font-bold">todos os módulos, plataformas e atualizações futuras</span>. 
                    Tudo que você precisa para se tornar um <span className="text-white font-bold">vendedor de elite</span>.
                  </p>
                </div>

                {/* Price */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                      <span className="text-3xl text-red-400 line-through font-['Inter']">R$ 997</span>
                      <ArrowRight className="w-6 h-6 text-[#0AFF0F]" />
                      <span className="text-6xl font-black text-[#0AFF0F]">R$ 197</span>
                    </div>
                    
                    <div className="text-gray-300 text-xl mb-4 font-['Inter']">
                      ou <span className="text-[#0AFF0F] font-bold text-2xl">12x de R$ 19,70</span> sem juros
                    </div>
                    
                    <div className="bg-[#0AFF0F]/10 border border-[#0AFF0F]/30 rounded-2xl p-6">
                      <div className="flex items-center justify-center text-[#0AFF0F] font-black text-xl">
                        <Gift className="w-6 h-6 mr-3" />
                        ECONOMIA DE R$ 800 (80% OFF)
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300 font-['Inter']">
                      <CreditCard className="w-5 h-5 mr-3 text-[#0AFF0F]" />
                      Cartão de crédito em até 12x sem juros
                    </div>
                    <div className="flex items-center text-gray-300 font-['Inter']">
                      <Zap className="w-5 h-5 mr-3 text-[#0AFF0F]" />
                      Pix com desconto adicional de 5%
                    </div>
                    <div className="flex items-center text-gray-300 font-['Inter']">
                      <Shield className="w-5 h-5 mr-3 text-[#0AFF0F]" />
                      Garantia incondicional de 7 dias
                    </div>
                  </div>

                  {/* CTA */}
                  <button 
                    onClick={handleCTA}
                    className="w-full bg-gradient-to-r from-[#0AFF0F] to-[#00CC0C] hover:from-[#00CC0C] hover:to-[#0AFF0F] text-black font-black py-6 px-8 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-[#0AFF0F]/30 flex items-center justify-center group animate-pulse"
                  >
                    🚀 QUERO GARANTIR MINHA VAGA AGORA
                    <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="text-center text-sm text-gray-400 font-['Inter']">
                    ⚡ Acesso imediato após confirmação do pagamento
                  </div>
                </div>
              </div>

              {/* Right Benefits */}
              <div className="space-y-6">
                <h4 className="text-3xl font-black text-[#0AFF0F] mb-6 font-['Poppins']">
                  🎁 O QUE ESTÁ INCLUÍDO:
                </h4>

                <div className="space-y-4">
                  {[
                    { text: '8 módulos completos com +50h de conteúdo premium', highlight: true },
                    { text: 'App mobile exclusivo para iOS e Android' },
                    { text: 'Portal web vitalício em WordPress' },
                    { text: 'Download de todos os PDFs (500+ páginas)' },
                    { text: 'Certificado de conclusão automático' },
                    { text: 'Atualizações gratuitas para sempre' },
                    { text: 'Suporte técnico especializado' },
                    { text: 'Acesso ao grupo VIP no Telegram' },
                    { text: 'Garantia incondicional de 7 dias', highlight: true }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start space-x-3 ${item.highlight ? 'bg-[#0AFF0F]/10 border border-[#0AFF0F]/30 rounded-xl p-4' : ''}`}>
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.highlight ? 'text-[#0AFF0F]' : 'text-[#0AFF0F]'}`} />
                      <span className={`leading-relaxed font-['Inter'] ${item.highlight ? 'font-bold text-white' : 'text-gray-300'}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bonus */}
                <div className="bg-gradient-to-r from-[#0AFF0F]/10 to-[#00CC0C]/10 border border-[#0AFF0F]/30 rounded-2xl p-6 mt-8">
                  <h5 className="font-black text-[#0AFF0F] mb-4 flex items-center text-xl font-['Poppins']">
                    <Gift className="w-6 h-6 mr-3" />
                    BÔNUS EXCLUSIVOS (VALOR: R$ 497)
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-300 font-['Inter']">
                      <Check className="w-4 h-4 mr-3 text-[#0AFF0F]" />
                      E-book: "100 Scripts de Vendas Testados" (R$ 197)
                    </div>
                    <div className="flex items-center text-gray-300 font-['Inter']">
                      <Check className="w-4 h-4 mr-3 text-[#0AFF0F]" />
                      Template de CRM personalizado (R$ 147)
                    </div>
                    <div className="flex items-center text-gray-300 font-['Inter']">
                      <Check className="w-4 h-4 mr-3 text-[#0AFF0F]" />
                      Planilha de controle de vendas (R$ 97)
                    </div>
                    <div className="flex items-center text-gray-300 font-['Inter']">
                      <Check className="w-4 h-4 mr-3 text-[#0AFF0F]" />
                      Acesso ao grupo VIP no Telegram (R$ 56)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-[#0AFF0F]/10 border border-[#0AFF0F]/30 rounded-full px-8 py-4">
              <Shield className="w-8 h-8 mr-4 text-[#0AFF0F]" />
              <div className="text-left">
                <div className="font-black text-[#0AFF0F] text-lg">GARANTIA DE 7 DIAS - RISCO ZERO</div>
                <div className="text-gray-300 text-sm font-['Inter']">Se não gostar, devolvemos 100% do seu dinheiro</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;