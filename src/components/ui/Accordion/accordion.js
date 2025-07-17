import './accordion.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AccordionComponent = () => {
  const classes = useStyles();

  return (
    <div className="accordion-container">
      <div className="accordion-sub-container">
        <div className={classes.root}>
          <h2 style={{ fontWeight: 'normal', color: '#333' }}>
            As pessoas também perguntam
          </h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Quais os diferenciais de Vitor Moreira ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Histórico de participação em projetos com prazos agressivos e
                alta complexidade, mantendo qualidade, organização de código,
                versionamento detalhado e documentação clara. Capacidade de
                trabalhar sob pressão sem comprometer o desempenho.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Quais são os objetivos profissionais de Vitor ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Usar da tecnologia como ferramenta de transformação social,
                contribuindo para projetos que melhorem a vida das pessoas e que
                sejam construídos com propósito, não apenas para funcionar, mas
                para fazer diferença.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                Quais tecnologias Vitor Moreira domina ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Domina tecnologias voltadas ao desenvolvimento para servidores,
                web e DevOps. Entre elas:
                <ul>
                  <li>
                    <strong>Front-end:</strong> React.js, TypeScript, JavaScript
                    (ES6+), Tailwind, SCSS, Material UI
                  </li>
                  <li>
                    <strong>Back-end:</strong> Node.js, Express.js, EJS, CORS,
                    JWT, csurf, express-rate-limit
                  </li>
                  <li>
                    <strong>API e testes:</strong> Axios, Postman, RESTful APIs
                  </li>
                  <li>
                    <strong>Banco de dados:</strong> MongoDB, MySQL
                  </li>
                  <li>
                    <li>
                      <strong>DevOps:</strong> CI/CD, Docker, Kubernetes, AWS
                    </li>
                  </li>
                  <li>
                    <strong>Ferramentas</strong> Jest, Git, GitHub, Babel,
                    ESLint, Prettier, Husky
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className={classes.heading}>
                O Vitor está disponível para trabalhar ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Estou disponível para trabalhar, desde que tenha café e
                internet, e sempre disposto a aprender, crescer e contribuir com
                projetos que desafiem minha criatividade e habilidades técnicas.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
