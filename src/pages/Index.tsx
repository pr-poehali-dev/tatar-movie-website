import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const cartoons = [
    {
      id: 1,
      title: 'Шүрәле',
      description: 'Татар халык әкияте буенча анимацион фильм. Урман рухы Шүрәле турында кызыклы хикәя.',
      duration: '12 мин',
      year: '2024',
      videoId: '1ykSeezXdDOXCCUhYI4yWvJ8EP63EyCT_',
      category: 'Халык әкиятләре',
    },
    {
      id: 2,
      title: 'Су анасы',
      description: 'Борынгы татар легендасы. Елга буенда яшәүче матур Су анасы турында хикәя.',
      duration: '15 мин',
      year: '2024',
      videoId: '1-vTkWPUjMk6LMwye6tB9s4R3AdGK4pYz',
      category: 'Легендалар',
    },
    {
      id: 3,
      title: 'Акбай',
      description: 'Тату дус Акбай эт турында кызыклы һәм шаян хикәя. Дуслык кадере турында.',
      duration: '10 мин',
      year: '2023',
      videoId: '15A9Us1VzkNfPuy6dTKrnm4sNf1npt5PZ',
      category: 'Хайваннар турында',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Татар телендә мультфильмнар
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Милләтебезнең теле, мәдәнияте һәм тарихы турында кызыклы хикәяләр
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartoons.map((cartoon) => (
            <Card key={cartoon.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden aspect-video bg-black">
                <iframe
                  src={`https://drive.google.com/file/d/${cartoon.videoId}/preview`}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
                <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm z-10">
                  {cartoon.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{cartoon.title}</CardTitle>
                <CardDescription className="line-clamp-2">{cartoon.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  {cartoon.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Calendar" size={16} />
                  {cartoon.year}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}