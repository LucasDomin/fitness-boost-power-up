
import React from 'react';
import { Zap, Heart, Activity } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto">
        <h2 className="impact-text text-3xl md:text-4xl text-center mb-16 text-white">
          BENEFÍCIOS <span className="red-accent">COMPROVADOS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-zinc-900/50 rounded-lg hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mb-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Activity size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">+15% de Força Muscular</h3>
            <p className="text-gray-300">Suplementação com creatina comprovadamente aumenta sua força em até 15%!</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-zinc-900/50 rounded-lg hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mb-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">30% Menos Risco Cardiovascular</h3>
            <p className="text-gray-300">O Ômega 3 protege seu coração e melhora sua saúde geral.</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-zinc-900/50 rounded-lg hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mb-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Resultados Mais Rápidos nos Treinos</h3>
            <p className="text-gray-300">Pré-treinos com cafeína, beta-alanina e taurina para explosão de energia.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
