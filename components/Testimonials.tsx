
import React from 'react';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Carla Silveira',
      role: 'Mãe do Pedro (6 anos)',
      content: 'O Pedro tinha muita resistência com as letras. Em 2 meses com a Andressa, ele já está lendo as primeiras frases sozinho e todo orgulhoso!'
    },
    {
      name: 'Ricardo Mendes',
      role: 'Pai da Sofia (7 anos)',
      content: 'O atendimento individual fez toda a diferença. A Sofia se sente segura e acolhida na casa da professora, é como se fosse uma extensão da nossa família.'
    },
    {
      name: 'Juliana Castro',
      role: 'Mãe da Alice (5 anos)',
      content: 'A paciência e o método da Andressa são incríveis. Ela consegue transformar o aprendizado em brincadeira, minha filha ama as aulas.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">O que os pais dizem</h2>
            <div className="flex justify-center space-x-1">
              {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-2xl">★</span>)}
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className="h-full bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <div className="absolute -top-4 left-8 text-6xl text-purple-100 font-serif">"</div>
                <p className="text-slate-600 mb-6 italic relative z-10 leading-relaxed">
                  {r.content}
                </p>
                <div>
                  <p className="font-bold text-slate-800">{r.name}</p>
                  <p className="text-sm text-purple-600 font-semibold">{r.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
