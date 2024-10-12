import React from "react";
import "./MainStyle.scss";

function Main() {
  return (
    <main>
      <h1>Vai na Flix</h1>
      {/*figure serve como um container para agrupar as imagens e só pode ser usado uma figurecaption por figure*/}
      {/*Para o site GRT usar várias figures com figures Captions*/}
      <figure>
        <a href="https://www.netflix.com/br/title/70140922" target="_blank">
          <img src="https://br.web.img2.acsta.net/medias/nmedia/18/87/34/28/20028730.jpg" alt="Esposa de Mentirinha" />
        </a>
        <a href="https://www.primevideo.com/-/pt/detail/Divergente/0QBS5DTGTN1X5C8BRMZTVJSXGZ" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/pt/8/8e/Divergent.png" alt="Divergente" />
        </a>
        <a href="https://www.netflix.com/br/title/70099113" target="_blank">
          <img src="https://br.web.img2.acsta.net/medias/nmedia/18/87/02/32/19871201.jpg" alt="Crepúsculo" />
        </a>
        <a href="https://www.disneyplus.com/pt-br/browse/entity-ce1ccdca-f468-4960-b67c-026b01ba42ab" target="_blank">
          <img src="https://play-lh.googleusercontent.com/Y8jmhSXKhy-FeQgfJLAPxNQJAbNxxbxFvq8g0DOz4pCBfPpB2vBiSFFvaFk4dbmDrELk" alt="Viva - A vida é uma festa" />
        </a>
        <a href="https://www.primevideo.com/-/pt/detail/Infiltrado-Na-Klan/0GQIV0SYG78T6REYG0HLUYV2RW" target="_blank">
          <img src="https://br.web.img3.acsta.net/pictures/18/06/26/21/10/0013923.jpg" alt="Infiltrados na Klan" />
        </a>
        <a href="https://www.netflix.com/title/60034551" target="_blank">
          <img src="https://m.media-amazon.com/images/S/pv-target-images/070a1aed61aba55b3468421bd0957da868b2fdf82c3a518ad7016aad629bb898.jpg" alt="Meninas Malvadas" />
        </a>
        <a href="https://www.disneyplus.com/pt-br/browse/entity-a3ae7371-39a5-4c0b-a1f2-29a70b372848" target="_blank">
          <img src="https://m.media-amazon.com/images/I/91VjLtvtPkL._AC_UF1000,1000_QL80_.jpg" alt="Rei leão" />
        </a>
        <a href="https://www.primevideo.com/-/pt/detail/Como-Treinar-o-Seu-Drag%C3%A3o/0NU8XM0HNB32QRD00IWTHMXN5Q" target="_blank">
          <img src="https://uauposters.com.br/media/catalog/product/cache/1/thumbnail/800x930/9df78eab33525d08d6e5fb8d27136e95/2/1/216020140608-uau-posters-filmes-infantis-animacao-como-treinar-o-seu-dragao-how-to-train-your-dragon--3.jpg" alt="Como Treinar o seu dragão" />
        </a>
        <a href="https://www.disneyplus.com/pt-br/browse/entity-ec9f9fa3-fbae-4a25-b722-12c3b8ab0ef4" target="_blank">
          <img src="https://lumiere-a.akamaihd.net/v1/images/gife454xsaa8wv-_3e8071e7.jpeg" alt="Divertidamente 2" />
        </a>
        <a href="https://www.max.com/br/pt/movies/todos-menos-voce/5ddb0a43-5f4c-452d-9c3e-acbfda88ea32" target="_blank">
          <img src="https://lh7-us.googleusercontent.com/8VTQzly4UROI9UMkifGS1bWmFxiNbliFBr79TrVpqAK0UDtt9ysPK81Ha8vQ7d80ZUW-qy-VdTi8Kx4irX7w32wrIcGGRYnJYlocehHSY3JtFp62nWIlgCvxUBQHpSZ1vs8RnRIKSAeF55XP4Rr4xqM" alt="Todos menos você" />
        </a>

      </figure>
    </main>
  );
}
export default Main