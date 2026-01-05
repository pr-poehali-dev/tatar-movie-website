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
      title: 'Фыфыф турында әкият',
      duration: '11 мин',
      year: '2026',
      videoId: '1ykSeezXdDOXCCUhYI4yWvJ8EP63EyCT_',
      category: 'әкият',
    },
    {
      id: 2,
      title: 'Аю баласы Зирәккәй турында әкият',
      duration: '17 мин',
      year: '2026',
      videoId: '1-vTkWPUjMk6LMwye6tB9s4R3AdGK4pYz',
      category: 'әкият',
    },
    {
      id: 3,
      title: 'Тиз вакыт',
      duration: '2 мин',
      year: '2026',
      videoId: '15A9Us1VzkNfPuy6dTKrnm4sNf1npt5PZ',
      category: 'мультфильм',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Мультфильмнар
          </h1>
          <div className="text-xl md:text-2xl text-foreground font-medium max-w-4xl mx-auto leading-relaxed text-justify hyphens-auto space-y-4">
            <p>
              Татар телен, татар халкының мәдәниятен һәм гореф-гадәтләрен, балалар һәм өлкәннәрнең үзара мөнәсәбәтләрен саклау, үстерү максатына юнәлдерелгән мультфильмнар бүген шактый киң таралыш алды. Аларның күбесе тыңлап аңлау технологиясе аша татар теле күнекмәләрен үстерүне, сөйләшү нигезләрен формалаштыруны күздә тота.
            </p>
            <p>
              Безнең проект – туган телебезне саклау һәм үстерү өчен күңелле һәм уңайлы бер юл. Сайтыбызда җыелган татар телендәге видео- һәм аудиохикәяләр ярдәмендә яңа буын телебезне табигый итеп үзләштерергә, аңларга һәм сөйләшергә өйрәнә ала.
            </p>
          </div>
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