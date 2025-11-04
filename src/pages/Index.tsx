import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [testStep, setTestStep] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const languages = [
    { code: 'en', name: 'Английский', flag: '🇬🇧', learners: '2.5M+' },
    { code: 'es', name: 'Испанский', flag: '🇪🇸', learners: '1.8M+' },
    { code: 'de', name: 'Немецкий', flag: '🇩🇪', learners: '1.2M+' },
    { code: 'fr', name: 'Французский', flag: '🇫🇷', learners: '1.1M+' },
    { code: 'it', name: 'Итальянский', flag: '🇮🇹', learners: '890K+' },
    { code: 'zh', name: 'Китайский', flag: '🇨🇳', learners: '750K+' },
    { code: 'ja', name: 'Японский', flag: '🇯🇵', learners: '620K+' },
    { code: 'ko', name: 'Корейский', flag: '🇰🇷', learners: '580K+' },
  ];
  
  const demoQuestions = [
    {
      question: 'Choose the correct form of the verb:',
      text: 'She _____ to the store yesterday.',
      options: ['go', 'goes', 'went', 'going'],
      correct: 'went'
    },
    {
      question: 'Select the right preposition:',
      text: 'I will meet you _____ 5 PM.',
      options: ['in', 'at', 'on', 'for'],
      correct: 'at'
    }
  ];

  const features = [
    {
      icon: 'Brain',
      title: 'ИИ + Человек',
      description: 'Уникальная комбинированная оценка от искусственного интеллекта и квалифицированных преподавателей',
    },
    {
      icon: 'Languages',
      title: 'Множество языков',
      description: 'Не только английский – проверяйте знания любого иностранного языка',
    },
    {
      icon: 'Award',
      title: 'Международные сертификаты',
      description: 'Получите сертификат, который котируется на международном уровне',
    },
    {
      icon: 'Zap',
      title: 'Быстрая проверка',
      description: 'Узнайте свой уровень за 15 минут без регистрации',
    },
    {
      icon: 'BookOpen',
      title: 'Детальный разбор',
      description: 'Получите подробные объяснения всех ошибок и персональные рекомендации',
    },
    {
      icon: 'Users',
      title: 'Опытные преподаватели',
      description: 'Премиум-подписка с дополнительной проверкой от экспертов',
    },
  ];

  const teachers = [
    {
      name: 'Анна Смирнова',
      specialization: 'Английский язык',
      experience: '15 лет',
      certificates: 'CELTA, DELTA',
      image: '👩‍🏫',
    },
    {
      name: 'Михаил Петров',
      specialization: 'Немецкий язык',
      experience: '12 лет',
      certificates: 'Goethe-Zertifikat',
      image: '👨‍🏫',
    },
    {
      name: 'Елена Иванова',
      specialization: 'Французский язык',
      experience: '10 лет',
      certificates: 'DALF C2',
      image: '👩‍🏫',
    },
  ];

  const faqItems = [
    {
      question: 'Как работает оценка уровня языка?',
      answer: 'Наша система использует двойную проверку: сначала искусственный интеллект анализирует ваши ответы по множеству параметров, затем квалифицированный преподаватель проверяет результаты и даёт дополнительные рекомендации.',
    },
    {
      question: 'Сколько времени занимает тестирование?',
      answer: 'Базовый тест занимает около 15-20 минут. Для более детальной оценки с участием преподавателя может потребоваться до 45 минут.',
    },
    {
      question: 'Нужна ли регистрация для прохождения теста?',
      answer: 'Нет, базовый тест можно пройти без регистрации. Регистрация требуется только для получения сертификата и доступа к премиум-функциям.',
    },
    {
      question: 'Какие сертификаты вы выдаёте?',
      answer: 'Мы выдаём международно признанные сертификаты, соответствующие уровням CEFR (A1-C2). Сертификаты подписываются нашими квалифицированными преподавателями.',
    },
    {
      question: 'Что входит в премиум-подписку?',
      answer: 'Премиум включает: детальный разбор ошибок с преподавателем, персональные рекомендации по обучению, неограниченное количество тестов, приоритетную поддержку и скидку на сертификаты.',
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EasyLang
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-foreground/70 hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#languages" className="text-foreground/70 hover:text-primary transition-colors">
              Языки
            </a>
            <a href="#teachers" className="text-foreground/70 hover:text-primary transition-colors">
              Преподаватели
            </a>
            <a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Начать тест</Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20">
              🚀 Инновационная платформа
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Узнайте свой уровень
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                владения языком
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Первая в мире платформа, где искусственный интеллект работает в паре с квалифицированными преподавателями для максимально точной оценки ваших знаний
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Пройти тест бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Info" className="mr-2" size={20} />
                Как это работает
              </Button>
            </div>
            <div className="mt-12 flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span>500K+ пользователей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Globe" size={16} className="text-secondary" />
                <span>50+ языков</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={16} className="text-accent" />
                <span>100K+ сертификатов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Попробуйте прямо сейчас</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Демо-тест без регистрации</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Проверьте как работает наша система за 2 минуты
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                {testStep === 0 ? (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                      <Icon name="Languages" size={40} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Выберите язык для теста</h3>
                      <p className="text-muted-foreground">Мы проверим ваш базовый уровень владения языком</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {languages.slice(0, 4).map((lang) => (
                        <Button
                          key={lang.code}
                          variant={selectedLanguage === lang.code ? "default" : "outline"}
                          className="h-auto py-4 flex flex-col items-center gap-2"
                          onClick={() => setSelectedLanguage(lang.code)}
                        >
                          <span className="text-3xl">{lang.flag}</span>
                          <span className="text-sm">{lang.name}</span>
                        </Button>
                      ))}
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full"
                      disabled={!selectedLanguage}
                      onClick={() => setTestStep(1)}
                    >
                      Начать тест
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                  </div>
                ) : testStep <= demoQuestions.length ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">Вопрос {testStep} из {demoQuestions.length}</Badge>
                      <div className="flex gap-1">
                        {demoQuestions.map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-12 h-1 rounded ${i < testStep ? 'bg-primary' : 'bg-muted'}`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{demoQuestions[testStep - 1].question}</h3>
                      <p className="text-lg">{demoQuestions[testStep - 1].text}</p>
                      
                      <div className="grid gap-3">
                        {demoQuestions[testStep - 1].options.map((option) => (
                          <Button
                            key={option}
                            variant={selectedAnswer === option ? "default" : "outline"}
                            className="justify-start h-auto py-4 text-left"
                            onClick={() => setSelectedAnswer(option)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full"
                      disabled={!selectedAnswer}
                      onClick={() => {
                        setSelectedAnswer(null);
                        setTestStep(testStep + 1);
                      }}
                    >
                      Следующий вопрос
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                      <Icon name="CheckCircle2" size={40} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Отличная работа!</h3>
                      <p className="text-muted-foreground mb-4">Ваш результат анализируется...</p>
                      <div className="bg-muted rounded-lg p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Предварительный уровень:</span>
                          <Badge className="text-lg px-4 py-1">B1</Badge>
                        </div>
                        <div className="space-y-2 text-sm text-left">
                          <div className="flex items-start gap-2">
                            <Icon name="Sparkles" size={16} className="text-primary mt-1" />
                            <span><strong>ИИ анализ:</strong> Хорошее понимание грамматики</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Icon name="User" size={16} className="text-secondary mt-1" />
                            <span><strong>Рекомендация преподавателя:</strong> Работайте над временами</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button size="lg" className="w-full">
                      Получить полный отчёт
                      <Icon name="FileText" className="ml-2" size={20} />
                    </Button>
                    <Button variant="outline" onClick={() => { setTestStep(0); setSelectedLanguage(null); }}>
                      Пройти ещё раз
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Наше преимущество</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как работает двойная проверка</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Единственная платформа, где ИИ обучается на опыте реальных преподавателей
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">ИИ анализ</h3>
                    <p className="text-muted-foreground">
                      Искусственный интеллект моментально проверяет грамматику, лексику и структуру ваших ответов по 50+ параметрам
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Проверка преподавателем</h3>
                    <p className="text-muted-foreground">
                      Квалифицированный специалист анализирует результаты ИИ, добавляет контекст и личные рекомендации
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Обучение системы</h3>
                    <p className="text-muted-foreground">
                      Каждая проверка преподавателя обучает ИИ, передавая многолетний опыт и методики. Система становится умнее с каждым тестом
                    </p>
                  </div>
                </div>
              </div>
              
              <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Icon name="Brain" size={32} className="text-primary" />
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">ИИ анализ</div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-primary/60 w-[95%]"></div>
                      </div>
                    </div>
                    <span className="font-bold text-primary">95%</span>
                  </div>
                  
                  <Icon name="Plus" size={20} className="text-muted-foreground mx-auto block" />
                  
                  <div className="flex items-center gap-3">
                    <Icon name="User" size={32} className="text-secondary" />
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">Опыт преподавателя</div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-secondary/60 w-[98%]"></div>
                      </div>
                    </div>
                    <span className="font-bold text-secondary">98%</span>
                  </div>
                  
                  <Icon name="ArrowDown" size={20} className="text-muted-foreground mx-auto block" />
                  
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-4 text-center">
                    <div className="text-sm mb-1">Точность оценки</div>
                    <div className="text-3xl font-bold">99.2%</div>
                    <div className="text-xs opacity-90 mt-1">Подтверждено международными экспертами</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+ лет</div>
                <p className="text-muted-foreground">Средний опыт наших преподавателей</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">50K+</div>
                <p className="text-muted-foreground">Проверок обучили нашу систему</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-muted-foreground">Доступность ИИ-ассистента</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Все возможности платформы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный набор инструментов для точной оценки языковых навыков
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="languages" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Доступные языки</h2>
            <p className="text-muted-foreground text-lg">
              Выберите язык для тестирования
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {languages.map((language) => (
              <Card
                key={language.code}
                className={`cursor-pointer transition-all hover:scale-105 ${
                  selectedLanguage === language.code
                    ? 'border-primary border-2 shadow-lg'
                    : 'hover:border-primary/50'
                }`}
                onClick={() => setSelectedLanguage(language.code)}
              >
                <CardHeader className="text-center pb-2">
                  <div className="text-5xl mb-2">{language.flag}</div>
                  <CardTitle className="text-lg">{language.name}</CardTitle>
                  <CardDescription className="text-xs">{language.learners}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          {selectedLanguage && (
            <div className="mt-8 text-center animate-fade-in">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="CheckCircle" className="mr-2" size={20} />
                Начать тест по выбранному языку
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="teachers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преподаватели</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Квалифицированные специалисты с международными сертификатами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-7xl mb-4">{teacher.image}</div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {teacher.specialization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span>Опыт: {teacher.experience}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Award" size={16} className="text-muted-foreground" />
                      <span>{teacher.certificates}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Icon name="Crown" className="text-accent" size={28} />
                  Премиум-подписка
                </CardTitle>
                <CardDescription className="text-base">
                  Получите доступ к проверке от преподавателей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Детальный разбор ошибок с преподавателем</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Персональные рекомендации по обучению</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Неограниченное количество тестов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Скидка 50% на международные сертификаты</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 w-full">
                  Оформить подписку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Международные сертификаты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Подтвердите свой уровень официальным документом
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center">
                    <Icon name="Award" size={48} className="text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Получите сертификат CEFR</CardTitle>
                <CardDescription className="text-base">
                  Официальное подтверждение уровня владения языком, признаваемое во всём мире
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">A1-A2</div>
                    <div className="text-sm text-muted-foreground">Базовый уровень</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">B1-B2</div>
                    <div className="text-sm text-muted-foreground">Средний уровень</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-3xl font-bold text-accent mb-2">C1-C2</div>
                    <div className="text-sm text-muted-foreground">Продвинутый</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-0.5" />
                    <span>Сертификат подписывается квалифицированными преподавателями</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-0.5" />
                    <span>Принимается университетами и работодателями по всему миру</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-0.5" />
                    <span>Цифровая версия доступна сразу после прохождения теста</span>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Получить сертификат
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Остались вопросы? Мы всегда готовы помочь
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>support@easylang.com</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Телефон</CardTitle>
                  <CardDescription>+7 (800) 123-45-67</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="MessageCircle" size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-lg">Чат</CardTitle>
                  <CardDescription>Онлайн-поддержка 24/7</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                  E
                </div>
                <span className="text-xl font-bold">EasyLang</span>
              </div>
              <p className="text-white/70 text-sm">
                Инновационная платформа для оценки уровня владения иностранными языками
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Платформа</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#languages" className="hover:text-white transition-colors">
                    Языки
                  </a>
                </li>
                <li>
                  <a href="#teachers" className="hover:text-white transition-colors">
                    Преподаватели
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name="Mail" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name="Globe" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
            <p>© 2024 EasyLang. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;