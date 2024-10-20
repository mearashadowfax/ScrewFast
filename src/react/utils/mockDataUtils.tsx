import React from 'react';
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { type PlatformId, type ChatDTO, ChatCategoryType } from '../features/Inbox/dtos/chatDtos';

interface PlatformIconProps {
  platformId: PlatformId;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({ platformId }) => {
  switch (platformId) {
    case "whatsapp":
      return <FaWhatsapp size={16} className="text-green-500" />;
    case "messenger":
      return <FaFacebookMessenger size={15} className="text-blue-500" />;
    case "instagram":
      return <FaInstagram size={15} className="text-pink-500" />;
    case "telegram":
      return <FaTelegram size={15} className="text-blue-400" />;
    default:
      return null;
  }
};

const generateRandomMessage = (): string => {
  const shortMessages = [
    "How's it going?",
    "Shall we meet later?",
    "Thanks for the information",
    "Can you send me the file?",
    "I'm on my way",
    "What time is the meeting?",
    "Did you see the game last night?",
    "Happy birthday!",
    "Lunch together today?",
    "Just finished the report",
  ];

  const longMessages = [
    "I've been working on this project for the past week and I think we're making good progress. What do you think about the new features we've implemented? Should we schedule a team meeting to discuss the next steps?",
    "Remember that we have an important client presentation coming up next week. We need to finalize the slides and practice our delivery. Can you review the materials I sent and provide your feedback by tomorrow afternoon?",
    "I've been thinking about our conversation from yesterday regarding the company's expansion plans. I have some ideas that might help streamline the process and reduce costs. When you have a moment, I'd like to discuss this further.",
    "The latest market research report just came in and it's quite interesting. It shows some unexpected trends that could significantly impact our strategy for the next quarter. We should probably arrange a meeting with the marketing team to go over the findings.",
    "I hope you're having a good day so far. I wanted to touch base about the upcoming team-building event. I've got a few suggestions for activities that I think everyone would enjoy. Let me know when you're free to chat about it.",
  ];

  return Math.random() < 0.7
    ? shortMessages[Math.floor(Math.random() * shortMessages.length)]
    : longMessages[Math.floor(Math.random() * longMessages.length)];
};

export const generateSampleChats = (count: number): ChatDTO[] => {
  const chats: ChatDTO[] = [];
  for (let i = 0; i < count; i++) {
    const isGroup = Math.random() > 0.7;
    const chatName = isGroup ? `Group ${i + 1}` : `Contact ${i + 1}`;
    const platform = generateRandomPlatform();
    chats.push({
      id: `chat${i + 1}`,
      messages: [
        {
          id: `msg${i + 1}`,
          metadata: {
            chatId: `chat${i + 1}`,
            hubId: `hub${i + 1}`,
            platformId: platform,
            senderName: chatName,
            senderPhoneNumber: `+1234567${i.toString().padStart(3, "0")}`,
            createdAt: new Date(
              Date.now() - Math.random() * 604800000
            ).toISOString(),
          },
          content: {
            type: "text",
            message: generateRandomMessage(),
          },
        },
      ],
      metadata: {
        hubId: `hub${i + 1}`,
        platformId: platform,
        chatImageUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          chatName
        )}&background=random`,
        chatName: chatName,
        chatCategory: isGroup
          ? ChatCategoryType.Group
          : ChatCategoryType.Individual,
        createdAt: new Date(
          Date.now() - Math.random() * 2592000000
        ).toISOString(),
      },
    });
  }
  return chats.sort(
    (a, b) =>
      new Date(b.messages[0].metadata.createdAt).getTime() -
      new Date(a.messages[0].metadata.createdAt).getTime()
  );
};

const generateRandomPlatform = (): PlatformId => {
  const platforms: PlatformId[] = [
    "whatsapp",
    "messenger",
    "instagram",
    "telegram",
  ];
  return platforms[Math.floor(Math.random() * platforms.length)];
};