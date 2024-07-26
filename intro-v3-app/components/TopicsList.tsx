"use client"
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { useState, useEffect } from "react";
import RemoveBtn from "./RemoveBtn";

type Topic = {
  title: string;
  description: string;
  id: string; // Assuming id is a string, change it if it's different
};

export default function TopicList() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });
        const data = await response.json(); // Assumes the response is in JSON format
        setTopics(data);
      } catch (error) {
        console.error("Failed to fetch topics", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {topics && topics.length > 0 && topics.map((topic) => (
        <div key={topic.id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic.id} />
            <Link href={`/editTopic/${topic.id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
