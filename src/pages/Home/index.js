import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Main, MainTittle } from '../../styles/GlobalStyles';
// import { SectionHome } from './styled';

export default function Home() {
    return (
        <Container>
            <Main>
                <div>
                    <div className="content">
                        <MainTittle>Crie seu próprio código QR em poucos segundos e sem nenhum custo.</MainTittle>
                        <br />
                        <p>
                            Rápido e sem precisar se registrar, podendo ser para transferência PIX ou um texto qualquer.
                        </p>
                        <br />
                        <br />
                        <br />
                        <div className="pageOptions">
                            <Link to="/pix">Pix</Link>
                            <Link to="/text">Texto</Link>
                        </div>
                        <br />
                    </div>
                    <div className="image">
                        <h1>Banner</h1>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <div className="image">
                        <h1>Banner</h1>
                    </div>
                    <div className="content2">
                        <MainTittle>Entre em contato</MainTittle>
                        <br />
                        <p>
                            Caso possua alguma dúvida, queira informar algo, ou necessite fazer contato por algum motivo mande um
                            email.
                        </p>
                        <br />
                        <br />
                        <br />
                        <div className="pageOptions">
                            <a href="mailto:thiagovasconcelosvp@protonmail.com">Email</a>
                        </div>
                        <br />
                    </div>
                </div>
            </Main>
        </Container>
    );
}