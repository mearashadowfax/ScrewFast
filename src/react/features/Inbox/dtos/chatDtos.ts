export type ChatId = string;
export type MessageId = string;
export type HubId = string;
export type PlatformId = "whatsapp" | "messenger" | "instagram" | "telegram";

export enum ChatCategoryType {
  Individual = "Individual",
  Group = "Group",
}

// Interfaces
export interface MessageMetadataDTO {
  chatId: ChatId;
  hubId: HubId;
  platformId: PlatformId;
  senderName: string;
  senderPhoneNumber: string;
  createdAt: string;
}

export interface ChatMetadataDTO {
  hubId: HubId;
  platformId: PlatformId;
  chatImageUrl: string;
  chatName: string;
  chatCategory: ChatCategoryType;
  createdAt: string;
}

export interface TextContentDTO {
  type: "text";
  message: string;
}

export interface ChatMessageDTO {
  id: MessageId;
  metadata: MessageMetadataDTO;
  content: TextContentDTO;
}

export interface ChatDTO {
  id: ChatId;
  messages: ChatMessageDTO[];
  metadata: ChatMetadataDTO;
}

