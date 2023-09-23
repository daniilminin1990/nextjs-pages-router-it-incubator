import { Nullable } from "./../types";
import { useEffect, useState } from "react";
import axios from "axios";

export const useCharacters = (): Nullable<CharacterType[]> => {
  // useEffect для запросов, useState для хранения состояния
  const [characters, setCharacters] = useState<Nullable<CharacterType[]>>(null); // <это generic typecript>

  useEffect(() => {
    // С помощью axios делаем get запрос на url https://rickandmortyapi.com/
    axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`).then((res) => setCharacters(res.data.results));
  }, []);

  //? Весь код выше мы вырезали из Нужно вернуть characters, используем типизацию возврата
  return characters;
};

// Типы объявим тут и используем только нужные нам свойства. И экспортируем, если где-то понадобится
export type CharacterType = {
  id: number;
  name: string;
  image: string;
};
