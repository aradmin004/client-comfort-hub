import { CheckSquare } from 'lucide-react';

const approaches = [
  'Estimer vos besoins, en termes d\'organisation, de matériels techniques et de ressources humaines',
  'Proposer des solutions informatiques et la marche à suivre pour l\'implémentation',
  'Proposer des solutions afin d\'améliorer les structures existantes',
  'Former le personnel ou le gestionnaire IT',
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              À propos d'<span className="text-primary">Arotech</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="animate-fade-up">
              <strong className="text-foreground">Arotech</strong> est spécialisé dans les technologies de l'information et de la communication. 
              Nous proposons des services et conseils informatiques aux particuliers, aux indépendants 
              et professions libérales ainsi qu'aux petites et moyennes entreprises.
            </p>
            
            <p className="animate-fade-up animation-delay-100">
              Nous vous accompagnons dans la mise en œuvre et dans l'évolution de votre infrastructure informatique.
            </p>

            <div className="pt-6">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6 animate-fade-up animation-delay-200">
                Notre démarche consiste à :
              </h3>
              
              <ul className="space-y-4">
                {approaches.map((approach, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 animate-fade-up animation-delay-${(index + 3) * 100}`}
                  >
                    <CheckSquare className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{approach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
