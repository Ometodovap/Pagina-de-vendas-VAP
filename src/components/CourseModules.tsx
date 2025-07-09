import React, { useState } from 'react';
import { ChevronRight, Play, FileText, Brain, Target, Users, Lightbulb, Zap, TrendingUp, Award } from 'lucide-react';

const modules = [
  {
    number: '01',
    title: 'Fundamentos da Neurovenda',
    description: 'Decodifique a mente do cliente. Aprenda como o cérebro toma decisões de compra e como influenciar esse processo.',
    icon: Brain,
    duration: '4h 30min',
    lessons: 12,
    highlight: 'Técnicas de persuasão inconsciente'
  },
  {
    number: '02',
    title: 'Copywriting que Converte',
    description: 'Palavras que vendem. Domine a arte da escrita persuasiva que transforma visitantes em compradores.',
    icon: FileText,
    duration: '5h 15min',
    lessons: 15,
    highlight: 'Scripts testados e aprovados'
  },
  {
    number: '03',
    title: 'Prospecção Inteligente',
    description: 'Encontre clientes qualificados usando estratégias modernas e automação inteligente.',
    icon: Target,
    duration: '3h 45min',
    lessons: 10,
    highlight: 'Leads qualificados em escala'
  },
  {
    number: '04',
    title: 'Liderança em Vendas',
    description: 'Desenvolva presença e autoridade para liderar equipes de alta performance e multiplicar resultados.',
    icon: Users,
    duration: '6h 20min',
    lessons: 18,
    highlight: 'Gestão de equipes vencedoras'
  },
  {
    number: '05',
    title: 'Gatilhos Mentais Avançados',
    description: 'Psicologia aplicada às vendas. Acelere decisões de compra usando gatilhos poderosos.',
    icon: Lightbulb,
    duration: '4h 10min',
    lessons: 13,
    highlight: '27 gatilhos de alta conversão'
  },
  {
    number: '06',
    title: 'IA nas Vendas',
    description: 'Use inteligência artificial para otimizar processos, automatizar follow-ups e aumentar resultados.',
    icon: Zap,
    duration: '5h 30min',
    lessons: 16,
    highlight: 'Automação que vende sozinha'
  },
  {
    number: '07',
    title: 'Negociação Estratégica',
    description: 'Técnicas avançadas para fechar negócios com margem superior e vencer objeções.',
    icon: TrendingUp,
    duration: '4h 45min',
    lessons: 14,
    highlight: 'Fechamento de alta margem'
  },
  {
    number: '08',
    title: 'Autoridade e Posicionamento',
    description: 'Posicione-se como especialista e referência no seu mercado. Clientes vêm até você.',
    icon: Award,
    duration: '3h 20min',
    lessons: 9,
    highlight: 'Personal branding que vende'
  }
];

const CourseModules = () => {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-['Poppins']">
            O que você vai{' '}
            <span className="text-[#0AFF0F]">DOMINAR</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-['Inter']">
            8 módulos estratégicos que vão transformar você no <span className="text-[#0AFF0F] font-bold">vendedor que sempre quis ser</span>.
            Cada módulo é uma jornada de descoberta e aplicação prática.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Modules List */}
            <div className="space-y-4">
              {modules.map((module, index) => {
                const IconComponent = module.icon;
                const isActive = activeModule === index;
                
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                      isActive 
                        ? 'border-[#0AFF0F] bg-[#0AFF0F]/10 shadow-lg shadow-[#0AFF0F]/20' 
                        : 'border-gray-700 bg-gray-900/50 hover:border-[#0AFF0F]/50 hover:shadow-md'
                    }`}
                    onClick={() => setActiveModule(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-[#0AFF0F]' : 'bg-gray-800'
                      }`}>
                        <span className={`font-black text-lg ${isActive ? 'text-black' : 'text-gray-400'}`}>
                          {module.number}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`font-bold text-xl mb-2 font-['Poppins'] ${isActive ? 'text-[#0AFF0F]' : 'text-white'}`}>
                          {module.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed font-['Inter']">
                          {module.description}
                        </p>
                        <div className={`text-xs font-bold mb-2 ${isActive ? 'text-[#0AFF0F]' : 'text-gray-400'}`}>
                          ✨ {module.highlight}
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span className="flex items-center">
                            <Play className="w-3 h-3 mr-1" />
                            {module.duration}
                          </span>
                          <span className="flex items-center">
                            <FileText className="w-3 h-3 mr-1" />
                            {module.lessons} aulas
                          </span>
                        </div>
                      </div>
                      
                      <ChevronRight className={`w-6 h-6 transition-transform ${
                        isActive ? 'rotate-90 text-[#0AFF0F]' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Module Details */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border-2 border-[#0AFF0F]/30">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-[#0AFF0F] rounded-2xl flex items-center justify-center mr-6">
                    {React.createElement(modules[activeModule].icon, { className: "w-10 h-10 text-black" })}
                  </div>
                  <div>
                    <div className="text-[#0AFF0F] text-sm font-bold mb-1 font-['Inter']">
                      MÓDULO {modules[activeModule].number}
                    </div>
                    <h3 className="text-2xl font-black text-white font-['Poppins']">
                      {modules[activeModule].title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 font-['Inter']">
                  {modules[activeModule].description}
                </p>

                <div className="bg-[#0AFF0F]/10 rounded-2xl p-4 mb-6 border border-[#0AFF0F]/30">
                  <div className="text-[#0AFF0F] font-bold text-sm mb-1">DESTAQUE DO MÓDULO:</div>
                  <div className="text-white font-bold">{modules[activeModule].highlight}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/50 rounded-xl p-4 text-center border border-gray-700">
                    <Play className="w-6 h-6 mx-auto mb-2 text-[#0AFF0F]" />
                    <div className="font-bold text-white">{modules[activeModule].duration}</div>
                    <div className="text-sm text-gray-400">de conteúdo</div>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4 text-center border border-gray-700">
                    <FileText className="w-6 h-6 mx-auto mb-2 text-[#0AFF0F]" />
                    <div className="font-bold text-white">{modules[activeModule].lessons}</div>
                    <div className="text-sm text-gray-400">aulas práticas</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-[#0AFF0F] rounded-full mr-3"></div>
                    Acesso vitalício garantido
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-[#0AFF0F] rounded-full mr-3"></div>
                    Certificado de conclusão
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-[#0AFF0F] rounded-full mr-3"></div>
                    PDFs para download
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseModules;