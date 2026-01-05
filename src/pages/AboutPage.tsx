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
            <CardContent className="space-y-4 text-lg leading-relaxed">
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

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" size={32} className="text-primary" />
                </div>
                <CardTitle>Өйрәнү</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Татар телен табигый рәвештә үзләштерү
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <CardTitle>Үстерү</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Сөйләм телен һәм сүзлек запасын арттыру
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <CardTitle>Популярлаштыру</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Милләтебезне уятыру һәм телгә кызыксыну арттыру
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
