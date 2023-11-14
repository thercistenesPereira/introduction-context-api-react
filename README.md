# Context API React JS

A Context API no React oferece uma maneira eficiente de compartilhar estados entre vários componentes em uma árvore de componentes, eliminando a necessidade de passar manualmente o estado por meio de props. Essa abordagem é especialmente útil em situações em que vários componentes precisam acessar e modificar o mesmo estado global.

A Context API é uma forma nativa do React utilizada para compartilhar informações entre componentes, sem precisar recorrer ao prop drilling e sem precisar instalar nenhum recurso externo.

### Tecnologias Utilizadas

- `React JS:` O projeto foi desenvolvido utilizando o framework React, que oferece uma abordagem declarativa e eficiente para criar interfaces de usuário interativas.
  
- `Context API:` A Context API do React foi empregada para gerenciar o estado global da aplicação, permitindo que componentes compartilhem informações sem a necessidade de prop drilling.

- `React Hooks:` Foram utilizados hooks, como o useState, para gerenciar o estado local dos componentes de forma funcional.

## Estrutura do Projeto

### 1. Criação e Disponibilização do Contexto

- Para criar e disponibilizar o contexto, foi utilizado o método `createContext` do React. Este método retorna um objeto contendo o `Provider` e o `Consumer`. O `Provider` é responsável por fornecer os dados do contexto para os componentes abaixo dele na árvore de componentes. Ele aceita uma propriedade obrigatória chamada value, que contém os dados compartilhados.

### 2. ThemeProvider

- O `ThemeProvider` é um componente que utiliza o `useState` para gerenciar o tema da aplicação. Ele encapsula os componentes filhos com o `ThemeContext.Provider`, permitindo que eles acessem e atualizem o tema.

### 3. Consumindo o Contexto nos Componentes

- Os componentes, como `Header`, `Footer`, e `Imagem`, consomem o contexto usando o hook `useContext`, permitindo que eles acessem o tema atual e a função para alterná-lo.

### 4. Estilos Dinâmicos com CSS

- A aplicação utiliza classes dinâmicas no CSS para aplicar estilos diferentes com base no tema atual. Isso é alcançado adicionando ou removendo classes como `dark` e `light` no componente principal `(div.app)`, `footer`, e outros elementos.

## Como Utilizar

- Clone o repositório:

```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

- Instale as dependências:

```
cd nome-do-repositorio
npm install
```

- Sinta-se à vontade para explorar e modificar o código conforme necessário para atender às suas necessidades.
