
import React from 'react';
import Reveal from './Reveal';

const Differentiators: React.FC = () => {
  const items = [
    { title: 'Atendimento Individual', desc: 'Foco total no seu filho durante toda a aula.', icon: '🎯' },
    { title: 'Ambiente Seguro', desc: 'Espaço higienizado, acolhedor e em residência própria.', icon: '🏠' },
    { title: 'Método Personalizado', desc: 'Nada de receitas prontas. Criamos o material para a criança.', icon: '✨' },
    { title: 'Feedback Constante', desc: 'Comunicação aberta e relatórios de progresso.', icon: '💬' }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-purple-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Por que escolher o meu acompanhamento?</h2>
              <p className="text-purple-200 text-lg mb-10">
                Mais do que aulas, ofereço um suporte emocional e pedagógico para que seu filho desenvolva autonomia e amor pelos estudos.
              </p>
            </Reveal>
            <div className="space-y-6">
              {items.map((item, i) => (
                <Reveal key={i} delay={200 + i * 100}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-700/50 p-3 rounded-xl text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-purple-300">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full">
            <Reveal direction="none" delay={300}>
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl"></div>
                <img
                  src="https://picsum.photos/seed/happy/700/700"
                  alt="Criança feliz estudando"
                  className="relative rounded-3xl shadow-2xl w-full aspect-square object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
