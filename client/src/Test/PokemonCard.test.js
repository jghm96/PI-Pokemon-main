import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import PokemonCard from "../Components/PokemonCard";
import attackImg from "../images/attack.png"
import { NavLink } from "react-router-dom";

configure({ adapter: new Adapter() });

const pokemon = {
    name :"pikachu",
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg",
    id:1,
    types:[{name:"grass"},{name:"fire"}],
    attack:80
}

describe("Pokemon card test", () => {
   let pokemonCard;
   beforeEach(() => {
    pokemonCard = (pokemon) =>
      shallow(<PokemonCard 
       id = {pokemon.id}
       img = {pokemon.img}
       name = {pokemon.name}
       types = {pokemon.types}
       attack = {pokemon.attack} 
    /> )
   })

   it('deberia renderizar un h4 con el nombre del pokemon', () => {
    expect(pokemonCard(pokemon).find("h4").at(0).text()).toBe(
      pokemon.name.toUpperCase()
    )
    })

   it('Debería renderizar un tag "img" y utilizar como source la imagen del pokemon', () => {
    expect(pokemonCard(pokemon).find("img").at(0).prop("src")).toEqual(
      pokemon.img
    );
   })

   it('Debería usar un <NavLink />', () => {
    expect(pokemonCard(pokemon).find(NavLink).length).toBeGreaterThanOrEqual(1);
  });

  it('Debería usar <NavLink> con la ruta //pokemon/:id', () => {
     expect(pokemonCard(pokemon).find(NavLink).at(0).prop("to")).toEqual(
      "/pokemon/1"
    );
  });

   it('Debería renderizar un tag "img" de ataque y utilizar como source la imagen del ataque', () => {
    expect(pokemonCard(pokemon).find("img").at(1).prop("src")).toEqual(
      attackImg
    );
    })

    it('Debería renderizar un tag span con el ataque del pokemon', () => {
        expect(pokemonCard(pokemon).find("span").at(0).text()).toBe(
            pokemon.attack.toString()
        )
    })
    it('Debería renderizar un tag span con el primer type del pokemon', () => {
        expect(pokemonCard(pokemon).find("span").at(1).text()).toBe(
            pokemon.types[0].name.toUpperCase()
        )
    })

    it('Debería renderizar un tag span con el segundo type del pokemon', () => {
        expect(pokemonCard(pokemon).find("span").at(2).text()).toBe(
            pokemon.types[1].name.toUpperCase()
        )
    })

})