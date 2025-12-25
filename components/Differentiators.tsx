
import React from 'react';

const Differentiators: React.FC = () => {
  const items = [
    { title: 'Atendimento Individual', desc: 'Foco total no seu filho durante toda a aula.', icon: '🎯' },
    { title: 'Ambiente Seguro', desc: 'Espaço higienizado, acolhedor e em residência própria.', icon: '🏠' },
    { title: 'Método Personalizado', desc: 'Nada de receitas prontas. Criamos o material para a criança.', icon: '✨' },
    { title: 'Feedback Constante', desc: 'Comunicação aberta e relatórios de progresso.', icon: '💬' }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Por que escolher o meu acompanhamento?</h2>
            <p className="text-purple-200 text-lg mb-10">
              Mais do que aulas, ofereço um suporte emocional e pedagógico para que seu filho desenvolva autonomia e amor pelos estudos.
            </p>
            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-purple-700/50 p-3 rounded-xl text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-purple-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl"></div>
             <img
              src="https://picsum.photos/seed/happy/700/700"
              alt="Criança feliz estudando"
              className="relative rounded-3xl shadow-2xl w-full aspect-square object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
