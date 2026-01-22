import { useState } from "react";
import css from "./App.module.css";

// Импортируем компоненты
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

// Импортируем типы
import { Votes, VoteType } from "../../types/votes";

export default function App() {
  // Состояние голосов
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функция для голосования
  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  // Функция для сброса голосов
  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  // Вычисляем общие показатели
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      {/* Информация о кафе */}
      <CafeInfo />

      {/* Кнопки голосования */}
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />

      {/* Статистика или уведомление */}
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
