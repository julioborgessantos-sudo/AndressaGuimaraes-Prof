
import React from 'react';
import Reveal from './Reveal';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Reveal direction="up" delay={100}>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[40px] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <Reveal delay={300}>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Seu filho pode aprender a ler com mais confiança e alegria.
                </h2>
              </Reveal>
              
              <Reveal delay={450}>
                <p className="text-xl text-purple-100">
                  Não deixe as dúvidas se tornarem lacunas no aprendizado. Agende hoje uma aula experimental e veja a transformação.
                </p>
              </Reveal>

              <Reveal delay={600}>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a
                    href="https://wa.me/5511999999999"
                    className="w-full sm:w-auto bg-white text-purple-700 px-10 py-5 rounded-full text-xl font-bold hover:bg-purple-50 transition-transform hover:scale-105 shadow-xl"
                  >
                    Falar no WhatsApp
                  </a>
                  <a
                    href="https://wa.me/5511999999999"
                    className="w-full sm:w-auto bg-purple-700/30 border-2 border-white/50 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-purple-700/50 transition-all"
                  >
                    Aula Experimental
                  </a>
                </div>
              </Reveal>

              <Reveal delay={800} direction="none">
                <p className="text-sm text-purple-200 opacity-80 pt-4">
                  * Vagas limitadas para garantir a qualidade do atendimento individual.
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
