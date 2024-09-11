export const NavMenuSmallScreenComp = () => {
  return (
    <>
      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <li>
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/blog"
          >
            <div className="mb-2 mt-4 text-lg font-medium">
              Tous les articles
            </div>
            <p className="text-sm leading-tight text-muted-foreground">
              Accéder à tous les articles et témoignages
            </p>
          </a>
        </li>
        <li>
          <a href="/blog?type=women">Articles dédiée aux femmes.</a>
        </li>
        <li>
          <a href="/blog?type=men">Articles dédiée aux femmes.</a>
        </li>

        <li>
          <a href="/qui-sommes-nous">Qui sommes nous</a>
        </li>
        <li>
          <a href="/rgpd">RGPD</a>
        </li>
        <li>
          <a href="mailto:fertikoze@gmail.com">Envoyer un mail</a>
        </li>
      </ul>
    </>
  );
};
