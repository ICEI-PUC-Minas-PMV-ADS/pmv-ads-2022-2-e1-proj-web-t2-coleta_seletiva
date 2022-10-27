# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura 12.

![Diagrama de Componentes](img/componentes.png)
<center>Figura 12 - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
    -**Canais** - seções de informações sobre coleta seletiva;
    -**Rede** - informações de locais e datas da coleta seletiva;
    - Associe-se - local de associação ao site.

 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

Hospedagem
O site utiliza a plataforma do GitHub Pages como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL: 

https://link_exemplo.githubpages.com 
A publicação do site no Heroku é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço: 
https://git.pages.com/link_exemplo.git

