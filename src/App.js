import React, { useState } from "react";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Container, Title, ContainerFilter, FilterColor, FilterSize, FilterPrice, ViewMore, ContainerOrder, ButtonOrder, ButtonFilter, OpenMobile, ButtonFilterClose, Main, ViewMoreMobile, TitleFilter, ButtonOrderClose } from "./appstyled.js";
import x from "./img/x.png";
import seta from "./img/seta.png";


const App = ({ }) => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  // filtros
  const [filters, setFilters] = useState({});
  const [order, setOrder] = useState();

  // abre e fecha versão mobile
  const [open, setOpen] = useState(false)
  const [openOrder, setOpenOrder] = useState(false)

  // Filtros
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  // Abrir novos elementos
  const [content, setContent] = useState();

  function handleClickContent() {
    setContent(!content);
  }


  // Inserir itens no carrinho
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      <Main>
        <Title>Blusas</Title>
        <Container >


          <OpenMobile>

            {/* Abre versão mobile */}
            <ButtonOrder open={openOrder} onClick={() => setOpenOrder(!openOrder)}>
            Ordenar
            </ButtonOrder>
            
            <ContainerOrder open={(openOrder)}>

            {/* Fecha versão mobile */}
              <ButtonOrderClose open={openOrder} onClick={() => setOpenOrder(!openOrder)} >Ordenar
                <img src={x} width="20px" height="20px" alt="button close" />
              </ButtonOrderClose>

              {/* Opções de filtro */}
              <select onChange={(e) => setOrder(e.target.value)}>
                <option value="">Ordenar por:</option>
                <option value="new">Mais recentes</option>
                <option value="asc">Menor preço</option>
                <option value="desc">Maior preço</option>
              </select>
            </ContainerOrder>

            {/* Abre versão mobile */}
            <ButtonFilter open={open} onClick={() => setOpen(!open)}>Filtrar</ButtonFilter>

            <ContainerFilter open={(open)}>

              <FilterColor name="color" onChange={handleFilters}>
                {/* Fecha versão mobile */}
                <ButtonFilterClose open={open} onClick={() => setOpen(!open)}>
                  Filtrar
                  <img src={x} width="20px" height="20px" alt="button close" />
                </ButtonFilterClose>

                <TitleFilter >
                  <h2>Cores</h2>
                  <img src={seta} width="25px" height="25px" alt="seta" />
                </TitleFilter>

                <ul>
                  <input type="checkbox" name="color" value="amarelo" />
                  <label>Amarelo</label>
                  <input type="checkbox" name="color" value="azul" />
                  <label>Azul</label>
                  <input type="checkbox" name="color" value="branco" />
                  <label>Branco</label>
                  <input type="checkbox" name="color" value="cinza" />
                  <label>Cinza</label>
                  <input type="checkbox" name="color" value="laranja" />
                  <label>Laranja</label>
                </ul>
                {content && (
                  <div><ViewMore>
                    <ul>
                      <input type="checkbox" name="color" value="verde" /><label>Verde</label>
                      <input type="checkbox" name="color" value="vermelho" /><label>vermelho</label>
                      <input type="checkbox" name="color" value="preto" /><label>preto</label>
                      <input type="checkbox" name="color" value="rosa" /><label>Rosa</label>
                      <input type="checkbox" name="color" value="vinho" /><label>Vinho</label>
                    </ul>
                  </ViewMore></div>
                )}
                {!content && (
                  <div></div>
                )}
                <span type="button" onClick={handleClickContent}> Ver todas as cores </span>
                <ViewMoreMobile>
                  <ul>
                    <input type="checkbox" name="color" value="verde" /><label>Verde</label>
                    <input type="checkbox" name="color" value="vermelho" /><label>vermelho</label>
                    <input type="checkbox" name="color" value="preto" /><label>preto</label>
                    <input type="checkbox" name="color" value="rosa" /><label>Rosa</label>
                    <input type="checkbox" name="color" value="vinho" /><label>Vinho</label>
                  </ul>
                </ViewMoreMobile>
              </FilterColor>
              <FilterSize name="size" onChange={handleFilters}>

                <TitleFilter>
                  <h2>Tamanhos</h2>
                  <img src={seta} width="25px" height="25px" alt="seta" />
                </TitleFilter>
                <ul>
                  <input type="checkbox" name="size" value="P" /><label>P</label>
                  <input type="checkbox" name="size" value="M" /><label>M</label>
                  <input type="checkbox" name="size" value="G" /><label>G</label>
                  <input type="checkbox" name="size" value="G" /><label>GG</label>
                  <input type="checkbox" name="size" value="U" /><label>U</label>
                  <input type="checkbox" name="size" value="3" /><label>36</label>
                  <input type="checkbox" name="size" value="3" /><label>38</label>
                  <input type="checkbox" name="size" value="4" /><label>40</label>
                  <input type="checkbox" name="size" value="3" /><label>36</label>
                  <input type="checkbox" name="size" value="3" /><label>38</label>
                  <input type="checkbox" name="size" value="4" /><label>40</label>
                </ul>
              </FilterSize>

              <FilterPrice name="price" onChange={handleFilters}>
                <TitleFilter>
                  <h2>Faixa de preço</h2>
                  <img src={seta} width="25px" height="25px" alt="seta" />
                </TitleFilter>
                <ul>
                  <input type="checkbox" name="parc" value="50"  /><label>de R$ 0 até R$50</label>
                  <input type="checkbox" name="parc" value="150" /><label>de R$51 até R$150</label>
                  <input type="checkbox" name="parc" value="300" /><label>de R$151 até R$300</label>
                  <input type="checkbox" name="parc" value="500" /><label>de R$301 até R$500</label>
                  <input type="checkbox" name="parc" value="501" /><label>a partir de R$500</label>
                </ul>
              </FilterPrice>
            </ContainerFilter>
          </OpenMobile>


          {show ? (

            <Products handleClick={handleClick} filters={filters} order={order} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}


        </Container>
      </Main>
      <Footer />
    </React.Fragment>
  )
}

export default App;