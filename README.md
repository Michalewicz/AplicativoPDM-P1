# Componentes do Grupo
- Arthur dos Santos Rodrigues (4rkh)
- Luccas Nicolete Meireles (LuccasNico)
- Rafael Michalewicz Rodrigues (Michalewicz)

# Aplicativo PDM - PrimePizza
Este projeto é um aplicativo mobile desenvolvido em React Native com Expo para a disciplina de Programação para Dispositivos Móveis (PDM). A aplicação simula uma pizzaria online, permitindo ao usuário visualizar produtos, realizar login/registro, adicionar itens ao carrinho e finalizar o pedido.

## Funcionalidades
- Login e Registro: Autenticação de usuários.

- Página Inicial (Home): Apresenta os principais produtos.

- Visualização de Produtos: Pizzas disponíveis para compra.

- Carrinho: Adição e remoção de produtos.

- Pagamento: Confirmação de pedido.

- Perfil do Usuário: Visualização e gerenciamento básico de dados.

- Navegação: Sistema de navegação entre as telas com React Navigation.

## Estrutura do Projeto

```bash
src/
├── components/         # Componentes reutilizáveis
├── fakeBD/             # Simulação de banco de dados local
├── img/                # Imagens utilizadas no app
├── pages/              # Telas principais do app
│   ├── carrinho/
│   ├── home/
│   ├── login/
│   ├── pagamento/
│   ├── perfil/
│   ├── produtos/
│   └── registro/
└── index.js            # Arquivo de exportação principal
```


## Como executar

Você pode testar este projeto diretamente no navegador utilizando o [Expo Snack](https://snack.expo.dev/), sem precisar instalar nada localmente.

### Passos para importar no Snack:

1. Acesse o site [Expo](https://snack.expo.dev).
2. Na barra lateral na esquerda, vá nos (...) laterais e selecione "Import git repository".
3. Cole a URL deste repositório no campo solicitado. Exemplo: [https://github.com/Michalewicz/AplicativoPDM-P1](https://github.com/Michalewicz/AplicativoPDM-P1).
4. Aguarde o carregamento do projeto.
5. Após o carregamento, você já pode visualizar e editar o app diretamente no navegador, no seu celular via QR Code, ou até simular emuladores iOS/Android no próprio site.

## Tecnologias Utilizadas
- React Native

- Expo

- React Navigation

- React Native Paper

- Expo File System

- Async components
