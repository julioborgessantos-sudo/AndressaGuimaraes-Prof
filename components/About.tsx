
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-2/5">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-200 rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] -rotate-6"></div>
            <img
              src="https://picsum.photos/seed/teacher/600/800"
              alt="Professora Andressa Guimarães"
              className="relative w-full h-[500px] object-cover rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] shadow-2xl"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Olá, eu sou Andressa Guimarães</h2>
          <div className="w-20 h-1.5 bg-purple-600 rounded-full"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Com anos de experiência dedicados exclusivamente à alfabetização infantil, acredito que cada criança possui seu próprio tempo e ritmo de florescimento.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Minha formação é focada em pedagogia moderna e neurociência da aprendizagem. Desenvolvi um método que une a ludicidade à consciência fonológica, transformando o desafio de aprender a ler e escrever em uma jornada de descobertas e prazer.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Minhas aulas acontecem em um espaço preparado com carinho na minha residência, garantindo um ambiente familiar, tranquilo e livre das distrações da sala de aula convencional.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
              <span className="block text-2xl font-bold text-purple-700">10+</span>
              <span className="text-sm text-purple-600">Anos de Experiência</span>
            </div>
            <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100">
              <span className="block text-2xl font-bold text-sky-700">100+</span>
              <span className="text-sm text-sky-600">Alunos Alfabetizados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
