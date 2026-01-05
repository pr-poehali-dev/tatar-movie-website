import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AudioPage() {
  const audioCartoons = [
    {
      id: 1,
      title: 'Акыллы тилке',
      description: 'Акыллы тилке турында татар халык әкияте. Хәйләгәрлек һәм акыл турында.',
      duration: '8 мин',
      plays: '1.2K',
    },
    {
      id: 2,
      title: 'Алтын балык',
      description: 'Могҗизалы алтын балык турында хикәя. Теләк тормышның аңлылыгы турында.',
      duration: '12 мин',
      plays: '2.5K',
    },
    {
      id: 3,
      title: 'Өч кыз',
      description: 'Өч апа-сеңел турында әкият. Ярдәм итү һәм игелек турында.',
      duration: '15 мин',
      plays: '980',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Аудиомультфильмнар
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Тыңлап аңларга һәм күзаллау сәләтен үстерергә булышучы әкиятләр
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {audioCartoons.map((audio) => (
            <Card key={audio.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{audio.title}</CardTitle>
                    <CardDescription>{audio.description}</CardDescription>
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Headphones" size={28} className="text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Button size="lg" className="gap-2">
                    <Icon name="Play" size={20} />
                    Тыңларга
                  </Button>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {audio.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      {audio.plays}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
