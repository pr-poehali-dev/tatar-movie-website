import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Проект турында
            </h1>
            <p className="text-lg text-muted-foreground">
              Татар телен өйрәнү, үстерү һәм популярлаштыру
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Target" className="text-primary" />
                Безнең максат
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-xl md:text-2xl leading-relaxed">
              <p>
                Бу проект татар телен өйрәнү, үстерү һәм популярлаштыру максатыннан чыгып эшләнә.
                Без балаларның һәм өлкәннәрнең татар телендә мультфильмнар карап, аудиохикәяләр
                тыңлап, телне үстерергә ярдәм итәбез.
              </p>
              <p>
                Безнең сайтта сез борынгы татар халык әкиятләрен, заманча хикәяләрне һәм
                балалар өчен махсус ясалган контентны табарсыз.
              </p>
            </CardContent>
          </Card>


        </div>
      </div>

      <Footer />
    </div>
  );
}