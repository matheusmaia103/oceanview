import { Button, Typography, Box } from "@material-ui/core";
import GlobalStyles from "./style";
import { Divider, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMoreRounded } from "@material-ui/icons";


export default function LandingPage() {
  return (
    <article>
      <GlobalStyles />

      <Box component="header">
        <Typography color='inherit' variant="h4">Faça a viagem dos seus sonhos</Typography>
        <Typography color='inherit' variant="h5">
          de maneira fácil e segura com a Oceanview
        </Typography>
        <br />

        <Button color='primary' variant="contained">
          Confira nossas ofertas
        </Button>
      </Box>
      <main>
        <Divider className='divider' textAlign='center'>
          <Typography variant="h5" color='inherit'>Nossos serviços</Typography>
        </Divider>
        <section className="infos">
          <div className="text">
            <Typography variant="h6">Hospedagem</Typography>
            <br />
            Contamos com uma rede ampla de hotéis em todo o mundo prontos para
            te atender. Com as melhores localizações e melhor custo-benefício.
            Todos os nossos hotéis parceiros possuem excelentes avaliações. Não
            se preocupe, sua segurança estará garantida conosoco!
          </div>
          <div className="img toRight"></div>
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
          <div className="img toLeft"></div>
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
            <li>Tour pela cidade</li>
            <li>Passeios a camelo</li>
          </ul>
        </section>

        <section id="feedback" className='exmaples'>
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
            <li>
              <div className="img"></div>
              <Typography variant="h7">Pamela </Typography>
              Sensacional, uma das melhores experiências
            </li>
            <li>
              <div className="img"></div>
              <Typography variant="h7">Pamela </Typography>
              Sensacional, uma das melhores experiências
            </li>
            <li>
              <div className="img"></div>
              <Typography variant="h7">Pamela </Typography>
              Sensacional, uma das melhores experiências
            </li>
          </ul>
        </section>
      
        <Box width='100%' marginTop='40px' justifyContent='flex-start'>
          <Divider textAlign='center'>
          <Typography variant='h5' marginBottom='10px'>Perguntas frequentes</Typography>
          </Divider>
          <br />
          <Accordion color='secondary'>
            <AccordionSummary
              expandIcon={<ExpandMoreRounded />}
              aria-controls="frist"
              id="frist"
            >
              <Typography variant='h6'>Por que preciso viajar com a Ocean View?</Typography>
            </AccordionSummary>

            <AccordionDetails>
          Simples. Somos a melhor agência de viagens com as melhores avaliações. Nosso atendimento é reconhecido como um dos melhores no mercado de viagens. E nossa rede de hotéis e passeios surpreendem a todos. Tudo isso porque nossa prioridade não é seu dinheiro, e sim sua felicidade.            </AccordionDetails>
        </Accordion>
          <Accordion color='secondary'>
            <AccordionSummary
              expandIcon={<ExpandMoreRounded />}
              aria-controls="second"
              id="second"
            >
              <Typography variant='h6'>O que isso está me oferecendo?</Typography>
            </AccordionSummary>

            <AccordionDetails>
              A Ocean View oferece a você viagens inesquecíveis com hospedagem e passeios incríveis, por um preço justo. Temos ótimas avaliações no mercado e prezamos muito pelo atendimento humanizado de nossos clientes.
            </AccordionDetails>
        </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreRounded />}
              aria-controls="thrid"
              id="thrid"
            >
              <Typography variant='h6'>E se eu não gostar?</Typography>
            </AccordionSummary>

            <AccordionDetails>
              Garantimos que tudo ocorrerá bem em sua viagem. Mas caso tenha algum problema, entre em contato conosco, que iremos dar a solução! E no pior dos casos, faremos o reembolso de 100% do seu pagamento.
            </AccordionDetails>
        </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreRounded />}
              aria-controls="fouth"
              id="fouth"
            >
              <Typography variant='h6'>Não estou interessado em viajar agora.</Typography>
            </AccordionSummary>

            <AccordionDetails>
              Tudo bem, nós compreendemos. Mas, vale lembrar que preços de viagens podem subir de uma hora para outra, então pode ser que quando você queira viajar os preços não sejam mais os mesmos. Aconselhamos realizar sua viagem agora mesmo!
            </AccordionDetails>
        </Accordion>
        </Box>
      
      </main>
    </article>
  );
}
