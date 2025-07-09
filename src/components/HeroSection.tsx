import React from 'react';
import { Play, Smartphone, Globe, FileText, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5521982134226?text=Olá! Tenho interesse no curso O Método VAP.', '_blank');
  };

  const handleCTA = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230AFF0F%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header with Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-[#0AFF0F]/20 border border-[#0AFF0F]/30 text-[#0AFF0F] px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
              <CheckCircle className="w-4 h-4 mr-2" />
              MÉTODO EXCLUSIVO DE ALTA PERFORMANCE
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6 font-['Poppins']">
              Pare de{' '}
              <span className="text-[#0AFF0F] animate-pulse">PERDER VENDAS</span>{' '}
              todos os dias
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8 font-['Inter']">
              O <span className="text-[#0AFF0F] font-bold">MÉTODO VAP</span> transforma vendedores comuns em{' '}
              <span className="text-white font-bold">máquinas de vendas</span> usando neurovendas, copywriting e IA
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0AFF0F]/30">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/FQPifjFIOLs"
                  title="MÉTODO VAP - Transforme Sua Carreira"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Overlay Badge */}
              <div className="absolute top-4 right-4 bg-[#0AFF0F] text-black px-3 py-1 rounded-full text-sm font-bold">
                ▶ ASSISTA AGORA
              </div>
            </div>
          </div>

          {/* Main CTAs */}
          <div className="text-center space-y-6 mb-12">
            <button 
              onClick={handleCTA}
              className="group bg-gradient-to-r from-[#0AFF0F] to-[#00CC0C] hover:from-[#00CC0C] hover:to-[#0AFF0F] text-black font-black py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-[#0AFF0F]/30 flex items-center mx-auto animate-bounce"
            >
              🚀 QUERO GARANTIR MINHA VAGA
              <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform" />
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </button>
              
              <div className="text-sm text-gray-400 flex items-center space-x-4">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-[#0AFF0F]" />
                  Acesso Imediato
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-[#0AFF0F]" />
                  Garantia 7 dias
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-[#0AFF0F]" />
                  12x sem juros
                </span>
              </div>
            </div>
          </div>

          {/* Platform Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[#0AFF0F]/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0AFF0F] to-[#00CC0C] rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0AFF0F]">APP MOBILE</h3>
              <p className="text-gray-300 text-sm">Estude offline, sincronize progresso</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[#0AFF0F]/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0AFF0F] to-[#00CC0C] rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0AFF0F]">PORTAL WEB</h3>
              <p className="text-gray-300 text-sm">Acesso vitalício, streaming HD</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-[#0AFF0F]/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0AFF0F] to-[#00CC0C] rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#0AFF0F]">PDFs COMPLETOS</h3>
              <p className="text-gray-300 text-sm">500+ páginas para download</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">Mais de 1.000 vendedores já transformaram suas vidas:</p>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-[#0AFF0F] rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">★</span>
                </div>
              ))}
              <span className="ml-3 text-[#0AFF0F] font-bold text-lg">4.9/5 - 847 avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;