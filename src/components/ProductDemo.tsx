import React, { useState } from 'react';
import { Play, Smartphone, Globe, FileText, Download, ArrowRight, CheckCircle } from 'lucide-react';

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState('app');

  const tabs = [
    { id: 'app', label: 'App Mobile', icon: Smartphone },
    { id: 'web', label: 'Portal Web', icon: Globe },
    { id: 'pdf', label: 'PDFs Completos', icon: FileText }
  ];

  return (
    <section className="py-20 bg-[#272525]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-['Poppins']">
            Veja o curso{' '}
            <span className="text-[#0AFF0F]">EM AÇÃO</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-['Inter']">
            Explore todas as plataformas e formatos disponíveis. 
            <span className="text-[#0AFF0F] font-bold">Seu aprendizado não tem limites nem barreiras</span>.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-black rounded-full p-2 shadow-lg border border-gray-700">
            <div className="flex space-x-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-[#0AFF0F] text-black shadow-md'
                        : 'text-gray-400 hover:text-[#0AFF0F] hover:bg-gray-800'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          {activeTab === 'app' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-[#0AFF0F]/20 text-[#0AFF0F] px-6 py-3 rounded-full text-sm font-bold border border-[#0AFF0F]/30">
                    <Smartphone className="w-4 h-4 mr-2" />
                    APLICATIVO MOBILE EXCLUSIVO
                  </div>
                  <h3 className="text-4xl font-black text-white font-['Poppins']">
                    Estude onde quiser, quando quiser
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed font-['Inter']">
                    Nosso app nativo foi desenvolvido pensando na <span className="text-[#0AFF0F] font-bold">sua experiência</span>. 
                    Baixe aulas offline, sincronize progresso e tenha acesso total ao curso.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#0AFF0F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-lg font-['Poppins']">Download para estudo offline</div>
                      <div className="text-gray-300 font-['Inter']">Baixe os módulos e estude sem internet</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#0AFF0F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-lg font-['Poppins']">Sincronização automática</div>
                      <div className="text-gray-300 font-['Inter']">Seu progresso fica salvo em todos os dispositivos</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#0AFF0F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-lg font-['Poppins']">Interface intuitiva</div>
                      <div className="text-gray-300 font-['Inter']">Design limpo e fácil navegação</div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="bg-black rounded-lg p-4 flex items-center space-x-3 border border-gray-700">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-4 h-4 bg-black rounded-sm"></div>
                    </div>
                    <span className="text-white font-bold">App Store</span>
                  </div>
                  <div className="bg-[#0AFF0F] rounded-lg p-4 flex items-center space-x-3">
                    <Play className="w-5 h-5 text-black" />
                    <span className="text-black font-bold">Google Play</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-700">
                  <div className="bg-[#0AFF0F] rounded-2xl p-6 space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <Play className="w-6 h-6 text-[#0AFF0F]" />
                      </div>
                      <div>
                        <div className="font-black text-black">MÉTODO VAP</div>
                        <div className="text-sm text-gray-800">Módulo atual: Neurovendas</div>
                      </div>
                    </div>
                    
                    <div className="bg-black/10 rounded-lg p-4">
                      <div className="text-sm text-gray-800 mb-2">Progresso do curso</div>
                      <div className="bg-gray-300 rounded-full h-3 mb-2">
                        <div className="bg-black rounded-full h-3 w-3/4"></div>
                      </div>
                      <div className="text-xs text-gray-700">6 de 8 módulos concluídos</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-black/10 rounded-lg">
                        <span className="text-sm font-bold text-black">Próxima aula</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/5 rounded-lg">
                        <span className="text-sm text-gray-800">Baixar para offline</span>
                        <Download className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'web' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-[#0AFF0F]/20 text-[#0AFF0F] px-6 py-3 rounded-full text-sm font-bold border border-[#0AFF0F]/30">
                    <Globe className="w-4 h-4 mr-2" />
                    PORTAL WEB WORDPRESS
                  </div>
                  <h3 className="text-4xl font-black text-white font-['Poppins']">
                    Plataforma completa na web
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed font-['Inter']">
                    Acesse pelo navegador de qualquer dispositivo. <span className="text-[#0AFF0F] font-bold">Interface profissional</span>, 
                    recursos avançados e toda a experiência otimizada para desktop.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#0AFF0F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-lg font-['Poppins']">Streaming em HD</div>
                      <div className="text-gray-300 font-['Inter']">Vídeos em alta qualidade com player avançado</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#0AFF0F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-lg font-['Poppins']">Fórum de discussões</div>
                      <div className="text-gray-300 font-['Inter']">Tire dúvidas e interaja com outros alunos</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#0AFF0F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-lg font-['Poppins']">Certificados digitais</div>
                      <div className="text-gray-300 font-['Inter']">Gere e baixe certificados automaticamente</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="bg-white rounded px-3 py-1 text-sm text-gray-600">
                      loja.fipei.com.br/ometodovap
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-lg">Dashboard do Aluno</h4>
                      <div className="w-8 h-8 bg-[#0AFF0F] rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-[#0AFF0F]/10 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-[#0AFF0F]">75%</div>
                        <div className="text-sm text-gray-600">Concluído</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-gray-600">42h</div>
                        <div className="text-sm text-gray-600">Estudadas</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-[#0AFF0F]/10 border border-[#0AFF0F]/30 rounded p-2 text-sm">
                        ✅ Módulo 1: Concluído
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded p-2 text-sm">
                        📖 Módulo 2: Em andamento
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded p-2 text-sm">
                        ⏳ Módulo 3: Bloqueado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pdf' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-[#0AFF0F]/20 text-[#0AFF0F] px-6 py-3 rounded-full text-sm font-bold border border-[#0AFF0F]/30">
                    <FileText className="w-4 h-4 mr-2" />
                    MATERIAL COMPLETO EM PDF
                  </div>
                  <h3 className="text-4xl font-black text-white font-['Poppins']">
                    Tenha tudo sempre à mão
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed font-['Inter']">
                    Download completo de todos os módulos, exercícios e materiais complementares. 
                    <span className="text-[#0AFF0F] font-bold">Ideal para revisões e consultas rápidas</span>.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#0AFF0F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-lg font-['Poppins']">Mais de 500 páginas</div>
                      <div className="text-gray-300 font-['Inter']">Conteúdo completo de todos os módulos</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#0AFF0F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-lg font-['Poppins']">Design profissional</div>
                      <div className="text-gray-300 font-['Inter']">Layout limpo e fácil leitura</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-[#0AFF0F] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white text-lg font-['Poppins']">Exercícios práticos</div>
                      <div className="text-gray-300 font-['Inter']">Atividades para fixar o aprendizado</div>
                    </div>
                  </div>
                </div>

                <button className="bg-[#0AFF0F] hover:bg-[#00CC0C] text-black font-bold py-4 px-8 rounded-lg flex items-center transition-colors">
                  <Download className="w-5 h-5 mr-2" />
                  Preview do Material
                </button>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 space-y-3">
                    <div className="w-full h-32 bg-gradient-to-br from-[#0AFF0F]/20 to-[#00CC0C]/20 rounded-lg flex items-center justify-center">
                      <FileText className="w-8 h-8 text-[#0AFF0F]" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="text-xs text-gray-500 text-center">Módulo 1 - 65 páginas</div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 space-y-3 mt-8">
                    <div className="w-full h-32 bg-gradient-to-br from-[#0AFF0F]/20 to-[#00CC0C]/20 rounded-lg flex items-center justify-center">
                      <FileText className="w-8 h-8 text-[#0AFF0F]" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    <div className="text-xs text-gray-500 text-center">Módulo 2 - 78 páginas</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;