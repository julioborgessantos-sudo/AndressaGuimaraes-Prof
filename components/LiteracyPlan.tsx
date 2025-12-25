
import React from 'react';
import Reveal from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico Individual',
    desc: 'Avaliação profunda para identificar o nível atual da criança, seus interesses e dificuldades específicas.',
    icon: '🔍'
  },
  {
    number: '02',
    title: 'Base Fonológica',
    desc: 'Exploração dos sons, reconhecimento de letras e formação das primeiras sílabas de forma divertida.',
    icon: '🎵'
  },
  {
    number: '03',
    title: 'Construção da Leitura',
    desc: 'O momento em que os sons se tornam palavras e as palavras ganham sentido em frases curtas.',
    icon: '📖'
  },
  {
    number: '04',
    title: 'Desenvolvimento da Escrita',
    desc: 'Refinamento da coordenação motora e início da escrita consciente e criativa.',
    icon: '✍️'
  },
  {
    number: '05',
    title: 'Acompanhamento Contínuo',
    desc: 'Monitoramento constante da evolução com relatórios mensais para os pais acompanharem cada vitória.',
    icon: '📈'
  }
];

const LiteracyPlan: React.FC = () => {
  return (
    <section id="metodo" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Plano Inteligente de Alfabetização</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Um método estruturado em 5 etapas para crianças até 8 anos, garantindo um aprendizado leve e definitivo.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical/Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-purple-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 150} direction="up">
                <div className="flex flex-col items-center group h-full">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300 ring-8 ring-white">
                    {step.icon}
                  </div>
                  <div className="bg-purple-50 p-6 rounded-2xl text-center flex-grow border border-purple-100 group-hover:bg-white group-hover:shadow-xl transition-all duration-300 h-full">
                    <span className="text-purple-400 font-bold text-sm block mb-2">{step.number}</span>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiteracyPlan;
