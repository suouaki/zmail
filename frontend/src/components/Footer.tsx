import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from './Container';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6">
      <Container>
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">© {year} {t('app.title')}</p>
          <div className="flex justify-center items-center space-x-4">
            <a 
              href="https://blog.momobako.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <i className="fas fa-blog mr-1"></i>
              {t('common.blog')}
            </a>
            <a 
              href="https://www.youtube.com/@aki_suou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <i className="fab fa-youtube mr-1"></i>
              {t('common.youtube')}
            </a>
            <a 
              href="https://xugou.mdzz.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <i className="fas fa-chart-line mr-1"></i>
              {t('common.xugouMonitor')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 