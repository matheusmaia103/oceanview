import { Button, Typography, Box } from "@material-ui/core";
import GlobalStyles from "./style";
import { Carousel } from "@trendyol-js/react-carousel";

export default function LandingPage() {
  return (
    <article>
      <GlobalStyles />

      <Box component="header">
        <Typography variant="h4">Faça a viagem dos seus sonhos</Typography>
        <Typography variant="h5">
          de maneira fácil e segura com a Oceanview
        </Typography>
        <br />

        <Button color="secondary" variant="contained">
          Confira nossas ofertas
        </Button>
      </Box>
      <Box mt={2} component="main">
        <Typography variant="h5">Nossos serviços</Typography>

        <section className="infos">
          <div className="text">
            <Typography variant="h6">Hospedagem</Typography>
            <br />
            Contamos com uma rede ampla de hotéis em todo o mundo prontos para
            te atender. Com as melhores localizações e melhor custo-benefício.
            Todos os nossos hotéis parceiros possuem excelentes avaliações. Não
            se preocupe, sua segurança estará garantida conosoco!
          </div>
          <div className="img"></div>
        </section>

        <section className="infos">
          <div className="text">
            <Typography variant="h6">Passeios</Typography>
            <br />
            Com uma grande variedade de passeios, a Ocean View fará sua viagem
            se tornar inesquecível! Nossos passeios possuem ótimas avaliações e
            um atendimento especial para você. Aproveite seu passeio com
            segurança e tranquilidade. Temos profissionais experientes para
            garantir sua satisfação.
          </div>
          <div className="img"></div>
        </section>

        <section id="destinations" className="examples">
          <Typography variant="h6">Destinos</Typography>
          <ul>
            <li>Rio de Janeiro</li>
            <li>Peru</li>
            <li>Canadá</li>
            <li>Italia</li>
          </ul>
        </section>

        <section id="activities" className="examples">
          <Typography variant="h6">Atividades</Typography>
          <ul>
            <li>Mergulho</li>
            <li>Trilhas</li>
            <li>Passeios de dromedário</li>
            <li>scky</li>
          </ul>
        </section>

        <section id="feedback">
          <Typography variant="h6">
            Confira a opnião de nossos clientes
          </Typography>

          <ul>
            <li>
              <div className="img"></div>
              <Typography variant="h7">José </Typography>
              Sensacional, uma das melhores experiências
            </li>
            <li>
              <div className="img"></div>
              <Typography variant="h7">Roberto </Typography>
              Sensacional, uma das melhores experiências
            </li>
            <li>
              <div className="img"></div>
              <Typography variant="h7">Pamela </Typography>
              Sensacional, uma das melhores experiências
            </li>
          </ul>
        </section>
      </Box>
    </article>
  );
}
