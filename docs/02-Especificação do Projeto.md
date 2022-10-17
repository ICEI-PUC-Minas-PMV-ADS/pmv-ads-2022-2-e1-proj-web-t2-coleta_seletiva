# Especificações do Projeto
A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de revisão bibliográfica e análise simplificada do cenário atual.

## Personas
As personas inclusas durante o processo de pesquisa e desenvolvimento do problema são apresentadas nas imagens a seguir:

| <img src="https://www.portaldoenvelhecimento.com.br/wp-content/uploads/2021/07/envelhecimento-humanizado-woman-1795054_1280.jpg" width="350" height="175"/> | Joana Da Silva, 72 anos|
| ------------------------------------------------------------------------- | ------------------------------------------------------------------|
| Ocupação:                                                       | Pofessora aposentada e atualmente dona de casa. Realiza as atividades do lar.                                                                                           |
| Aplicativos:                                                    | WhatsApp e Facebook.                                                        |
| Motivações:                                                     | Tornar a aprendizagem sobre a consciência ambiental mais lúdica e divertida; viver em uma comunidade organizada e limpa.|       
| Frustrações:                                                    | Falta de conhecimento básico sobre a coleta seletiva; pouca divulgação dos horários e locais de coleta; catadores despreparados e trabalhando em condições insalubres. | 



| ![persona 1-edit](https://www.smarttravel.news/wp-content/uploads/2020/12/patrick_logo_LinkedIn_752x393-300x300.jpg) | Pedro Cardoso, 46 anos|
| ------------------------------------------------------------------------- | -------------------------------------------------------------------|
| Ocupação:                                                       | Dono de uma cooperativa de reciclagem. Atua ativamente na organização dos processos de triagem, prensa e venda dos materiais. |
| Aplicativos:                                                    | Linkedin, Instagram, Facebook e WhatsApp. |
| Motivações:                                                     | Expandir seus negócios; ajudar no desenvolvimento sustentável de sua cidade; criar eventos de capacitação profissional que ampliarão as fontes de emprego e renda; possibilitar renda extra por meio da venda de artefatos produzidos pelos cooperados; criar um ecossistema de cooperativas visando mais eficiência. |           
| Frustrações:                                                  |Dificuldade de comunicação entre os agentes da reciclagem; imprevisibilidade do fluxo de coleta; problemas no processo de revenda; Baixa adesão da coleta seletiva entre a população; não ter controle dos acessos feitos; falta de projetos que gerem renda extra e valorizem o trabalho manual. |


## Histórias de Usuários
A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Joana Da Silva  | Informações sobre como deve-se separar o lixo. | Aprender sobre a reciclagem para agregá-la na rotina.     |
|Joana Da Silva  | Conteúdos interativos e divertidos             | Facilitar a aprendizagem. |
|Joana Da Silva  | Informações sobre locais, datas e horários de coleta seletiva. | Levar o lixo para o local de coleta nos dias corretos. Evitando que o lixo seja espalhado causando impactos ambientais.|
|Joana Da Silva | Que os catadores tenham informações para trabalharem em segurança. | Para evitar acidentes de trabalho. |
|Pedro Cardoso | Informações sobre os locais com adesão da coleta seletiva. | Distribuir melhor os pontos de coleta seletiva. |
|Pedro Cardoso | Relatório dos dias e horários de coleta seletiva. | Conseguir administrar melhor o fluxo de coleta. |
|Pedro Cardoso | Explicar para a população a importância da coleta seletiva. | Aumentar o fluxo de coleta e viabilizar a profissão de catador em áreas afastadas.|
|Pedro Cardoso | Possibilitar aos catadores de lixo uma fonte de renda segura. | Criar um fluxo de venda direta entre catadores e empresas reciclagem. |
|Pedro Cardoso | Ter um canal de comunicação entre cooperativas. | Para gerar mais diálogo e produtividade. |
|Pedro Cardoso | Valorização do trabalho manual e gerar renda extra. | Gerar mais empregos e possibilidades para as famílias. |


## Requisitos
As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve ter um menu onde o usuário escolha o tipo de informação que deseja( Rede de coleta, Afinal, o que é coleta seletiva, Diversão e interatividade, Ecossistema, FAQ). | ALTA | 
|RF-002| Apresentar na tela inicial infográficos informativos sobre coleta seletiva.  | MÉDIA |
|RF-003|Permitir a interação entre os agentes de reciclagem(cooperativas) e o site, possibilitando mapeamento e organização dos serviços por eles prestados.| ALTA |
|RF-004|Deve apresentar informações sobre segurança do Trabalho e DDS (diálogo diário de segurança) mostrar a agenda de eventos de Capacitação dos catadores associados.| MÉDIA |
|RF-005|Conter um filtro onde ao inserir seu endereço o usuário consiga  encontrar locais, datas e horários de coleta seletiva.| MÉDIA |
|RF-006|O site deve facilitar o contato de cooperativas de coleta e empresas de reciclagem, possibilitando a venda dos materiais.| MÉDIA |
|RF-007|O site deve oferecer uma agenda com dias e horários de coleta seletiva em cada bairro.| MÉDIA |
|RF-008|Aba de conteúdos interativos contendo vídeos e quizzes.| MÉDIA |
|RF-009|Opção de registro de usuários por redes sociais, e-mail ou CPF.| BAIXA |
|RF-010|FAQ- Perguntas frequentes dos usuários sobre navegação e utilização dos serviços.| BAIXA |
|RF-011|Loja virtual - Usuários podem adquirir produtos artesanais feitos pelos trabalhadores das cooperativas. | BAIXA |

### Requisitos não Funcionais
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID      | Descrição do Requisito  |Prioridade |
|--------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku). | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada. | ALTA | 
|RNF-003|O site deve ter bom nível de contraste entre os elementos da tela em conformidade. | MÉDIA |
|RNF-004|O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). | ALTA |


## Restrições
As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 11/12/2022. |
|RE-02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend.  |
|RE-03|A equipe não pode subcontratar o desenvolvimento do trabalho. |
