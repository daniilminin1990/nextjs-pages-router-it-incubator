import Image from "next/image";
// импортируем тип CharacterType, который создавали в файле useCharacters
import { CharacterType } from "@/assets/hooks/useCharacters";
import styles from "@/components/CharacterCard/CharacterCard.module.scss";

// сделаем тип PropsType, который передадим в props, используем тип CharacterType, который создавали в хуке useCharacters
type PropsType = {
  character: CharacterType;
};

// Передадим props, которые отдаем из /pages/characters/index.tsx
export const CharacterCard = (props: PropsType) => {
  // Деструктурируем props на character
  const { character } = props;

  return (
    // Испортируем styles из файла CharacterCard.module.scss
    <div className={styles.card}>
      <div>{character.name}</div>
      <Image src={character.image} alt={`Pic of ${character.name}`} width={300} height={300} />
    </div>
  );
};
