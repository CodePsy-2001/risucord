const PromptType = {
  PLAIN: 'PLAIN',
  JAILBREAK: 'JAILBREAK',
  CHAT_HISTORY: 'CHAT_HISTORY',
  PERSONA: 'PERSONA',
  CHARACTER: 'CHARACTER',
  WRITERS_NOTE: 'WRITERS_NOTE',
  LOREBOOK: 'LOREBOOK',
  MEMORY: 'MEMORY',
  FINAL: 'FINAL',
} as const

const PromptRole = {
  USER: 'USER',
  CHARACTER: 'CHARACTER',
  SYSTEM: 'SYSTEM',
} as const

export interface Prompt {
  name: string
  type: keyof typeof PromptType
  content: string
  role: keyof typeof PromptRole
}
