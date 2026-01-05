import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-primary-foreground" />
            </div>
            <span className="font-semibold">Татар Мультфильмнары</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2024 - Татар телен өйрәнү һәм популярлаштыру проекты
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="MessageCircle" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
