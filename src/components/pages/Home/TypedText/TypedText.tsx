import { useState, useEffect, FC } from "react";
import { MainHtag } from "./TypedText.styled";


interface TypedTextProps {
  text: string;
  delay: number;
}

const TypedText: FC<TypedTextProps> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <MainHtag>{currentText}</MainHtag>;
};

export default TypedText;
