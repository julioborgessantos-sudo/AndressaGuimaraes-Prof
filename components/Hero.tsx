
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-purple-50 via-white to-sky-50 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-8">
          <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold tracking-wide mb-2 uppercase">
            Educação com Propósito
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Alfabetização com <span className="text-purple-600">carinho</span>, método e resultados reais.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto md:mx-0">
            Aulas particulares personalizadas para crianças de até 8 anos em ambiente residencial seguro e acolhedor.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a
              href="https://wa.me/5511999999999"
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition-all shadow-xl hover:shadow-purple-200 text-center"
            >
              Agendar uma conversa
            </a>
            <a
              href="#metodo"
              className="bg-white border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-50 transition-all text-center"
            >
              Conhecer o método
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-purple-200/50 rounded-3xl blur-2xl group-hover:bg-purple-300/50 transition-all duration-500"></div>
          <img
            src="https://picsum.photos/seed/literacy/800/600"
            alt="Criança aprendendo alegremente"
            className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden lg:block transform rotate-6">
            <p className="text-sm font-bold text-purple-600">✨ Foco no aprendizado</p>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden lg:block transform -rotate-3">
            <p className="text-sm font-bold text-sky-600">🏠 Ambiente Seguro</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
