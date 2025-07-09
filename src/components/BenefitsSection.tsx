import React from 'react';
import { Smartphone, Globe, Download, Brain, TrendingUp, Award, Clock, Shield, Zap, Target } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Resultados em 7 Dias',
    description: 'Aplique as técnicas e veja mudanças imediatas nas suas vendas. Método testado por mais de 1.000 vendedores.',
    color: 'from-[#0AFF0F] to-[#00CC0C]'
  },
  {
    icon: Brain,
    title: 'Neurovendas Avançadas',
    description: 'Domine a psicologia da venda. Entenda como o cérebro do cliente funciona e influencie decisões de compra.',
    color: 'from-[#0AFF0F] to-[#00CC0C]'
  },
  {
    icon: Zap,
    title: 'IA nas Vendas',
    description: 'Técnicas modernas com inteligência artificial para automatizar e otimizar seus processos de venda.',
    color: 'from-[#0AFF0F] to-[#00CC0C]'
  },
  {
    icon: Smartphone,
    title: 'Acesso Total',
    description: 'App + Site + PDFs. Estude onde quiser, quando quiser. Sincronização automática em todos os dispositivos.',
    color: 'from-[#0AFF0F] to-[#00CC0C]'
  },
  {
    icon: TrendingUp,
    title: 'Aumento de 300%',
    description: 'Nossos alunos aumentam suas vendas em média 300% nos primeiros 30 dias aplicando o método.',
    color: 'from-[#0AFF0F] to-[#00CC0C]'
  },
  {
    icon: Shield,
    title: 'Garantia Total',
    description: 'Risco zero! 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.',
    color: 'from-[#0AFF0F] to-[#00CC0C]'
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-[#272525]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-['Poppins']">
            Por que o{' '}
            <span className="text-[#0AFF0F]">MÉTODO VAP</span>{' '}
            é diferente?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-['Inter']">
            Não é mais um curso de vendas. É uma <span className="text-[#0AFF0F] font-bold">transformação completa</span> na sua forma de vender.
            Cada benefício foi pensado para <span className="text-white font-bold">multiplicar seus resultados</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-[#0AFF0F]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0AFF0F]/20"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-full h-full text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#0AFF0F] transition-colors font-['Poppins']">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed font-['Inter']">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Urgency Stats */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 md:p-12 border-2 border-[#0AFF0F]/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-[#0AFF0F] mb-4 font-['Poppins']">
              ⚠️ ENQUANTO VOCÊ HESITA...
            </h3>
            <p className="text-xl text-white font-['Inter']">
              Seus concorrentes estão aplicando essas técnicas e <span className="text-[#0AFF0F] font-bold">roubando seus clientes</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-[#0AFF0F]/10 rounded-2xl p-6 border border-[#0AFF0F]/30">
              <div className="text-4xl font-black text-[#0AFF0F] mb-2">1000+</div>
              <div className="text-gray-300 font-['Inter']">Vendedores Transformados</div>
            </div>
            <div className="bg-[#0AFF0F]/10 rounded-2xl p-6 border border-[#0AFF0F]/30">
              <div className="text-4xl font-black text-[#0AFF0F] mb-2">300%</div>
              <div className="text-gray-300 font-['Inter']">Aumento Médio em Vendas</div>
            </div>
            <div className="bg-[#0AFF0F]/10 rounded-2xl p-6 border border-[#0AFF0F]/30">
              <div className="text-4xl font-black text-[#0AFF0F] mb-2">7 DIAS</div>
              <div className="text-gray-300 font-['Inter']">Para Ver Resultados</div>
            </div>
            <div className="bg-[#0AFF0F]/10 rounded-2xl p-6 border border-[#0AFF0F]/30">
              <div className="text-4xl font-black text-[#0AFF0F] mb-2">97%</div>
              <div className="text-gray-300 font-['Inter']">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;