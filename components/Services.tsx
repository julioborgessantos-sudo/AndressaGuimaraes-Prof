
import React from 'react';
import Reveal from './Reveal';

const services = [
  {
    icon: '📚',
    title: 'Alfabetização Inicial',
    desc: 'O primeiro contato com o mundo das letras, focando na leitura e escrita de forma lúdica.',
    benefit: 'Garante uma base sólida e segura para o futuro acadêmico.',
    color: 'bg-blue-50'
  },
  {
    icon: '✏️',
    title: 'Reforço Escolar',
    desc: 'Apoio nas dificuldades específicas das matérias escolares do ensino fundamental I.',
    benefit: 'Melhora o desempenho e recupera a confiança da criança na escola.',
    color: 'bg-green-50'
  },
  {
    icon: '🔤',
    title: 'Consciência Fonológica',
    desc: 'Trabalho focado nos sons das letras e sua relação com a escrita escrita.',
    benefit: 'Acelera o processo de decodificação e compreensão de palavras.',
    color: 'bg-purple-50'
  },
  {
    icon: '🧠',
    title: 'Desenvolvimento da Leitura',
    desc: 'Aprimoramento da fluência, entonação e velocidade de leitura para maior prazer.',
    benefit: 'Cria o hábito e o gosto pela leitura desde os primeiros anos.',
    color: 'bg-yellow-50'
  },
  {
    icon: '📝',
    title: 'Apoio na Escrita',
    desc: 'Exercícios de coordenação motora, caligrafia e estruturação de frases e pequenos textos.',
    benefit: 'Desenvolve a clareza e a organização do pensamento no papel.',
    color: 'bg-pink-50'
  },
  {
    icon: '👶',
    title: 'Atendimento Individual',
    desc: '100% de atenção voltada para as necessidades e o ritmo de uma única criança.',
    benefit: 'Progresso até 3x mais rápido que em grupos grandes.',
    color: 'bg-orange-50'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como posso ajudar seu filho?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Serviços pedagógicos pensados para cada etapa do desenvolvimento infantil, sempre com foco no afeto e na eficácia.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
              <div
                className={`${service.color} h-full p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-white hover:-translate-y-2`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Benefício</span>
                  <p className="text-sm font-semibold text-slate-700">{service.benefit}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
