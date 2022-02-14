import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import ImageBlock from "../components/sections/image";
import Portfolio from "../components/sections/portfolio";
import Head from "../components/sections/head";
import Services from "../components/sections/services";

export default function Home() {
  return (
    <>
      <Hero
        subtitle="Фронтенд разработчик & Цифровой дизайнер"
        title="Denis Kunitsyn"
      />
      <ImageBlock className="-full" src="/images/01.webp" alt="hello" />
      <Head
        left
        title="Услуги"
        desc="Я специализируюсь на брендинге. Если бренду требуется обновление или он находится в самом начале пути, я помогу найти его цель и установить связь с целевой аудиторией."
      />
      <Services />

      <Head
        left
        title="Обо мне"
        desc="Я специализируюсь на брендинге. Если бренду требуется обновление или он находится в самом начале пути, я помогу найти его цель и установить связь с целевой аудиторией."
      />
      <About />

      <Head
        left
        title="Проекты"
        desc="Я специализируюсь на брендинге. Если бренду требуется обновление или он находится в самом начале пути, я помогу найти его цель и установить связь с целевой аудиторией."
      />
      <Portfolio />
    </>
  );
}
