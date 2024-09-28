# Podcast Menager

### Descrição
Um app ao estilo Netflix, aonde possa centralizar diferentes episódios podcasts separados por categorias.

### Domínio
Podcasts feito em video.

### Features
 - Listar os episódios podcasts em sessões de categorias.
   - [saúde, bodybuilder, mentalidade, humor]
 - Filtrar episódios por nome de podcast.

## Como

### Feature:
Listar os episódios podcasts em sessões de categorias.

## Como vou implementar:
GET: retorna lista de episódios

  ```JS
  [
   {
    podcastName: "Flow",
    episode: "CBUM - FLOW #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    category: ["saúde", "esporte", "bodybuilder"]
   },
   {
    podcastName: "Flow",
    episode: "TREINEI COM O CBUM NO CT DA MAX",
    videoId: "JVSI3NKFVig",
    cover: "https://i.ytimg.com/vi/JVSI3NKFVig/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=JVSI3NKFVig",
    category: ["humor", "bodybuilder"]
   }
  ]

  ```

  GET: retorna lista de episoódios baseado em parametro enviado pelo cliente do nome do podcast