import React from 'react';
import { Star, Quote, TrendingUp, Users, Award, Play } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Gerente de Vendas',
    company: 'TechCorp',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Em 30 dias aplicando o MÉTODO VAP, minha equipe aumentou as vendas em 400%. Os gatilhos mentais e técnicas de neurovendas são revolucionários. Melhor investimento da minha carreira!',
    rating: 5,
    result: '+400% vendas',
    before: 'R$ 50k/mês',
    after: 'R$ 200k/mês'
  },
  {
    name: 'Carlos Mendes',
    role: 'Consultor Comercial',
    company: 'Vendas Pro',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Aplicando apenas 50% do que aprendi, já tripliquei minha renda. O conteúdo é prático, direto ao ponto e realmente transforma. Não é teoria, é método que funciona na prática.',
    rating: 5,
    result: '+300% renda',
    before: 'R$ 8k/mês',
    after: 'R$ 24k/mês'
  },
  {
    name: 'Ana Costa',
    role: 'Empreendedora',
    company: 'Beauty Store',
    avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Como empreendedora, precisava vender mais e melhor. O MÉTODO VAP me deu confiança e técnicas que uso todos os dias. Meu faturamento quintuplicou em 60 dias!',
    rating: 5,
    result: '+500% faturamento',
    before: 'R$ 15k/mês',
    after: 'R$ 75k/mês'
  },
  {
    name: 'Roberto Lima',
    role: 'Diretor Comercial',
    company: 'MaxVendas',
    avatar: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Implementei o método em toda minha equipe de 15 vendedores. Resultado: batemos todas as metas e ainda sobrou. O ROI foi incrível, recuperei o investimento em 1 semana.',
    rating: 5,
    result: 'ROI 800%',
    before: 'R$ 300k/mês',
    after: 'R$ 1.2M/mês'
  }
];

const stats = [
  { number: '1.247', label: 'Vidas Transformadas', icon: Users },
  { number: '97%', label: 'Taxa de Satisfação', icon: Star },
  { number: '350%', label: 'Aumento Médio em Vendas', icon: TrendingUp },
  { number: '4.9/5', label: 'Avaliação Média', icon: Award }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#272525]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-['Poppins']">
            Veja os{' '}
            <span className="text-[#0AFF0F]">RESULTADOS REAIS</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-['Inter']">
            Mais de <span className="text-[#0AFF0F] font-bold">1.200 profissionais</span> já transformaram suas carreiras com o MÉTODO VAP. 
            <span className="text-white font-bold"> Agora é a sua vez de fazer parte desse grupo seleto.</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-black/50 rounded-2xl p-6 border border-gray-700 hover:border-[#0AFF0F]/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0AFF0F] to-[#00CC0C] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>
                <div className="text-3xl font-black text-[#0AFF0F] mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium font-['Inter']">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-[#0AFF0F]/50 hover:shadow-2xl hover:shadow-[#0AFF0F]/10 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#0AFF0F] shadow-lg"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-white text-lg font-['Poppins']">{testimonial.name}</h4>
                  <p className="text-gray-300 font-['Inter']">{testimonial.role}</p>
                  <p className="text-[#0AFF0F] font-bold text-sm">{testimonial.company}</p>
                  
                  {/* Stars */}
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#0AFF0F] fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Result Badge */}
                <div className="bg-[#0AFF0F] text-black px-4 py-2 rounded-full text-sm font-black">
                  {testimonial.result}
                </div>
              </div>

              {/* Before/After */}
              <div className="bg-gray-900/50 rounded-2xl p-4 mb-6 border border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-red-400 text-sm font-bold">ANTES</div>
                    <div className="text-white font-bold">{testimonial.before}</div>
                  </div>
                  <div>
                    <div className="text-[#0AFF0F] text-sm font-bold">DEPOIS</div>
                    <div className="text-[#0AFF0F] font-bold">{testimonial.after}</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-[#0AFF0F] absolute -top-2 -left-2" />
                <p className="text-gray-300 leading-relaxed italic pl-6 font-['Inter']">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial Section */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-8 md:p-12 border-2 border-[#0AFF0F]/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-[#0AFF0F] mb-4 font-['Poppins']">
              🎥 DEPOIMENTOS EM VÍDEO
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto font-['Inter']">
              Assista aos relatos completos de quem aplicou o MÉTODO VAP e 
              <span className="text-[#0AFF0F] font-bold"> transformou sua vida profissional e financeira</span>.
            </p>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-black rounded-3xl aspect-video flex items-center justify-center border-2 border-[#0AFF0F]/30 relative overflow-hidden">
              <button className="w-24 h-24 bg-[#0AFF0F] hover:bg-[#00CC0C] rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110">
                <Play className="w-10 h-10 text-black ml-1" />
              </button>
              
              {/* Overlay badges */}
              <div className="absolute top-4 left-4 bg-[#0AFF0F] text-black px-3 py-1 rounded-full text-sm font-bold">
                ▶ +15 DEPOIMENTOS
              </div>
              <div className="absolute top-4 right-4 bg-black/80 text-[#0AFF0F] px-3 py-1 rounded-full text-sm font-bold">
                RESULTADOS REAIS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;