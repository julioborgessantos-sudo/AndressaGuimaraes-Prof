
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                AG
              </div>
              <span className="text-xl font-bold text-white">Andressa Guimarães</span>
            </div>
            <p className="text-sm leading-relaxed">
              Alfabetização humanizada e personalizada para crianças até 8 anos. Criando bases sólidas para um futuro brilhante.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Links Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#sobre" className="hover:text-purple-400 transition-colors">Sobre Mim</a></li>
              <li><a href="#servicos" className="hover:text-purple-400 transition-colors">Serviços</a></li>
              <li><a href="#metodo" className="hover:text-purple-400 transition-colors">Plano Inteligente</a></li>
              <li><a href="#diferenciais" className="hover:text-purple-400 transition-colors">Diferenciais</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <span className="text-purple-500">📞</span>
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-500">📍</span>
                <span>Bairro Jardim das Flores, São Paulo - SP</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-500">✉️</span>
                <span>andressa.educacao@email.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Horário</h4>
            <ul className="space-y-4 text-sm">
              <li>Segunda a Sexta: 08h às 18h</li>
              <li>Sábado: 09h às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Andressa Guimarães. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com carinho para a educação infantil.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
