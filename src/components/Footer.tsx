import React from 'react';
import { Mail, Phone, MapPin, Shield, Star, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5521982134226?text=Olá! Tenho interesse no curso O Método VAP.', '_blank');
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0AFF0F] to-[#00CC0C] rounded-xl flex items-center justify-center">
                <Star className="w-8 h-8 text-black fill-current" />
              </div>
              <span className="text-2xl font-black text-[#0AFF0F] font-['Poppins']">MÉTODO VAP</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-['Inter']">
              Transformando vendedores comuns em <span className="text-[#0AFF0F] font-bold">máquinas de vendas</span> através de técnicas 
              comprovadas de neurovendas, copywriting e IA.
            </p>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#0AFF0F] fill-current" />
              ))}
              <span className="ml-2 text-[#0AFF0F] font-bold">4.9/5 - 847 avaliações</span>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#0AFF0F] font-['Poppins']">Acesso Rápido</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-[#0AFF0F] transition-colors font-['Inter']">Sobre o Curso</a>
              <a href="#" className="block text-gray-400 hover:text-[#0AFF0F] transition-colors font-['Inter']">Módulos</a>
              <a href="#" className="block text-gray-400 hover:text-[#0AFF0F] transition-colors font-['Inter']">Depoimentos</a>
              <a href="#comprar" className="block text-gray-400 hover:text-[#0AFF0F] transition-colors font-['Inter']">Preços</a>
              <a href="#" className="block text-gray-400 hover:text-[#0AFF0F] transition-colors font-['Inter']">FAQ</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#0AFF0F] font-['Poppins']">Suporte</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-[#0AFF0F]" />
                <span className="font-['Inter']">contato@metodovap.com.br</span>
              </div>
              <button 
                onClick={handleWhatsApp}
                className="flex items-center space-x-3 text-gray-400 hover:text-[#0AFF0F] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#0AFF0F]" />
                <span className="font-['Inter']">(21) 98213-4226</span>
              </button>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#0AFF0F]" />
                <span className="font-['Inter']">Rio de Janeiro, RJ - Brasil</span>
              </div>
            </div>
          </div>

          {/* Garantees */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#0AFF0F] font-['Poppins']">Garantias</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#0AFF0F]">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-['Inter']">Compra 100% Segura</span>
              </div>
              <div className="flex items-center space-x-3 text-[#0AFF0F]">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-['Inter']">Garantia de 7 dias</span>
              </div>
              <div className="flex items-center space-x-3 text-[#0AFF0F]">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-['Inter']">Acesso Vitalício</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[#0AFF0F]/10 rounded-lg border border-[#0AFF0F]/30">
              <div className="text-sm text-[#0AFF0F] font-['Inter']">
                Pagamento processado com segurança SSL
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-['Inter']">
              © 2025 MÉTODO VAP. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#0AFF0F] transition-colors font-['Inter']">Termos de Uso</a>
              <a href="#" className="hover:text-[#0AFF0F] transition-colors font-['Inter']">Política de Privacidade</a>
              <button 
                onClick={handleWhatsApp}
                className="hover:text-[#0AFF0F] transition-colors font-['Inter']"
              >
                Contato
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm flex items-center justify-center font-['Inter']">
              Feito com <Heart className="w-4 h-4 mx-1 text-[#0AFF0F] fill-current" /> para vendedores que querem <span className="text-[#0AFF0F] font-bold ml-1">MAIS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;