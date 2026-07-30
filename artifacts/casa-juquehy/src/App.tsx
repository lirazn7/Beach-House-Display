import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Gallery } from '@/components/Gallery';
import { Reveal } from '@/components/Reveal';
import { HERO_IMAGE, GALLERY_IMAGES } from '@/lib/images';
import { 
  Wifi, Waves, Wind, Car, MapPin, 
  Coffee, Sun, Trees, Instagram, ChevronDown
} from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

// Helper component for images with reveal
function RevealImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref} 
      className={cn("image-reveal-wrapper rounded-2xl overflow-hidden", className, isInView && "in-view")}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover image-reveal" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90svh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src={HERO_IMAGE} 
            alt="Casa Juquehy vista frontal" 
            className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-2000"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <Reveal animation="fade-up" delay={200}>
            <span className="text-white/90 uppercase tracking-[0.2em] text-sm font-semibold mb-4 block drop-shadow-md">
              Litoral Norte, São Paulo
            </span>
          </Reveal>
          
          <Reveal animation="fade-up" delay={400}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-lg">
              Casa Juquehy
            </h1>
          </Reveal>
          
          <Reveal animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 drop-shadow-md">
              O seu refúgio de tranquilidade, onde a brisa do mar encontra o conforto de um lar desenhado para memórias inesquecíveis.
            </p>
          </Reveal>
          
          <Reveal animation="scale-up" delay={800}>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-xl transition-transform hover:scale-105"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Disponibilidade
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealImage 
            src={GALLERY_IMAGES[1]} 
            alt="Interior da casa" 
            className="aspect-[4/5] shadow-2xl" 
          />
          
          <div className="space-y-8">
            <Reveal animation="fade-up">
              <h2 className="text-3xl md:text-5xl text-foreground font-serif leading-tight">
                Design rústico, alma caiçara.
              </h2>
            </Reveal>
            
            <Reveal animation="fade-up" delay={200}>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                A poucos passos do mar, a Casa Juquehy foi pensada para ser uma extensão da natureza ao redor. Madeiras nobres, texturas naturais e espaços amplos que convidam a luz do sol a entrar.
              </p>
            </Reveal>
            
            <Reveal animation="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Cada canto foi desenhado para acolher. Seja para um café da manhã demorado, um mergulho de tarde ou um jantar sob as estrelas. Aqui, o tempo passa diferente.
              </p>
            </Reveal>

            <Reveal animation="fade-up" delay={400}>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <span className="text-4xl font-serif text-primary block">2</span>
                  <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Suítes</span>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl font-serif text-primary block">8</span>
                  <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">Hóspedes</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. AMENITIES SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3 block">Estrutura</span>
              <h2 className="text-3xl md:text-5xl font-serif">Tudo para seu conforto</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Waves, label: "Piscina Privativa" },
              { icon: Wind, label: "Ar Condicionado" },
              { icon: Wifi, label: "Wi-Fi Veloz" },
              { icon: Coffee, label: "Área Gourmet" },
              { icon: Car, label: "Vaga para 4 carros" },
              { icon: Trees, label: "Jardim Amplo" },
            ].map((amenity, idx) => (
              <Reveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-background border hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <amenity.icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-medium text-sm">{amenity.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPACES SHOWCASE */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="space-y-24">
          
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-5 space-y-6 order-2 md:order-1">
              <Reveal animation="fade-up">
                <h3 className="text-2xl md:text-4xl font-serif">Área Social Integrada</h3>
              </Reveal>
              <Reveal animation="fade-up" delay={200}>
                <p className="text-muted-foreground font-light text-lg">
                  Salas de estar, jantar e cozinha conectadas à varanda. Uma planta livre que estimula a convivência e garante ventilação cruzada durante todo o dia.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <RevealImage src={GALLERY_IMAGES[2]} alt="Área social" className="aspect-[16/10] shadow-xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-7">
              <RevealImage src={GALLERY_IMAGES[3]} alt="Suíte" className="aspect-[16/10] shadow-xl" />
            </div>
            <div className="md:col-span-5 space-y-6">
              <Reveal animation="fade-up">
                <h3 className="text-2xl md:text-4xl font-serif">Suítes Aconchegantes</h3>
              </Reveal>
              <Reveal animation="fade-up" delay={200}>
                <p className="text-muted-foreground font-light text-lg">
                  Quartos projetados para o descanso pleno. Camas espaçosas, enxoval de alta qualidade e janelas amplas para acordar com o som dos pássaros.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-5 space-y-6 order-2 md:order-1">
              <Reveal animation="fade-up">
                <h3 className="text-2xl md:text-4xl font-serif">Jardim e Lazer</h3>
              </Reveal>
              <Reveal animation="fade-up" delay={200}>
                <p className="text-muted-foreground font-light text-lg">
                  O coração externo da casa. Gramado impecável, piscina para se refrescar após a praia e espaço gourmet com churrasqueira para celebrar os melhores dias.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <RevealImage src={GALLERY_IMAGES[4]} alt="Área de lazer" className="aspect-[16/10] shadow-xl" />
            </div>
          </div>

        </div>
      </section>

      {/* 5. FULL GALLERY */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between md:items-end mb-12 gap-6">
            <Reveal animation="fade-up">
              <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3 block">Olhar</span>
              <h2 className="text-3xl md:text-5xl font-serif">Galeria Completa</h2>
            </Reveal>
            <Reveal animation="fade-in" delay={300}>
              <p className="text-muted-foreground font-light max-w-sm">
                Explore cada detalhe e sinta a atmosfera do nosso refúgio.
              </p>
            </Reveal>
          </div>
          
          <Reveal animation="fade-up" delay={200}>
            <Gallery />
          </Reveal>
        </div>
      </section>

      {/* 6. LOCATION */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-accent/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
            <Reveal animation="fade-up">
              <MapPin className="text-primary w-12 h-12 mb-6" strokeWidth={1} />
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">
                A joia de São Sebastião
              </h2>
            </Reveal>
            
            <Reveal animation="fade-up" delay={200}>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Juquehy é conhecida como a "joia do Litoral Norte". Com areia fina, mar cristalino de águas calmas e cercada pela exuberância da Mata Atlântica, é o cenário perfeito para famílias e casais.
              </p>
            </Reveal>
            
            <Reveal animation="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                A casa está localizada em rua tranquila, garantindo silêncio e segurança, mas a uma curta caminhada tanto da praia quanto do centrinho gastronômico e charmosos shoppings de verão.
              </p>
            </Reveal>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <RevealImage 
              src={GALLERY_IMAGES[5]} 
              alt="Praia de Juquehy" 
              className="w-full aspect-square md:aspect-[4/3] rounded-3xl shadow-2xl" 
            />
          </div>
        </div>
      </section>

      {/* 7. CTA & FOOTER */}
      <section id="contato" className="bg-foreground text-background py-32 px-6 text-center">
        {/* Adicionado flex, flex-col e items-center aqui para forçar a centralização de tudo */}
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-10">
          
          <Reveal animation="fade-up">
            <Sun className="w-12 h-12 text-primary opacity-80" strokeWidth={1} />
          </Reveal>
          
          <Reveal animation="fade-up" delay={100}>
            <h2 className="text-4xl md:text-6xl font-serif">Sua próxima viagem começa aqui.</h2>
          </Reveal>
          
          <Reveal animation="fade-up" delay={200}>
            <p className="text-xl text-white/60 font-light">
              Consulte nossas datas disponíveis e garanta seus dias de descanso.
            </p>
          </Reveal>
          
          <Reveal animation="scale-up" delay={400}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* Alterado para inline-flex para não quebrar a centralização */}
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 rounded-full shadow-2xl transition-transform hover:scale-105 outline-none inline-flex items-center justify-center"
                >
                  Entre em contato <ChevronDown className="ml-2 w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent align="center" sideOffset={12} className="w-[280px] p-2 rounded-2xl shadow-xl">
                <DropdownMenuItem asChild className="text-base cursor-pointer p-4 focus:bg-primary/10 rounded-xl mb-1 transition-colors">
                  <a href="https://wa.link/rf7prh" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    {/* Ícone do WhatsApp */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.275-.883-.63-1.48-1.408-1.653-1.705-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp - Contato 1
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="text-base cursor-pointer p-4 focus:bg-primary/10 rounded-xl mb-1 transition-colors">
                  <a href="https://wa.link/u1b62u" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    {/* Ícone do WhatsApp */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.275-.883-.63-1.48-1.408-1.653-1.705-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp - Contato 2
                  </a>
                </DropdownMenuItem>
                
                <DropdownMenuItem asChild className="text-base cursor-pointer p-4 focus:bg-primary/10 rounded-xl transition-colors">
                  <a href="https://www.instagram.com/juquehy_home?igsh=MWZhcmR2dDJiODhiaw==" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Instagram className="w-4 h-4 mr-2" />
                    Falar pelo Instagram
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Reveal>

        </div>
      </section>

      <footer className="bg-foreground text-white/40 py-12 px-6 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-serif text-2xl text-white/80">Casa Juquehy</span>
          
          <div className="text-sm font-light">
            © {new Date().getFullYear()} Casa Juquehy. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/juquehy_home?igsh=MWZhcmR2dDJiODhiaw==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}